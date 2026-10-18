# Live Twilio phone-call demo on Cloudflare Pages

This demo uses the Twilio Programmable Voice credentials already present in `ai-real-estate-calling-demo/.env`. It does not use Elastic SIP Trunking. The website's Pages Function starts a Twilio call to one configured showcase phone. Twilio fetches TwiML from the same deployed website, then opens a bidirectional Media Stream to a Cloudflare Pages Function. That Function bridges Twilio audio to an OpenAI Realtime session using a short-lived OpenAI client secret.

The call destination is fixed in server-side settings; the browser cannot choose a phone number. The Twilio callback and media-stream endpoints verify Twilio signatures. Calls are not recorded or stored. Each call has a five-minute maximum and attempts count toward a daily cap of five by default (configurable up to twenty).

## Cloudflare requirements

- The Pages project must use `frontend` as its root, `yarn build` as its build command, and `build` as its output directory.
- Bind a Cloudflare D1 database as `DEMO_DB` and apply `migrations/0001_demo_usage.sql`.
- Deploy the new Pages Functions in `functions/api/` with the site. The `/api/*` route is already enabled in `public/_routes.json`.
- Configure the Twilio and OpenAI settings below as Pages production variables and secrets. A local `.env` file is not read by the deployed Pages project.

This setup uses Twilio Programmable Voice REST API and bidirectional Media Streams. It does not require a Twilio SIP trunk, a locally running FastAPI app, or ngrok. The call audio is 8 kHz G.711 μ-law, which the bridge passes to OpenAI Realtime.

## Settings from the existing `.env`

Copy only the relevant values from `ai-real-estate-calling-demo/.env` into Cloudflare Pages **Settings > Variables and Secrets**. Do not add secret values to source code or commit them.

| Cloudflare name | Value from `.env` | Type |
| --- | --- | --- |
| `OPENAI_API_KEY` | `OPENAI_API_KEY` | Secret |
| `OPENAI_REALTIME_MODEL` | `OPENAI_REALTIME_MODEL` | Variable |
| `OPENAI_VOICE` | `OPENAI_VOICE` | Variable, optional |
| `TWILIO_ACCOUNT_SID` | `TWILIO_ACCOUNT_SID` | Secret |
| `TWILIO_AUTH_TOKEN` | `TWILIO_AUTH_TOKEN` | Secret |
| `TWILIO_VOICE_NUMBER` | `TWILIO_VOICE_NUMBER` | Secret or variable |
| `VOICE_DEMO_DESTINATION` | `YASIR_WHATSAPP_NUMBER` | Secret |

The code also accepts `YASIR_WHATSAPP_NUMBER` directly when `VOICE_DEMO_DESTINATION` is unset, and removes its `whatsapp:` prefix before placing the voice call. Set `VOICE_DEMO_DESTINATION` explicitly if the showcase phone should be different.

These settings from the source `.env` are not used by the website voice demo: `PUBLIC_URL`, `TWILIO_WHATSAPP_FROM`, `ENABLE_WHATSAPP`, `NGROK_AUTH_TOKEN`, `DASHBOARD_USERNAME`, and `DASHBOARD_PASSWORD`. In particular, `PUBLIC_URL` points to ngrok in the calling app; the deployed Pages Functions build Twilio callback URLs from the actual website request, so ngrok is not used.

Add these demo-only settings in Cloudflare:

| Name | Type | Purpose |
| --- | --- | --- |
| `VOICE_DEMO_ACCESS_CODE` | Secret | Temporary code shared only with showcase attendees |
| `VOICE_DEMO_ACCESS_EXPIRES_AT` | Variable | Expiry in UTC ISO 8601, for example `2026-10-31T23:59:00Z` |
| `VOICE_DEMO_DESTINATION` | Secret, optional if `YASIR_WHATSAPP_NUMBER` is set | One E.164 destination, such as `+971...` |
| `VOICE_DEMO_DAILY_CALL_LIMIT` | Variable, optional | Calls per UTC day; default 5, maximum 20 |
| `CHAT_DEMO_DAILY_MESSAGE_LIMIT` | Variable, optional | Chat messages per UTC day; default 120, maximum 500 |

Use a Twilio voice-capable number or a verified Caller ID for `TWILIO_VOICE_NUMBER`. The destination must be reachable by voice, and the Twilio account must allow outbound calls to its country. A Twilio Voice trial account blocks the `<Stream>` verb used by this demo, so upgrade the account before testing live AI audio. Trial accounts also restrict calls to verified numbers and may play a trial notice.

## How to launch the call

1. Apply the D1 migration and add the variables and secrets above to the Cloudflare Pages production environment.
2. Redeploy the Pages project.
3. Open the deployed Drag AI website, go to **Products > Drag Voice**, enter the temporary access code, and start the call. Use **End call** on the page to hang up; calls also end automatically after five minutes.
4. Go to **Products > Drag Chat** and send a test message. The demo allows six messages per conversation.
5. Twilio's REST API acceptance means the call was queued; it does not mean the phone answered. Check Twilio call logs if the configured phone does not ring.

Do not automatically retry after a timeout or unclear result. A new request creates another phone call. Rotate the access code and expiry for each showcase window.

## Costs and data handling

The call consumes Twilio outbound minutes and OpenAI Realtime usage. Low-volume Pages Functions and D1 use may fit Cloudflare's free quotas, but Cloudflare, Twilio, and OpenAI usage are billed under their respective account limits and current pricing. The function does not enable call recording, persist audio, or save call transcripts.

## Official references

- [Twilio Call resource](https://www.twilio.com/docs/voice/api/call-resource)
- [Twilio bidirectional Stream TwiML](https://www.twilio.com/docs/voice/twiml/stream)
- [Twilio Media Streams WebSocket messages](https://www.twilio.com/docs/voice/media-streams/websocket-messages)
- [OpenAI Realtime WebSockets](https://developers.openai.com/api/docs/guides/voice-websockets)
- [OpenAI Realtime client secrets](https://developers.openai.com/api/reference/resources/realtime/subresources/client_secrets/methods/create)
- [Cloudflare Workers WebSockets](https://developers.cloudflare.com/workers/runtime-apis/websockets/)
- [Cloudflare Pages Functions pricing](https://developers.cloudflare.com/pages/functions/pricing/)
- [Cloudflare D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/)

## Local preview

The React development server does not run Pages Functions or D1. The real phone-call demo is intended to run on the deployed Cloudflare Pages site after the Twilio and OpenAI settings, D1 binding, and temporary access code are configured.
