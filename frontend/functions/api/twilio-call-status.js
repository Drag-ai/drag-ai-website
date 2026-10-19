import { parseTwilioAccountSid, readTwilioForm, verifyTwilioSignature } from '../../shared/twilio.js';

const terminal = new Set(['completed', 'busy', 'failed', 'no-answer', 'canceled']);
const statuses = new Set(['queued', 'initiated', 'ringing', 'in-progress', ...terminal]);

export async function onRequestPost({ request, env }) {
  const parameters = await readTwilioForm(request);
  if (!parameters || !(await verifyTwilioSignature(request, parameters, env.TWILIO_AUTH_TOKEN))) {
    return new Response('Forbidden', { status: 403 });
  }
  if (!parseTwilioAccountSid(env.TWILIO_ACCOUNT_SID)
      || parameters.AccountSid !== env.TWILIO_ACCOUNT_SID
      || !/^CA[0-9a-f]{32}$/i.test(parameters.CallSid || '')
      || !env.DEMO_DB) {
    return new Response('Forbidden', { status: 403 });
  }

  const sessionId = new URL(request.url).searchParams.get('sessionId') || '';
  const status = typeof parameters.CallStatus === 'string' ? parameters.CallStatus.slice(0, 40) : '';
  if (!/^[0-9a-f-]{36}$/i.test(sessionId) || !statuses.has(status)) return new Response('Bad request', { status: 400 });
  const now = Date.now();

  try {
    const updated = await env.DEMO_DB.prepare(
      `UPDATE voice_demo_calls SET call_sid = COALESCE(call_sid, ?),
       status = CASE WHEN status IN ('completed', 'busy', 'failed', 'no-answer', 'canceled')
         AND ? NOT IN ('completed', 'busy', 'failed', 'no-answer', 'canceled') THEN status ELSE ? END,
       updated_at = ?,
       ended_at = CASE WHEN ? THEN COALESCE(ended_at, ?) ELSE ended_at END
       WHERE session_id = ? AND (call_sid IS NULL OR call_sid = ?) RETURNING session_id`,
    ).bind(parameters.CallSid, status, status, now, terminal.has(status) ? 1 : 0, now, sessionId, parameters.CallSid).first();
    if (!updated) return new Response('Not found', { status: 404 });
    if (terminal.has(status)) {
      await env.DEMO_DB.prepare('DELETE FROM voice_demo_call_lock WHERE session_id = ?').bind(sessionId).run();
    }
  } catch {
    return new Response('Status could not be saved', { status: 503 });
  }
  return new Response(null, { status: 204 });
}
