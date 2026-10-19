CREATE TABLE IF NOT EXISTS voice_demo_sessions (
  session_id TEXT PRIMARY KEY,
  call_sid TEXT UNIQUE,
  template_id TEXT NOT NULL,
  business_name TEXT NOT NULL DEFAULT '',
  business_context TEXT NOT NULL DEFAULT '',
  objective TEXT NOT NULL,
  opening TEXT NOT NULL,
  guidance TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS voice_demo_sessions_expiry_idx
  ON voice_demo_sessions (expires_at);

CREATE TABLE IF NOT EXISTS voice_demo_transcripts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT NOT NULL,
  event_id TEXT NOT NULL,
  speaker TEXT NOT NULL CHECK (speaker IN ('assistant', 'caller')),
  transcript TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  UNIQUE (session_id, event_id)
);

CREATE INDEX IF NOT EXISTS voice_demo_transcripts_session_idx
  ON voice_demo_transcripts (session_id, id);
