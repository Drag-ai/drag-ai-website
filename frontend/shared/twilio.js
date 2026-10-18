export const isE164 = (value) => /^\+[1-9]\d{7,14}$/.test(value || '');

export const showcaseDestination = (env) => (env.VOICE_DEMO_DESTINATION || env.YASIR_WHATSAPP_NUMBER || '')
  .trim()
  .replace(/^whatsapp:/i, '');

export const parseTwilioAccountSid = (value) => /^AC[0-9a-f]{32}$/i.test(value || '');

export async function readTwilioForm(request) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return null;
  }

  const parameters = Object.create(null);
  for (const [key, value] of form.entries()) {
    if (typeof value !== 'string') return null;
    if (!(key in parameters)) parameters[key] = value;
    else if (Array.isArray(parameters[key])) parameters[key].push(value);
    else parameters[key] = [parameters[key], value];
  }
  return parameters;
}

const safeEqual = (left, right) => {
  if (typeof left !== 'string' || typeof right !== 'string') return false;
  let mismatch = left.length ^ right.length;
  const size = Math.max(left.length, right.length);
  for (let index = 0; index < size; index += 1) {
    mismatch |= (left.charCodeAt(index) || 0) ^ (right.charCodeAt(index) || 0);
  }
  return mismatch === 0;
};

const signatureFor = async (url, parameters, authToken) => {
  let signed = url;
  for (const key of Object.keys(parameters).sort()) {
    const values = Array.isArray(parameters[key]) ? [...parameters[key]].sort() : [parameters[key]];
    values.forEach((value) => { signed += key + value; });
  }
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(authToken),
    { name: 'HMAC', hash: 'SHA-1' },
    false,
    ['sign'],
  );
  const digest = new Uint8Array(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(signed)));
  return btoa(String.fromCharCode(...digest));
};

export async function verifyTwilioSignature(request, parameters, authToken) {
  const signature = request.headers.get('X-Twilio-Signature') || '';
  if (!signature || !authToken) return false;

  const urls = [request.url];
  if (request.headers.get('Upgrade')?.toLowerCase() === 'websocket') {
    urls.push(request.url.replace(/^https:/i, 'wss:').replace(/^http:/i, 'ws:'));
  }

  for (const url of urls) {
    if (safeEqual(await signatureFor(url, parameters, authToken), signature)) return true;
  }
  return false;
}

export const xmlEscape = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

export const xmlResponse = (body, status = 200) => new Response(body, {
  status,
  headers: {
    'Content-Type': 'application/xml; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  },
});
