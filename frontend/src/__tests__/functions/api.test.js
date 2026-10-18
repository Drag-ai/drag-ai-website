/** @jest-environment node */

import { onRequestPost as postChat } from '../../../functions/api/chat';
import { onRequestGet as getVoiceAvailability, onRequestPost as postVoiceCall } from '../../../functions/api/voice-demo-call';
import { onRequestPost as postVoiceControl } from '../../../functions/api/voice-demo-call-control';

const origin = 'http://localhost:8788';
const sameOriginRequest = (path, init = {}) => new Request(`${origin}${path}`, {
  ...init,
  headers: { Origin: origin, ...(init.headers || {}) },
});

const jsonRequest = (path, body) => sameOriginRequest(path, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

const twilioEnv = () => ({
  DEMO_DB: {
    prepare: () => ({ bind: () => ({ first: async () => ({ calls: 1 }) }) }),
  },
  OPENAI_API_KEY: 'local-test-key',
  TWILIO_ACCOUNT_SID: `AC${'a'.repeat(32)}`,
  TWILIO_AUTH_TOKEN: 'local-test-token',
  TWILIO_VOICE_NUMBER: '+15550102000',
  VOICE_DEMO_DESTINATION: '+15550102001',
  VOICE_DEMO_ACCESS_CODE: 'local-demo-code',
  VOICE_DEMO_ACCESS_EXPIRES_AT: '2099-01-01T00:00:00.000Z',
});

describe('Cloudflare Pages API handlers with safe local mocks', () => {
  afterEach(() => jest.restoreAllMocks());

  test('chat refuses cross-origin requests and reports missing local configuration', async () => {
    const crossOrigin = new Request(`${origin}/api/chat`, {
      method: 'POST',
      headers: { Origin: 'https://untrusted.example', 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
    const forbidden = await postChat({ request: crossOrigin, env: {} });
    expect(forbidden.status).toBe(403);

    const unavailable = await postChat({ request: jsonRequest('/api/chat', {}), env: {} });
    expect(unavailable.status).toBe(503);
    await expect(unavailable.json()).resolves.toMatchObject({ message: 'The chat demo is not configured yet.' });
  });

  test('chat streams a mocked assistant reply without contacting OpenAI', async () => {
    let reservation = 0;
    const env = {
      OPENAI_API_KEY: 'local-test-key',
      DEMO_DB: {
        prepare: () => ({
          bind: () => ({ first: async () => ({ messages_used: ++reservation === 1 ? 1 : 1 }) }),
        }),
      },
    };
    const upstreamBody = [
      `data: ${JSON.stringify({ type: 'response.output_text.delta', delta: 'Mock reply.' })}`,
      '',
      `data: ${JSON.stringify({ type: 'response.completed', response: { output_text: 'Mock reply.' } })}`,
      '',
    ].join('\n');
    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue(new Response(upstreamBody, {
      status: 200,
      headers: { 'Content-Type': 'text/event-stream' },
    }));
    const request = jsonRequest('/api/chat', {
      sessionId: '12345678-1234-1234-1234-123456789abc',
      message: 'Hello',
      templateId: 'general',
      history: [],
      businessProfile: {},
    });

    const response = await postChat({ request, env });
    const stream = await response.text();
    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toContain('text/event-stream');
    expect(stream).toContain('"text":"Mock reply."');
    expect(stream).toContain('"type":"done"');
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][0]).toBe('https://api.openai.com/v1/responses');
  });

  test('voice availability stays off and call submission is unavailable without secrets', async () => {
    await expect(getVoiceAvailability({ env: {} }).then((response) => response.json()))
      .resolves.toEqual({ available: false });
    const response = await postVoiceCall({
      request: jsonRequest('/api/voice-demo-call', { accessCode: 'local-code' }),
      env: {},
    });
    expect(response.status).toBe(503);
  });

  test('voice call request uses only a mocked Twilio response', async () => {
    const fakeCallSid = `CA${'b'.repeat(32)}`;
    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue(new Response(
      JSON.stringify({ sid: fakeCallSid }),
      { status: 201, headers: { 'Content-Type': 'application/json' } },
    ));
    const response = await postVoiceCall({
      request: jsonRequest('/api/voice-demo-call', { accessCode: 'local-demo-code' }),
      env: twilioEnv(),
    });

    expect(response.status).toBe(202);
    await expect(response.json()).resolves.toMatchObject({ callSid: fakeCallSid });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][0]).toContain('api.twilio.com');
  });

  test('voice call request returns a safe error when the mocked provider rejects it', async () => {
    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue(new Response('{}', { status: 500 }));
    const response = await postVoiceCall({
      request: jsonRequest('/api/voice-demo-call', { accessCode: 'local-demo-code' }),
      env: twilioEnv(),
    });

    expect(response.status).toBe(502);
    await expect(response.json()).resolves.toMatchObject({ message: 'The live call could not be connected. Please check the Twilio calling setup.' });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test('voice control ends only the configured mock call', async () => {
    const fakeCallSid = `CA${'c'.repeat(32)}`;
    const fetchMock = jest.spyOn(global, 'fetch')
      .mockResolvedValueOnce(new Response(JSON.stringify({
        from: '+15550102000', to: '+15550102001', status: 'in-progress',
      }), { status: 200 }))
      .mockResolvedValueOnce(new Response('{}', { status: 200 }));
    const response = await postVoiceControl({
      request: jsonRequest('/api/voice-demo-call-control', {
        action: 'end', accessCode: 'local-demo-code', callSid: fakeCallSid,
      }),
      env: twilioEnv(),
    });

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toMatchObject({ active: false, status: 'completed' });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});
