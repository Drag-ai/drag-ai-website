import { readTwilioForm, verifyTwilioSignature } from '../../shared/twilio.js';

const textFromSocket = async (data) => {
  if (typeof data === 'string') return data;
  if (data instanceof ArrayBuffer) return new TextDecoder().decode(data);
  if (ArrayBuffer.isView(data)) return new TextDecoder().decode(data);
  return String(data);
};

const sendJson = (socket, payload) => {
  if (socket?.readyState === 1) socket.send(JSON.stringify(payload));
};

const hashCallSid = async (callSid) => {
  const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(callSid)));
  return Array.from(digest, (byte) => byte.toString(16).padStart(2, '0')).join('');
};

const closeSocket = (socket, code = 1000, reason = 'Call ended') => {
  if (socket && socket.readyState < 2) {
    try { socket.close(code, reason); } catch { /* The peer may already have closed. */ }
  }
};

const createRealtimeSecret = async (env, callSid) => {
  const model = env.OPENAI_REALTIME_MODEL || 'gpt-realtime-2.1';
  const voice = env.OPENAI_VOICE || 'marin';
  const instructions = [
    'You are Drag Voice, the friendly AI assistant in a short live product demonstration for Drag AI.',
    'Clearly identify yourself as an AI assistant and say this is a demonstration call requested on the Drag AI website.',
    'Drag Voice is a general-purpose phone assistant for businesses and independent professionals. It can help with common call workflows such as customer questions, follow-up, appointment requests, and feedback.',
    'Keep replies concise, natural, and easy to understand. Ask one useful question at a time.',
    'Use only those approved product facts. Do not invent prices, integrations, customer results, or business policies.',
    'This demo is not connected to a company inbox, CRM, calendar, or private business data. Do not claim to book appointments, change accounts, contact anyone, or complete an external action.',
    'Do not request payment details, passwords, or confidential information. If asked to end the call, say a brief goodbye and stop speaking.',
  ].join(' ');

  const response = await fetch('https://api.openai.com/v1/realtime/client_secrets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
      'OpenAI-Safety-Identifier': await hashCallSid(callSid),
    },
    body: JSON.stringify({
      expires_after: { anchor: 'created_at', seconds: 600 },
      session: {
        type: 'realtime',
        model,
        instructions,
        output_modalities: ['audio'],
        max_output_tokens: 240,
        audio: {
          input: {
            format: { type: 'audio/pcmu' },
            transcription: { model: 'gpt-live-transcribe' },
            turn_detection: {
              type: 'semantic_vad',
              eagerness: 'high',
              create_response: true,
              interrupt_response: true,
            },
          },
          output: {
            format: { type: 'audio/pcmu' },
            voice,
          },
        },
      },
    }),
  });

  if (!response.ok) throw new Error('OpenAI could not create the voice session.');
  const result = await response.json();
  if (typeof result.value !== 'string' || !result.value) throw new Error('OpenAI did not return a voice session token.');
  return { token: result.value, model };
};

