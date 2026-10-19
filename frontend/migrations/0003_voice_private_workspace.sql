CREATE TABLE IF NOT EXISTS voice_workspace_settings (
  singleton_id INTEGER PRIMARY KEY CHECK (singleton_id = 1),
  template_id TEXT NOT NULL DEFAULT 'sales_follow_up',
  business_name TEXT NOT NULL DEFAULT '',
  business_context TEXT NOT NULL DEFAULT '',
  playbooks_json TEXT NOT NULL DEFAULT '{}',
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS voice_demo_calls (
  session_id TEXT PRIMARY KEY,
  call_sid TEXT UNIQUE,
  destination TEXT NOT NULL,
  template_id TEXT NOT NULL,
  business_name TEXT NOT NULL DEFAULT '',
  objective TEXT NOT NULL,
  opening TEXT NOT NULL,
  guidance TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'starting',
  outcome TEXT NOT NULL DEFAULT '',
  notes TEXT NOT NULL DEFAULT '',
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  ended_at INTEGER
);

CREATE INDEX IF NOT EXISTS voice_demo_calls_created_idx
  ON voice_demo_calls (created_at DESC);

CREATE INDEX IF NOT EXISTS voice_demo_calls_destination_outcome_idx
  ON voice_demo_calls (destination, outcome);

CREATE INDEX IF NOT EXISTS voice_demo_calls_status_idx
  ON voice_demo_calls (status, created_at DESC);

CREATE INDEX IF NOT EXISTS voice_demo_transcripts_created_at_idx
  ON voice_demo_transcripts (created_at);

CREATE TABLE IF NOT EXISTS voice_demo_call_lock (
  singleton_id INTEGER PRIMARY KEY CHECK (singleton_id = 1),
  session_id TEXT NOT NULL,
  expires_at INTEGER NOT NULL
);
