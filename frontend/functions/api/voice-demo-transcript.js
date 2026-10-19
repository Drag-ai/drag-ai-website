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
  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
};

const matchesAccessCode = async (provided, expected) => {
  const encoder = new TextEncoder();
  const [providedHash, expectedHash] = await Promise.all([
    crypto.subtle.digest('SHA-256', encoder.encode(provided)),
    crypto.subtle.digest('SHA-256', encoder.encode(expected)),
  ]);
  const left = new Uint8Array(providedHash);
  const right = new Uint8Array(expectedHash);
  let mismatch = 0;
  for (let index = 0; index < left.length; index += 1) mismatch |= left[index] ^ right[index];
  return mismatch === 0;
};

export async function onRequestPost({ request, env }) {
  if (!sameOrigin(request)) return json({ message: 'This request is not allowed.' }, 403);
  if (!env.DEMO_DB || !env.VOICE_DEMO_ACCESS_CODE) {
    return json({ message: 'The live call transcript is not available.' }, 503);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ message: 'The transcript request is invalid.' }, 400);
  }
  const accessCode = typeof body?.accessCode === 'string' ? body.accessCode.trim() : '';
  const callSid = typeof body?.callSid === 'string' ? body.callSid : '';
  const sessionId = typeof body?.sessionId === 'string' ? body.sessionId : '';
  if (!accessCode || accessCode.length > 128 || !/^CA[0-9a-f]{32}$/i.test(callSid)
      || !/^[0-9a-f-]{36}$/i.test(sessionId)) {
    return json({ message: 'The transcript request is invalid.' }, 400);
  }
  const expiry = Date.parse(env.VOICE_DEMO_ACCESS_EXPIRES_AT || '');
  if (!Number.isFinite(expiry) || expiry <= Date.now()
      || !(await matchesAccessCode(accessCode, env.VOICE_DEMO_ACCESS_CODE))) {
    return json({ message: 'That access code is invalid.' }, 401);
  }

  const now = Date.now();
  try {
    const call = await env.DEMO_DB.prepare(
      'SELECT session_id FROM voice_demo_calls WHERE session_id = ? AND call_sid = ? AND created_at >= ?',
    ).bind(sessionId, callSid, now - 30 * 24 * 60 * 60 * 1000).first();
    if (!call) return json({ messages: [] });

    const result = await env.DEMO_DB.prepare(
      `SELECT id, speaker, transcript AS text, created_at
       FROM voice_demo_transcripts WHERE session_id = ? ORDER BY id ASC LIMIT 100`,
    ).bind(sessionId).all();
    return json({ messages: result.results || [] });
  } catch {
    return json({ message: 'The live call transcript is temporarily unavailable.' }, 503);
  }
}
