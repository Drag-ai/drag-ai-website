CREATE TABLE IF NOT EXISTS voice_demo_call_usage (
  utc_day TEXT PRIMARY KEY,
  calls INTEGER NOT NULL DEFAULT 0 CHECK (calls >= 0)
);

CREATE TABLE IF NOT EXISTS chat_demo_session_usage (
  session_id TEXT PRIMARY KEY,
  messages_used INTEGER NOT NULL CHECK (messages_used > 0),
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS chat_demo_daily_usage (
  utc_day TEXT PRIMARY KEY,
  messages_used INTEGER NOT NULL CHECK (messages_used > 0)
);
