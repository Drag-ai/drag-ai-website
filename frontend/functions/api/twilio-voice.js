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

  const streamUrl = new URL('/api/twilio-voice-stream', request.url);
  streamUrl.protocol = 'wss:';
  const twiml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<Response>',
    `  <Connect><Stream url="${xmlEscape(streamUrl.toString())}" /></Connect>`,
    '  <Say>We are sorry. The live assistant has ended this demo call. Goodbye.</Say>',
    '  <Hangup />',
    '</Response>',
  ].join('');

  return xmlResponse(twiml);
}
