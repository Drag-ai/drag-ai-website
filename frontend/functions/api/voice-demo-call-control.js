import { isE164, parseTwilioAccountSid, showcaseDestination } from '../../shared/twilio.js';

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

const isActive = (status) => ['queued', 'initiated', 'ringing', 'in-progress'].includes(status);

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

export async function onRequestPost({ request, env }) {
  if (!sameOrigin(request)) return json({ message: 'This request is not allowed.' }, 403);
  if (!parseTwilioAccountSid(env.TWILIO_ACCOUNT_SID)
      || !env.TWILIO_AUTH_TOKEN
      || !isE164(env.TWILIO_VOICE_NUMBER)
      || !isE164(showcaseDestination(env))) {
    return json({ message: 'Live call controls are not configured.' }, 503);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ message: 'The call request is invalid.' }, 400);
  }

  const accessCode = typeof body?.accessCode === 'string' ? body.accessCode.trim() : '';
  const callSid = typeof body?.callSid === 'string' ? body.callSid : '';
  const action = body?.action;
  if (!accessCode || accessCode.length > 128 || !/^CA[0-9a-f]{32}$/i.test(callSid)
      || !['status', 'end'].includes(action)) {
    return json({ message: 'The call request is invalid.' }, 400);
  }
  if (!env.VOICE_DEMO_ACCESS_CODE
      || !(await matchesAccessCode(accessCode, env.VOICE_DEMO_ACCESS_CODE))) {
    return json({ message: 'That access code is invalid.' }, 401);
  }

  let callResponse;
  try {
    callResponse = await twilioRequest(env, callSid);
  } catch {
    return json({ message: 'Call status is temporarily unavailable. Please try again.' }, 502);
  }
  if (!callResponse.ok) return json({ message: 'Call status is temporarily unavailable. Please try again.' }, 502);

  let call;
  try {
    call = await callResponse.json();
  } catch {
    return json({ message: 'Call status is temporarily unavailable. Please try again.' }, 502);
  }
  if (call.from !== env.TWILIO_VOICE_NUMBER || call.to !== showcaseDestination(env)) {
    return json({ message: 'This call is not available to control.' }, 404);
  }

  if (action === 'status' || !isActive(call.status)) {
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

  return json({ active: false, status: requestedStatus, message: 'The call has ended.' });
}
