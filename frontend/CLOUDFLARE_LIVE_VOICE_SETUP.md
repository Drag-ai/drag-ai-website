# Drag Voice private calling workspace

The website runs a private, general-purpose calling workspace at `/voice-demo`. An access code protects saved playbooks and call records. A presenter can call one selected, authorized E.164 number at a time, import a CSV into the browser-only queue, review live and saved transcript text, and record a call outcome or notes. Importing contacts never starts calls automatically.

The Pages Functions create an outbound Twilio Programmable Voice call. Twilio requests TwiML from the same website, then opens a bidirectional Media Stream to a Cloudflare Pages Function. That Function bridges the audio to an OpenAI Realtime session using a short-lived OpenAI client secret. The call has a five-minute maximum and the default limit is five attempts per UTC day (configurable up to twenty).

## Cloudflare production setup

- The Pages project root is `frontend`, the build command is `yarn build`, and the output directory is `build`.
- Bind a Cloudflare D1 database as `DEMO_DB` in the Pages project.
- Apply migrations `0001_demo_usage.sql`, `0002_voice_demo_workspace.sql`, and `0003_voice_private_workspace.sql` to the production database before deploying these Functions.
- Deploy the Pages Functions under `functions/api/` with the site. The `/api/*` route is already enabled in `public/_routes.json`.
- Configure the Twilio and OpenAI settings below as Pages production variables and secrets. A local `.env` file is not read by Cloudflare Pages.

This uses Twilio Programmable Voice and bidirectional Media Streams. It does not use the FastAPI calling app or an Elastic SIP trunk. Twilio audio is 8 kHz G.711 mu-law. No call audio is recorded by Drag AI.

### Required settings

Copy the relevant values from `ai-real-estate-calling-demo/.env` into Cloudflare Pages **Settings > Variables and Secrets**. Keep secrets out of the repository.

| Cloudflare name | Value source | Type |
| --- | --- | --- |
| `OPENAI_API_KEY` | `OPENAI_API_KEY` | Secret |
| `OPENAI_REALTIME_MODEL` | `OPENAI_REALTIME_MODEL` | Variable, optional |
| `OPENAI_VOICE` | `OPENAI_VOICE` | Variable, optional |
| `TWILIO_ACCOUNT_SID` | `TWILIO_ACCOUNT_SID` | Secret |
| `TWILIO_AUTH_TOKEN` | `TWILIO_AUTH_TOKEN` | Secret |
| `TWILIO_VOICE_NUMBER` | `TWILIO_VOICE_NUMBER` | Secret or variable |
| `VOICE_DEMO_ACCESS_CODE` | Create a temporary code | Secret |
| `VOICE_DEMO_ACCESS_EXPIRES_AT` | Set an expiry in UTC ISO 8601 | Variable |
| `VOICE_DEMO_DAILY_CALL_LIMIT` | Optional; default 5, maximum 20 | Variable |

The web voice workspace does not use `VOICE_DEMO_DESTINATION`; the presenter chooses a number in the private workspace. `TWILIO_VOICE_NUMBER` must be voice-capable or a verified Caller ID. The destination must be reachable by voice, and the Twilio account must allow calls to its country. A Twilio trial account blocks the `<Stream>` verb used for live AI audio, and trial accounts restrict calls to verified numbers. Upgrade Twilio before using the live assistant.

## Local preview and real-call callbacks

The React development server on port 3000 does not run Pages Functions or D1. Use the local Pages preview instead:

```powershell
cd frontend
yarn install
yarn db:migrate:local
yarn build
yarn pages:dev
```

Set the local provider variables in `frontend/.dev.vars`. That file is ignored by Git. It needs the same OpenAI and Twilio settings plus a temporary `VOICE_DEMO_ACCESS_CODE` and a future `VOICE_DEMO_ACCESS_EXPIRES_AT`. Do not paste credentials into browser code or commit `.dev.vars`.

Twilio must reach the local Pages Functions over the internet for its TwiML, status, and media-stream callbacks. In a second terminal, create a temporary Cloudflare Quick Tunnel to port 8788:

```powershell
cloudflared tunnel --url http://localhost:8788
```

Open the `https://...trycloudflare.com/voice-demo` URL printed by the tunnel, not the React port 3000 or `localhost`. Keep both the Pages preview and tunnel running during the call. The temporary tunnel is for development and demonstrations; use the deployed Pages website for a stable public demo URL.

## Use the workspace

1. Open `/voice-demo` on the deployed Pages site or the local tunnel and unlock it with the temporary access code.
2. Select a general-purpose template, enter business facts and playbook guidance, then choose **Save setup** to keep the settings in D1.
3. Type one E.164 number or import a CSV with a `phone`, `mobile`, `telephone`, `destination`, or `number` column. The CSV is parsed in the browser and is not uploaded. The queue is limited to 50 unique entries.
4. Select a number, confirm you are authorized to call it, then explicitly choose **Start call to selected number**. The queue does not auto-dial or run a campaign.
5. Watch the live transcript, use **End live call** to hang up, then review the call history. Outcomes and notes can be saved per call. Marking a record **Do not call** blocks further calls to that number while the record remains in history.
6. Call records, notes, destination numbers, and transcripts are retained for up to 30 days. Use the history trash button to delete history sooner; this also removes Do not call markers. Saved workspace settings remain until overwritten.

The access code is shared by the private workspace and should only be given to presenters. Rotate the code and its expiry after each showcase window. Calls consume Twilio outbound minutes and OpenAI Realtime usage; Cloudflare Pages Functions and D1 use may fit free quotas at low volume, subject to current account limits.

## Official references

- [Twilio Call resource](https://www.twilio.com/docs/voice/api/call-resource)
- [Twilio bidirectional Stream TwiML](https://www.twilio.com/docs/voice/twiml/stream)
- [Twilio Media Streams WebSocket messages](https://www.twilio.com/docs/voice/media-streams/websocket-messages)
- [OpenAI Realtime WebSockets](https://developers.openai.com/api/docs/guides/voice-websockets)
- [OpenAI Realtime client secrets](https://developers.openai.com/api/reference/resources/realtime/subresources/client_secrets/methods/create)
- [Cloudflare Workers WebSockets](https://developers.cloudflare.com/workers/runtime-apis/websockets/)
- [Cloudflare Pages Functions pricing](https://developers.cloudflare.com/pages/functions/pricing/)
- [Cloudflare D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/)