export async function onRequestGet(context) {
  const { request, env } = context;
  if (request.headers.get('Upgrade')?.toLowerCase() !== 'websocket') {
    return new Response('Expected a WebSocket connection.', { status: 426 });
  }
  if (!env.TWILIO_AUTH_TOKEN || !(await verifyTwilioSignature(request, {}, env.TWILIO_AUTH_TOKEN))) {
    return new Response('Forbidden', { status: 403 });
  }

  const pair = new WebSocketPair();
  const [client, server] = Object.values(pair);
  server.accept();

  const state = {
    upstream: null,
    streamSid: '',
    callSid: '',
    latestMediaTimestamp: 0,
    responseStartTimestamp: null,
    assistantItemId: null,
    assistantAudioActive: false,
    started: false,
    closed: false,
  };

  const stop = (code = 1000, reason = 'Call ended') => {
    if (state.closed) return;
    state.closed = true;
    closeSocket(state.upstream, code, reason);
    closeSocket(server, code, reason);
  };

  const connectOpenAI = async (callSid) => {
    const { token, model } = await createRealtimeSecret(env, callSid);
    const socket = new WebSocket(
      `wss://api.openai.com/v1/realtime?model=${encodeURIComponent(model)}`,
      ['realtime', `openai-insecure-api-key.${token}`],
    );
    state.upstream = socket;

    socket.addEventListener('message', (event) => {
      const work = (async () => {
        let message;
        try {
          message = JSON.parse(await textFromSocket(event.data));
        } catch {
          return;
        }

        if (message.type === 'response.output_audio.delta' && state.streamSid) {
          if (state.responseStartTimestamp === null) state.responseStartTimestamp = state.latestMediaTimestamp;
          state.assistantAudioActive = true;
          if (message.item_id) state.assistantItemId = message.item_id;
          sendJson(server, {
            event: 'media',
            streamSid: state.streamSid,
            media: { payload: message.delta },
          });
        } else if (message.type === 'response.output_audio.done') {
          state.assistantAudioActive = false;
          state.assistantItemId = null;
          state.responseStartTimestamp = null;
        } else if (message.type === 'input_audio_buffer.speech_started') {
          if (state.assistantAudioActive && state.streamSid) {
            if (state.assistantItemId) {
              const audioEndMs = Math.max(0, state.latestMediaTimestamp - (state.responseStartTimestamp || 0));
              sendJson(socket, {
                type: 'conversation.item.truncate',
                item_id: state.assistantItemId,
                content_index: 0,
                audio_end_ms: audioEndMs,
              });
            }
            sendJson(server, { event: 'clear', streamSid: state.streamSid });
            state.assistantAudioActive = false;
            state.assistantItemId = null;
            state.responseStartTimestamp = null;
          }
        } else if (message.type === 'error') {
          stop(1011, 'Voice session error');
        }
      })();
      context.waitUntil(work.catch(() => stop(1011, 'Voice session error')));
    });

    socket.addEventListener('close', () => {
      if (!state.closed && server.readyState === 1) stop(1011, 'Voice session ended');
    });
    socket.addEventListener('error', () => stop(1011, 'Voice session error'));

    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('OpenAI voice connection timed out.')), 15000);
      socket.addEventListener('open', () => {
        clearTimeout(timeout);
        resolve();
      }, { once: true });
      socket.addEventListener('error', () => {
        clearTimeout(timeout);
        reject(new Error('OpenAI voice connection failed.'));
      }, { once: true });
      socket.addEventListener('close', () => {
        clearTimeout(timeout);
        reject(new Error('OpenAI voice connection closed.'));
      }, { once: true });
    });

    sendJson(socket, {
      type: 'response.create',
      response: {
        instructions: 'Start the demonstration with a short greeting. Say that you are Drag AI’s AI voice assistant, that this is a demo call requested from the website, and ask what kind of repetitive business phone conversation the person wants to improve.',
      },
    });
  };

  let incomingMessages = Promise.resolve();
  server.addEventListener('message', (event) => {
    incomingMessages = incomingMessages.then(async () => {
      if (state.closed) return;
      let message;
      try {
        message = JSON.parse(await textFromSocket(event.data));
      } catch {
        throw new Error('Twilio sent an invalid media message.');
      }

      if (message.event === 'start' && !state.started) {
        const start = message.start || {};
        if (start.accountSid !== env.TWILIO_ACCOUNT_SID
            || !/^CA[0-9a-f]{32}$/i.test(start.callSid || '')
            || start.mediaFormat?.encoding !== 'audio/x-mulaw'
            || Number(start.mediaFormat?.sampleRate) !== 8000) {
          throw new Error('Twilio stream configuration did not match this demo.');
        }
        state.started = true;
        state.streamSid = start.streamSid || message.streamSid || '';
        state.callSid = start.callSid;
        if (!state.streamSid) throw new Error('Twilio did not provide a stream identifier.');
        await connectOpenAI(state.callSid);
      } else if (message.event === 'media' && state.upstream?.readyState === 1) {
        state.latestMediaTimestamp = Number(message.media?.timestamp) || state.latestMediaTimestamp;
        if (typeof message.media?.payload === 'string') {
          sendJson(state.upstream, { type: 'input_audio_buffer.append', audio: message.media.payload });
        }
      } else if (message.event === 'stop') {
        stop();
      }
    }).catch(() => stop(1011, 'Voice session error'));
    context.waitUntil(incomingMessages);
  });

  server.addEventListener('close', () => stop());
  server.addEventListener('error', () => stop(1011, 'Voice connection error'));

  return new Response(null, { status: 101, webSocket: client });
}
