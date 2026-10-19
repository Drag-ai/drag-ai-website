import { isE164, parseTwilioAccountSid } from '../../shared/twilio.js';

const CALL_LIMIT_DEFAULT = 5;
const TEMPLATE_DEFAULTS = {
  sales_follow_up: {
    objective: 'Understand what the person is looking for, answer only from the approved business context, and offer a human follow-up when useful.',
    opening: "Hello, I'm an AI assistant calling for {business}. Is now a good time for a short conversation?",
    guidance: 'Ask one question at a time. Learn what outcome the person wants. Do not make claims about price, availability, or results unless they appear in the approved context. Offer to pass a request to the team; do not say that a follow-up has already been arranged.',
  },
  customer_support: {
    objective: "Understand the person's question, share relevant approved information, and identify when a team member should help.",
    opening: "Hi, I'm an AI assistant calling for {business}. Is this a good time to help with a question?",
    guidance: 'Be patient and clear. Ask what help is needed, then summarize the request. You cannot access accounts, change services, or guarantee a resolution. Offer a human follow-up for account-specific or unresolved issues.',
  },
  appointment_request: {
    objective: 'Find out whether the person wants to speak with the team and note their preferred day or time window.',
    opening: "Hello, I'm an AI assistant calling for {business}. Would you like to share a good time for the team to speak with you?",
    guidance: 'Treat any day or time as a preference only. You have no calendar access and cannot confirm, book, or change an appointment. Repeat the preference back and explain that a person must confirm it.',
  },
  feedback_follow_up: {
    objective: "Invite a brief, voluntary comment about the person's experience and understand whether they want a team member to follow up.",
    opening: "Hello, I'm an AI assistant calling for {business}. Do you have a moment to share a little feedback?",
    guidance: 'Keep the conversation respectful and brief. Do not pressure the person to continue. Ask what went well or what could be better, acknowledge their answer, and offer human follow-up without promising an outcome.',
  },
  reminder_follow_up: {
    objective: 'Deliver the reminder information supplied in the approved business context and ask whether the person has a question.',
    opening: "Hello, I'm an AI assistant calling for {business} with a brief reminder. Is now a convenient time?",
    guidance: 'Only repeat reminder details present in the approved context. Do not imply a payment is due, create urgency, or claim an action has been completed. Offer a person as the next step if anything is unclear.',
  },
  general_inquiry: {
    objective: 'Understand why the person is speaking with the business and provide a clear, helpful next step.',
    opening: "Hello, I'm an AI assistant calling for {business}. What would be most useful to discuss today?",
    guidance: 'Listen first and ask concise follow-up questions. Use only the approved facts. If you do not know something, say so and offer to pass the question to a person.',
  },
};

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
  try { return new URL(origin).origin === new URL(request.url).origin; } catch { return false; }
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
  return Boolean(
    env.DEMO_DB
    && requiredSettings.every((key) => typeof env[key] === 'string' && env[key].trim())
    && parseTwilioAccountSid(env.TWILIO_ACCOUNT_SID)
    && isE164(env.TWILIO_VOICE_NUMBER)
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
  try { body = await request.json(); } catch { return json({ message: 'Enter the temporary demo access code.' }, 400); }
  const accessCode = typeof body?.accessCode === 'string' ? body.accessCode.trim() : '';
  if (!accessCode || accessCode.length > 128) return json({ message: 'Enter the temporary demo access code.' }, 400);
  if (Date.parse(env.VOICE_DEMO_ACCESS_EXPIRES_AT) <= Date.now()
      || !(await matchesAccessCode(accessCode, env.VOICE_DEMO_ACCESS_CODE))) {
    return json({ message: 'That access code is invalid or has expired.' }, 401);
  }

  const toNumber = typeof body?.toNumber === 'string' ? body.toNumber.trim() : '';
  if (!isE164(toNumber)) return json({ message: 'Enter a valid phone number in international format, such as +14155550123.' }, 400);
  if (body?.consentConfirmed !== true) {
    return json({ message: 'Confirm that you are authorized to call this person before placing the call.' }, 400);
  }

  const templateId = typeof body?.templateId === 'string' && TEMPLATE_DEFAULTS[body.templateId]
    ? body.templateId
    : 'sales_follow_up';
  const template = TEMPLATE_DEFAULTS[templateId];
  const readText = (key, fallback, maxLength) => {
    const value = typeof body?.[key] === 'string' ? body[key].trim() : '';
    return (value || fallback).slice(0, maxLength);
  };
  const businessName = readText('businessName', '', 100);
  const businessContext = readText('businessContext', '', 1400);
  const objective = readText('objective', template.objective, 500);
  const opening = readText('opening', template.opening, 300);
  const guidance = readText('guidance', template.guidance, 1200);
  const sessionId = crypto.randomUUID();
  const now = Date.now();
  const expiresAt = now + 60 * 60 * 1000;
  const retentionCutoff = now - 30 * 24 * 60 * 60 * 1000;

  try {
    await env.DEMO_DB.prepare('DELETE FROM voice_demo_transcripts WHERE created_at < ?').bind(retentionCutoff).run();
    await env.DEMO_DB.prepare('DELETE FROM voice_demo_calls WHERE created_at < ?').bind(retentionCutoff).run();
    await env.DEMO_DB.prepare('DELETE FROM voice_demo_sessions WHERE expires_at <= ?').bind(now).run();
    await env.DEMO_DB.prepare('DELETE FROM voice_demo_call_lock WHERE expires_at <= ?').bind(now).run();
  } catch {
    return json({ message: 'The live call workspace is temporarily unavailable. Apply the latest D1 migration and try again.' }, 503);
  }

  try {
    const previousDoNotCall = await env.DEMO_DB.prepare(
      `SELECT session_id FROM voice_demo_calls WHERE destination = ? AND outcome = 'do_not_call'
       AND created_at >= ? LIMIT 1`,
    ).bind(toNumber, retentionCutoff).first();
    if (previousDoNotCall) return json({ message: 'This number is marked Do not call in the workspace. Review the call history before contacting them again.' }, 409);
  } catch {
    return json({ message: 'The live call workspace is temporarily unavailable.' }, 503);
  }

  try {
    const lock = await env.DEMO_DB.prepare(
      `INSERT INTO voice_demo_call_lock (singleton_id, session_id, expires_at)
       VALUES (1, ?, ?)
       ON CONFLICT(singleton_id) DO UPDATE SET session_id = excluded.session_id, expires_at = excluded.expires_at
       WHERE voice_demo_call_lock.expires_at <= ? RETURNING session_id`,
    ).bind(sessionId, now + 10 * 60 * 1000, now).first();
    if (!lock) return json({ message: 'Another workspace call is still active. End it before starting another.' }, 409);
  } catch {
    return json({ message: 'The live call workspace is temporarily unavailable. Apply the latest D1 migration and try again.' }, 503);
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
      await env.DEMO_DB.prepare('DELETE FROM voice_demo_call_lock WHERE session_id = ?').bind(sessionId).run();
      return json({ message: "The live call demo has reached today's call limit. Please try again tomorrow." }, 429);
    }
  } catch {
    await env.DEMO_DB.prepare('DELETE FROM voice_demo_call_lock WHERE session_id = ?').bind(sessionId).run();
    return json({ message: 'The live call workspace is temporarily unavailable.' }, 503);
  }

  try {
    await env.DEMO_DB.prepare(
      `INSERT INTO voice_demo_sessions
       (session_id, template_id, business_name, business_context, objective, opening, guidance, created_at, expires_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    ).bind(sessionId, templateId, businessName, businessContext, objective, opening, guidance, now, expiresAt).run();
    await env.DEMO_DB.prepare(
      `INSERT INTO voice_demo_calls
       (session_id, destination, template_id, business_name, objective, opening, guidance, status, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'starting', ?, ?)`,
    ).bind(sessionId, toNumber, templateId, businessName, objective, opening, guidance, now, now).run();
  } catch {
    await env.DEMO_DB.prepare('DELETE FROM voice_demo_call_lock WHERE session_id = ?').bind(sessionId).run();
    return json({ message: 'The live call workspace is temporarily unavailable.' }, 503);
  }

  const callbackUrl = new URL('/api/twilio-voice', request.url);
  callbackUrl.protocol = 'https:';
  callbackUrl.searchParams.set('sessionId', sessionId);
  const statusCallbackUrl = new URL('/api/twilio-call-status', request.url);
  statusCallbackUrl.protocol = 'https:';
  statusCallbackUrl.searchParams.set('sessionId', sessionId);
  const form = new URLSearchParams({
    To: toNumber,
    From: env.TWILIO_VOICE_NUMBER,
    Url: callbackUrl.toString(),
    Method: 'POST',
    StatusCallback: statusCallbackUrl.toString(),
    StatusCallbackMethod: 'POST',
    Timeout: '25',
    TimeLimit: '300',
  });
  ['initiated', 'ringing', 'answered', 'completed'].forEach((event) => {
    form.append('StatusCallbackEvent', event);
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
    const failedAt = Date.now();
    await env.DEMO_DB.prepare("UPDATE voice_demo_calls SET status = 'failed', updated_at = ?, ended_at = ? WHERE session_id = ?").bind(failedAt, failedAt, sessionId).run();
    await env.DEMO_DB.prepare('DELETE FROM voice_demo_call_lock WHERE session_id = ?').bind(sessionId).run();
    return json({ message: 'The live call could not be connected. Please try again later.' }, 502);
  }

  if (!response.ok) {
    const failedAt = Date.now();
    await env.DEMO_DB.prepare("UPDATE voice_demo_calls SET status = 'failed', updated_at = ?, ended_at = ? WHERE session_id = ?").bind(failedAt, failedAt, sessionId).run();
    await env.DEMO_DB.prepare('DELETE FROM voice_demo_call_lock WHERE session_id = ?').bind(sessionId).run();
    return json({ message: 'The live call could not be connected. Please check the Twilio calling setup.' }, 502);
  }

  let call;
  try { call = await response.json(); } catch {
    const failedAt = Date.now();
    await env.DEMO_DB.prepare("UPDATE voice_demo_calls SET status = 'failed', updated_at = ?, ended_at = ? WHERE session_id = ?").bind(failedAt, failedAt, sessionId).run();
    await env.DEMO_DB.prepare('DELETE FROM voice_demo_call_lock WHERE session_id = ?').bind(sessionId).run();
    return json({ message: 'Twilio accepted the call, but its reference could not be read. It will end automatically within five minutes.' }, 502);
  }
  if (!/^CA[0-9a-f]{32}$/i.test(call?.sid || '')) {
    const failedAt = Date.now();
    await env.DEMO_DB.prepare("UPDATE voice_demo_calls SET status = 'failed', updated_at = ?, ended_at = ? WHERE session_id = ?").bind(failedAt, failedAt, sessionId).run();
    await env.DEMO_DB.prepare('DELETE FROM voice_demo_call_lock WHERE session_id = ?').bind(sessionId).run();
    return json({ message: 'Twilio accepted the call, but its reference could not be read. It will end automatically within five minutes.' }, 502);
  }

  try {
    await env.DEMO_DB.prepare('UPDATE voice_demo_sessions SET call_sid = ? WHERE session_id = ? AND call_sid IS NULL')
      .bind(call.sid, sessionId).run();
    await env.DEMO_DB.prepare(
      `UPDATE voice_demo_calls SET call_sid = ?,
       status = CASE WHEN status = 'starting' THEN ? ELSE status END, updated_at = ?
       WHERE session_id = ? AND (call_sid IS NULL OR call_sid = ?)`,
    ).bind(call.sid, call.status || 'queued', Date.now(), sessionId, call.sid).run();
  } catch {
    // The signed Twilio callback also attaches the Call SID before returning TwiML.
  }

  return json({
    callSid: call.sid,
    sessionId,
    message: 'Twilio accepted the request and is attempting to ring the selected number. This does not confirm that the call has been answered.',
  }, 202);
}
