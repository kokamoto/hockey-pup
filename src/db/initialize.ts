import sqlite3 from 'sqlite3';
import { Config } from '../utils/config.ts';
import { SQLStatements } from './sql-statements.ts';

const DATABASE_FILE_PATH = Config.getDataBaseFilePath();

// Open a database (creates it if it doesn't exist)
const db = new sqlite3.Database(DATABASE_FILE_PATH, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  }
});

// Serialize ensures operations are performed sequentially
db.serialize(() => {
  // Create team table
  db.run(SQLStatements.CREATE_TEAM_TABLE_SQL);

  // Create player table
  db.run(SQLStatements.CREATE_PLAYER_TABLE_SQL);
});

// Close the database connection
db.close();