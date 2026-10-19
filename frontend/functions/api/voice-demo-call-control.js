import { parseTwilioAccountSid } from '../../shared/twilio.js';

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

const isActive = (status) => ['starting', 'queued', 'initiated', 'ringing', 'in-progress'].includes(status);
const isTerminal = (status) => ['completed', 'busy', 'failed', 'no-answer', 'canceled'].includes(status);

const twilioRequest = (env, sid, options = {}) => fetch(
  `https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Calls/${sid}.json`,
  {
    ...options,
    headers: {
      Authorization: `Basic ${btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`)}`,
      ...(options.body ? { 'Content-Type': 'application/x-www-form-urlencoded' } : {}),
      ...options.headers,
    },
  },
);

async function storeStatus(db, sessionId, status) {
  const now = Date.now();
  await db.prepare(
    `UPDATE voice_demo_calls SET status = ?, updated_at = ?,
     ended_at = CASE WHEN ? THEN COALESCE(ended_at, ?) ELSE ended_at END WHERE session_id = ?`,
  ).bind(status, now, isTerminal(status) ? 1 : 0, now, sessionId).run();
  if (isTerminal(status)) await db.prepare('DELETE FROM voice_demo_call_lock WHERE session_id = ?').bind(sessionId).run();
}

export async function onRequestPost({ request, env }) {
  if (!sameOrigin(request)) return json({ message: 'This request is not allowed.' }, 403);
  if (!parseTwilioAccountSid(env.TWILIO_ACCOUNT_SID) || !env.TWILIO_AUTH_TOKEN || !env.DEMO_DB) {
    return json({ message: 'Live call controls are not configured.' }, 503);
  }

  let body;
  try { body = await request.json(); } catch { return json({ message: 'The call request is invalid.' }, 400); }

  const accessCode = typeof body?.accessCode === 'string' ? body.accessCode.trim() : '';
  const callSid = typeof body?.callSid === 'string' ? body.callSid : '';
  const sessionId = typeof body?.sessionId === 'string' ? body.sessionId : '';
  const action = body?.action;
  if (!accessCode || accessCode.length > 128 || !/^CA[0-9a-f]{32}$/i.test(callSid)
      || !/^[0-9a-f-]{36}$/i.test(sessionId) || !['status', 'end'].includes(action)) {
    return json({ message: 'The call request is invalid.' }, 400);
  }
  const expiry = Date.parse(env.VOICE_DEMO_ACCESS_EXPIRES_AT || '');
  if (!env.VOICE_DEMO_ACCESS_CODE || !Number.isFinite(expiry) || expiry <= Date.now()
      || !(await matchesAccessCode(accessCode, env.VOICE_DEMO_ACCESS_CODE))) {
    return json({ message: 'That access code is invalid or has expired.' }, 401);
  }

  let record;
  try {
    record = await env.DEMO_DB.prepare(
      'SELECT destination FROM voice_demo_calls WHERE session_id = ? AND call_sid = ?',
    ).bind(sessionId, callSid).first();
  } catch {
    return json({ message: 'Call history is temporarily unavailable.' }, 503);
  }
  if (!record) return json({ message: 'This call is not available to control.' }, 404);

  let callResponse;
  try { callResponse = await twilioRequest(env, callSid); } catch {
    return json({ message: 'Call status is temporarily unavailable. Please try again.' }, 502);
  }
  if (!callResponse.ok) return json({ message: 'Call status is temporarily unavailable. Please try again.' }, 502);

  let call;
  try { call = await callResponse.json(); } catch {
    return json({ message: 'Call status is temporarily unavailable. Please try again.' }, 502);
  }
  if (call.from !== env.TWILIO_VOICE_NUMBER || call.to !== record.destination) {
    return json({ message: 'This call is not available to control.' }, 404);
  }

  if (action === 'status' || !isActive(call.status)) {
    await storeStatus(env.DEMO_DB, sessionId, call.status);
    return json({ status: call.status, active: isActive(call.status) });
  }

  const requestedStatus = ['queued', 'initiated', 'ringing'].includes(call.status) ? 'canceled' : 'completed';
  let endResponse;
  try {
    endResponse = await twilioRequest(env, callSid, {
      method: 'POST',
      body: new URLSearchParams({ Status: requestedStatus }),
    });
  } catch {
    return json({ message: 'The call could not be ended. Please try again.' }, 502);
  }
  if (!endResponse.ok) return json({ message: 'The call could not be ended. Please try again.' }, 502);

  await storeStatus(env.DEMO_DB, sessionId, requestedStatus);
  return json({ active: false, status: requestedStatus, message: 'The call has ended.' });
}
