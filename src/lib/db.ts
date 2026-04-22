import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

// Define the database file path
// In production (Docker), use the mounted /app/data volume.
// In development, use a local data folder.
const isProd = process.env.NODE_ENV === 'production';
const dataDir = isProd ? '/app/data' : path.join(process.cwd(), 'data');

// Ensure the data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'petition.db');

// Initialize the database
const db = new Database(dbPath);

// Enable WAL mode for better concurrency and performance
db.pragma('journal_mode = WAL');

// Create the signatures table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS signatures (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT NOT NULL,
    email TEXT NOT NULL,
    zipCode TEXT NOT NULL,
    connection TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Add new columns if they don't exist (safe migration for existing DBs)
try { db.exec('ALTER TABLE signatures ADD COLUMN address TEXT'); } catch {}
try { db.exec('ALTER TABLE signatures ADD COLUMN phone TEXT'); } catch {}

export default db;
