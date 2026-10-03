CREATE TABLE IF NOT EXISTS recommendations (
  id TEXT PRIMARY KEY,
  status TEXT NOT NULL CHECK (status IN ('pending', 'approved')),
  feedback TEXT NOT NULL,
  name TEXT NOT NULL DEFAULT '',
  designation TEXT NOT NULL DEFAULT '',
  organization TEXT NOT NULL DEFAULT '',
  token_hash TEXT,
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  approved_at TEXT
);

CREATE INDEX IF NOT EXISTS recommendations_status_approved_at
  ON recommendations (status, approved_at DESC);
