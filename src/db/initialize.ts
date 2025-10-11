import sqlite3 from 'sqlite3';
import { Config } from '../utils/config.ts';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const DATABASE_FILE_PATH = Config.getDataBaseFilePath();

// Open a database (creates it if it doesn't exist)
const db = new sqlite3.Database(DATABASE_FILE_PATH, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const createTablesPath = path.join(__dirname, 'create-tables.sql');
const loadCountriesPath = path.join(__dirname, 'load-countries.sql');
const createTablesSql = fs.readFileSync(createTablesPath, 'utf8');
const loadCountriesSql = fs.readFileSync(loadCountriesPath, 'utf8');

db.serialize(() => {

  // Execute SQL to create tables and load initial data
  db.exec(createTablesSql, (err) => {
    if (err) {
      console.error('Error creating tables:', err.message);
    }
  });

  // Load initial country data
  db.exec(loadCountriesSql, (err) => {
    if (err) {
      console.error('Error loading countries:', err.message);
    }
  });

});

// Close the database connection
db.close();