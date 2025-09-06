import sqlite3 from 'sqlite3';
import { Config } from '../utils/config.ts';
import fs from 'fs';

const DATABASE_FILE_PATH = Config.getDataBaseFilePath();

// Open a database (creates it if it doesn't exist)
const db = new sqlite3.Database(DATABASE_FILE_PATH, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  }
});


// Serialize ensures operations are performed sequentially
db.serialize(() => {
  // Read SQL from file
  const sql = fs.readFileSync(__dirname + '/create-tables.sql', 'utf8');
  db.exec(sql, (err) => {
    if (err) {
      console.error('Error executing SQL from create-tables.sql:', err.message);
    }
  });
});

// Close the database connection
db.close();