import { parseTwilioAccountSid, readTwilioForm, verifyTwilioSignature, xmlEscape, xmlResponse } from '../../shared/twilio.js';

export async function onRequestPost({ request, env }) {
  const parameters = await readTwilioForm(request);
  if (!parameters || !(await verifyTwilioSignature(request, parameters, env.TWILIO_AUTH_TOKEN))) {
    return new Response('Forbidden', { status: 403 });
  }
  if (!parseTwilioAccountSid(env.TWILIO_ACCOUNT_SID)
      || parameters.AccountSid !== env.TWILIO_ACCOUNT_SID
      || !parameters.CallSid) {
    return new Response('Forbidden', { status: 403 });
  }

  const sessionId = new URL(request.url).searchParams.get('sessionId') || '';
  if (!/^[0-9a-f-]{36}$/i.test(sessionId) || !env.DEMO_DB) {
    return new Response('Forbidden', { status: 403 });
  }
  let session;
  try {
    session = await env.DEMO_DB.prepare(
      `UPDATE voice_demo_sessions SET call_sid = ?
       WHERE session_id = ? AND expires_at > ? AND (call_sid IS NULL OR call_sid = ?)
       RETURNING session_id`,
    ).bind(parameters.CallSid, sessionId, Date.now(), parameters.CallSid).first();
  } catch {
    return new Response('The demo call is not available.', { status: 503 });
  }
  if (!session) return new Response('Forbidden', { status: 403 });

  const streamUrl = new URL('/api/twilio-voice-stream', request.url);
  streamUrl.protocol = 'wss:';
  const twiml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<Response>',
    `  <Connect><Stream url="${xmlEscape(streamUrl.toString())}"><Parameter name="sessionId" value="${xmlEscape(sessionId)}" /></Stream></Connect>`,
    '  <Say>We are sorry. The live assistant has ended this demo call. Goodbye.</Say>',
    '  <Hangup />',
    '</Response>',
  ].join('');

  return xmlResponse(twiml);
}
