import sqlite3 from 'sqlite3';
import { Config } from '../utils/config.ts';
import { TEAM_TABLE_NAME, PLAYER_TABLE_NAME, TeamFields } from './constants.ts';
import fetch from 'node-fetch';

const DATABASE_FILE_PATH = Config.getDataBaseFilePath();

type NHLApiTeam = {
  id: number;
  franchiseId: number;
  fullName: string;
  leagueId: number;
  rawTriCode: string;
  triCode: string;
};

async function fetchTeams(): Promise<NHLApiTeam[]> {
  const response = await fetch('https://api.nhle.com/stats/rest/en/team');
  if (!response.ok) {
    throw new Error(`Failed to fetch teams: ${response.statusText}`);
  }
  const data: any = await response.json();
  return data.data;
}

function insertTeams(teams: NHLApiTeam[], db: sqlite3.Database) {
  db.serialize(() => {
    const stmt = db.prepare(`INSERT INTO ${TEAM_TABLE_NAME} (
      ${TeamFields.ID}, 
      ${TeamFields.TEAM_FULL_NAME}, 
      ${TeamFields.TEAM_COMMON_NAME}, 
      ${TeamFields.TEAM_PLACE_NAME}, 
      ${TeamFields.TRI_CODE}, 
      ${TeamFields.CREATED_AT}, 
      ${TeamFields.UPDATED_AT}
    ) VALUES (?, ?, ?, ?, ?, ?, ?) ON CONFLICT(${TeamFields.ID}) DO UPDATE SET
      ${TeamFields.TEAM_FULL_NAME} = excluded.${TeamFields.TEAM_FULL_NAME},
      ${TeamFields.TEAM_COMMON_NAME} = excluded.${TeamFields.TEAM_COMMON_NAME},
      ${TeamFields.TEAM_PLACE_NAME} = excluded.${TeamFields.TEAM_PLACE_NAME},
      ${TeamFields.TRI_CODE} = excluded.${TeamFields.TRI_CODE},
      ${TeamFields.UPDATED_AT} = excluded.${TeamFields.UPDATED_AT}
    `);
    
    const now = Date.now();
    
    teams.forEach(team => {
      stmt.run(
        team.id,
        team.fullName,
        '', // Placeholder for common name
        '', // Placeholder for place name
        team.triCode,
        now,
        now
      );
    });
    
    stmt.finalize();
  });
}

(async () => {
  // Open a database (creates it if it doesn't exist)
  const db = new sqlite3.Database(DATABASE_FILE_PATH, (err) => {
    if (err) {
      console.error('Error opening database:', err.message);
    }
  });

  try {
    const teams: NHLApiTeam[] = await fetchTeams();
    insertTeams(teams, db);
  } catch (error) {
    console.error('Error fetching teams:', error);
  }

  // Close the database connection
  db.close();
})();
