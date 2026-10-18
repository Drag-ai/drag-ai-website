import { isE164, parseTwilioAccountSid, showcaseDestination } from '../../shared/twilio.js';

const CALL_LIMIT_DEFAULT = 5;

const requiredSettings = [
  'OPENAI_API_KEY',
  'TWILIO_ACCOUNT_SID',
  'TWILIO_AUTH_TOKEN',
  'TWILIO_VOICE_NUMBER',
  'VOICE_DEMO_ACCESS_CODE',
  'VOICE_DEMO_ACCESS_EXPIRES_AT',
];

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

const callLimit = (env) => {
  const parsed = Number.parseInt(env.VOICE_DEMO_DAILY_CALL_LIMIT || '', 10);
  return Number.isInteger(parsed) && parsed > 0 ? Math.min(parsed, 20) : CALL_LIMIT_DEFAULT;
};

const isAvailable = (env) => {
  const expiry = Date.parse(env.VOICE_DEMO_ACCESS_EXPIRES_AT || '');
  const destination = showcaseDestination(env);
  return Boolean(
    env.DEMO_DB
    && requiredSettings.every((key) => typeof env[key] === 'string' && env[key].trim())
    && parseTwilioAccountSid(env.TWILIO_ACCOUNT_SID)
    && isE164(env.TWILIO_VOICE_NUMBER)
    && isE164(destination)
    && Number.isFinite(expiry)
    && expiry > Date.now(),
  );
};

export async function onRequestGet({ env }) {
  return json({ available: isAvailable(env) });
}

export async function onRequestPost({ request, env }) {
  if (!sameOrigin(request)) return json({ message: 'This request is not allowed.' }, 403);
  if (!isAvailable(env)) return json({ message: 'Live calling is not configured yet.' }, 503);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ message: 'Enter the temporary demo access code.' }, 400);
  }

  const accessCode = typeof body?.accessCode === 'string' ? body.accessCode.trim() : '';
  if (!accessCode || accessCode.length > 128) {
    return json({ message: 'Enter the temporary demo access code.' }, 400);
  }
  if (Date.parse(env.VOICE_DEMO_ACCESS_EXPIRES_AT) <= Date.now()
      || !(await matchesAccessCode(accessCode, env.VOICE_DEMO_ACCESS_CODE))) {
    return json({ message: 'That access code is invalid or has expired.' }, 401);
  }

  const utcDay = new Date().toISOString().slice(0, 10);
  try {
    const reservation = await env.DEMO_DB.prepare(
      `INSERT INTO voice_demo_call_usage (utc_day, calls)
       VALUES (?, 1)
       ON CONFLICT (utc_day) DO UPDATE SET calls = calls + 1
       WHERE calls < ?
       RETURNING calls`,
    ).bind(utcDay, callLimit(env)).first();
    if (!reservation) {
      return json({ message: 'The live call demo has reached today’s call limit. Please try again tomorrow.' }, 429);
    }
  } catch {
    return json({ message: 'The live call demo is temporarily unavailable.' }, 503);
  }

  const callbackUrl = new URL('/api/twilio-voice', request.url);
  callbackUrl.protocol = 'https:';
  const form = new URLSearchParams({
    To: showcaseDestination(env),
    From: env.TWILIO_VOICE_NUMBER,
    Url: callbackUrl.toString(),
    Method: 'POST',
    Timeout: '25',
    TimeLimit: '300',
  });

  let response;
  try {
    response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Calls.json`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: form,
    });
  } catch {
    return json({ message: 'The live call could not be connected. Please try again later.' }, 502);
  }

  if (!response.ok) {
    return json({ message: 'The live call could not be connected. Please check the Twilio calling setup.' }, 502);
  }

  let call;
  try {
    call = await response.json();
  } catch {
    return json({ message: 'Twilio accepted the call, but its call reference could not be read. It will end automatically within five minutes.' }, 502);
  }
  if (!/^CA[0-9a-f]{32}$/i.test(call?.sid || '')) {
    return json({ message: 'Twilio accepted the call, but its call reference could not be read. It will end automatically within five minutes.' }, 502);
  }

  return json({
    callSid: call.sid,
    message: 'Twilio accepted the request and is attempting to ring your configured showcase phone. This does not confirm that the call has been answered.',
  }, 202);
}
