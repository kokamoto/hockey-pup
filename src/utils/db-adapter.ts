import sqlite3 from 'sqlite3';
import { TEAM_TABLE_NAME } from '../db/constants.ts';
import { Config } from './config.ts';

const DATABASE_FILE_PATH = Config.getDataBaseFilePath();

async function fetchAll(query: string, db: sqlite3.Database): Promise<any[]> {
  return new Promise((resolve, reject) => {
    db.all(query, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

export async function fetchTeams(): Promise<any[]> {
  const db = new sqlite3.Database(DATABASE_FILE_PATH, (err) => {
    if (err) {
      console.error('Error opening database:', err.message);
    }
  });

  try {
    const teams = await fetchAll(`SELECT * FROM ${TEAM_TABLE_NAME}`, db);
    return teams.map(team => ({
      id: team.id,
      fullName: team.teamFullName,
      commonName: team.teamCommonName,
      placeName: team.teamPlaceName,
      triCode: team.triCode,
    }));
  } catch (error) {
    console.error('Error querying teams:', error);
    return [];
  } finally {
    db.close();
  }
}