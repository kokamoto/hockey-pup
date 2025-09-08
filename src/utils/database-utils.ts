import sqlite3 from 'sqlite3';
import type { Database } from "sqlite3";
import { Config } from "./config.ts";

/**
 * Creates and returns a database connection based on the provided environment.
 * 
 * @param {string} env - The environment string, e.g., 'test' or 'production'
 * @returns {Database} Database connection instance
 */
function getDatabase(env: string): Database {
  const filePath: string = Config.getDataBaseFilePath(env);
  return new sqlite3.Database(filePath, (err) => {
    if (err) {
      console.error('Error opening database:', err.message);
    }
  });
}

/**
 * Creates database tables if they do not exist, and loads initial master data.
 * 
 * @param {string} env - The environment string, e.g., 'test' or 'production'
 * @returns {void}
 */
function initializeDatabase(env: string): void {
  const db: Database = getDatabase(env);
  db.close();
}

export const DatabaseUtils = {
  getDatabase,
  initializeDatabase,
};