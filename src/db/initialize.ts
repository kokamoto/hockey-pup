import sqlite3 from 'sqlite3';
import { DATABASE_FILE_PATH, TEAM_TABLE_NAME, PLAYER_TABLE_NAME, TeamFields } from './constants.ts';

// Open a database (creates it if it doesn't exist)
const db = new sqlite3.Database(DATABASE_FILE_PATH, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  }
});

// Serialize ensures operations are performed sequentially
db.serialize(() => {
  // Create team table
  db.run(`CREATE TABLE IF NOT EXISTS ${TEAM_TABLE_NAME} (
    ${TeamFields.ID} INTEGER PRIMARY KEY,
    ${TeamFields.TEAM_FULL_NAME} TEXT,
    ${TeamFields.TEAM_COMMON_NAME} TEXT,
    ${TeamFields.TEAM_PLACE_NAME} TEXT,
    ${TeamFields.TRI_CODE} TEXT,
    ${TeamFields.CREATED_AT} INTEGER,
    ${TeamFields.UPDATED_AT} INTEGER
  )`);

  // Create player table
  db.run(`CREATE TABLE IF NOT EXISTS ${PLAYER_TABLE_NAME} (
    id INTEGER PRIMARY KEY,
    headshotUrl TEXT,
    firstName TEXT,
    lastName TEXT,
    position TEXT,
    shoots TEXT,
    heightInCentimeters INTEGER,
    weightInKilograms INTEGER,
    birthDate TEXT,
    birthCity TEXT,
    birthStateProvince TEXT,
    birthCountry TEXT,
    createdAt INTEGER,
    updatedAt INTEGER
  )`);

});

// Close the database connection
db.close();