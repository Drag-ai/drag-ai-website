const TEMPLATE_IDS = new Set([
  'sales_follow_up', 'customer_support', 'appointment_request',
  'feedback_follow_up', 'reminder_follow_up', 'general_inquiry',
]);
const OUTCOMES = new Set([
  '', 'follow_up', 'interested', 'completed', 'no_answer',
  'not_interested', 'do_not_call',
]);
const RETENTION_MS = 30 * 24 * 60 * 60 * 1000;

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  },
});

const sameOrigin = (request) => {
  const origin = request.headers.get('Origin');
  if (!origin) return false;
  try { return new URL(origin).origin === new URL(request.url).origin; } catch { return false; }
};

const matchesAccessCode = async (provided, expected) => {
  const encoder = new TextEncoder();
  const [leftDigest, rightDigest] = await Promise.all([
    crypto.subtle.digest('SHA-256', encoder.encode(provided)),
    crypto.subtle.digest('SHA-256', encoder.encode(expected)),
  ]);
  const left = new Uint8Array(leftDigest);
  const right = new Uint8Array(rightDigest);
  let mismatch = 0;
  for (let index = 0; index < left.length; index += 1) mismatch |= left[index] ^ right[index];
  return mismatch === 0;
};

async function authorize(request, env, body) {
  if (!sameOrigin(request)) return 'This request is not allowed.';
  if (!env.DEMO_DB || !env.VOICE_DEMO_ACCESS_CODE) return 'The private voice workspace is not configured.';
  const expiry = Date.parse(env.VOICE_DEMO_ACCESS_EXPIRES_AT || '');
  if (!Number.isFinite(expiry) || expiry <= Date.now()) return 'The workspace access code has expired.';
  const accessCode = typeof body?.accessCode === 'string' ? body.accessCode.trim() : '';
  if (!accessCode || accessCode.length > 128
      || !(await matchesAccessCode(accessCode, env.VOICE_DEMO_ACCESS_CODE))) {
    return 'That access code is invalid or has expired.';
  }
  return null;
}

async function cleanExpired(db, now) {
  const cutoff = now - RETENTION_MS;
  await db.prepare('DELETE FROM voice_demo_transcripts WHERE created_at < ?').bind(cutoff).run();
  await db.prepare('DELETE FROM voice_demo_calls WHERE created_at < ?').bind(cutoff).run();
  await db.prepare('DELETE FROM voice_demo_sessions WHERE expires_at <= ?').bind(now).run();
  await db.prepare('DELETE FROM voice_demo_call_lock WHERE expires_at <= ?').bind(now).run();
}

async function loadWorkspace(db, now) {
  await cleanExpired(db, now);
  const settings = await db.prepare(
    `SELECT template_id, business_name, business_context, playbooks_json, updated_at
     FROM voice_workspace_settings WHERE singleton_id = 1`,
  ).first();
  const rows = await db.prepare(
    `SELECT session_id, call_sid, destination, template_id, business_name, status,
            outcome, notes, created_at, updated_at, ended_at
     FROM voice_demo_calls WHERE created_at >= ? ORDER BY created_at DESC LIMIT 50`,
  ).bind(now - RETENTION_MS).all();
  let playbooks = {};
  try { playbooks = settings?.playbooks_json ? JSON.parse(settings.playbooks_json) : {}; } catch { playbooks = {}; }
  return {
    settings: settings ? {
      templateId: settings.template_id,
      businessName: settings.business_name,
      businessContext: settings.business_context,
      playbooks,
      updatedAt: settings.updated_at,
    } : null,
    calls: rows.results || [],
  };
}

function normalizePlaybooks(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const clean = {};
  for (const [id, prompt] of Object.entries(value)) {
    if (!TEMPLATE_IDS.has(id) || !prompt || typeof prompt !== 'object') continue;
    clean[id] = {
      objective: typeof prompt.objective === 'string' ? prompt.objective.trim().slice(0, 500) : '',
      opening: typeof prompt.opening === 'string' ? prompt.opening.trim().slice(0, 300) : '',
      guidance: typeof prompt.guidance === 'string' ? prompt.guidance.trim().slice(0, 1200) : '',
    };
  }
  return clean;
}

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); } catch { return json({ message: 'The workspace request is invalid.' }, 400); }
  const authError = await authorize(request, env, body);
  if (authError) return json({ message: authError }, authError.includes('not allowed') ? 403 : 401);
  const action = body?.action;
  const now = Date.now();

  try {
    if (action === 'authenticate' || action === 'load' || action === 'records') {
      return json({ authenticated: true, ...(await loadWorkspace(env.DEMO_DB, now)) });
    }

    if (action === 'save') {
      const templateId = TEMPLATE_IDS.has(body.templateId) ? body.templateId : 'sales_follow_up';
      const businessName = typeof body.businessName === 'string' ? body.businessName.trim().slice(0, 100) : '';
      const businessContext = typeof body.businessContext === 'string' ? body.businessContext.trim().slice(0, 1400) : '';
      const playbooks = normalizePlaybooks(body.playbooks);
      if (!playbooks || JSON.stringify(playbooks).length > 16000) {
        return json({ message: 'Check the playbook fields and try saving again.' }, 400);
      }
      await env.DEMO_DB.prepare(
        `INSERT INTO voice_workspace_settings
         (singleton_id, template_id, business_name, business_context, playbooks_json, updated_at)
         VALUES (1, ?, ?, ?, ?, ?)
         ON CONFLICT(singleton_id) DO UPDATE SET template_id = excluded.template_id,
           business_name = excluded.business_name, business_context = excluded.business_context,
           playbooks_json = excluded.playbooks_json, updated_at = excluded.updated_at`,
      ).bind(templateId, businessName, businessContext, JSON.stringify(playbooks), now).run();
      return json({ saved: true, updatedAt: now });
    }

    if (action === 'update_record') {
      const sessionId = typeof body.sessionId === 'string' ? body.sessionId : '';
      const outcome = typeof body.outcome === 'string' ? body.outcome : '';
      const notes = typeof body.notes === 'string' ? body.notes.trim().slice(0, 1000) : '';
      if (!/^[0-9a-f-]{36}$/i.test(sessionId) || !OUTCOMES.has(outcome)) {
        return json({ message: 'The call record update is invalid.' }, 400);
      }
      const row = await env.DEMO_DB.prepare(
        `UPDATE voice_demo_calls SET outcome = ?, notes = ?, updated_at = ?
         WHERE session_id = ? AND created_at >= ? RETURNING session_id`,
      ).bind(outcome, notes, now, sessionId, now - RETENTION_MS).first();
      if (!row) return json({ message: 'That call record is no longer available.' }, 404);
      return json({ saved: true });
    }

    if (action === 'clear_history') {
      const active = await env.DEMO_DB.prepare(
        `SELECT session_id FROM voice_demo_calls
         WHERE status IN ('starting', 'queued', 'initiated', 'ringing', 'in-progress') LIMIT 1`,
      ).first();
      if (active) return json({ message: 'End the active call before clearing call history.' }, 409);
      await env.DEMO_DB.batch([
        env.DEMO_DB.prepare('DELETE FROM voice_demo_transcripts'),
        env.DEMO_DB.prepare('DELETE FROM voice_demo_sessions'),
        env.DEMO_DB.prepare('DELETE FROM voice_demo_calls'),
      ]);
      return json({ cleared: true });
    }

    return json({ message: 'Choose a valid workspace action.' }, 400);
  } catch {
    return json({ message: 'The private voice workspace is temporarily unavailable.' }, 503);
  }
}
