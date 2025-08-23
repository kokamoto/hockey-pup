import { DBConstants } from "./constants.ts";

const TEAM_TABLE_NAME = DBConstants.TEAM_TABLE_NAME;
const PLAYER_TABLE_NAME = DBConstants.PLAYER_TABLE_NAME;

const TeamFields = {
  ID: "id",
  TEAM_FULL_NAME: "teamFullName",
  TEAM_COMMON_NAME: "teamCommonName",
  TEAM_PLACE_NAME: "teamPlaceName",
  TRI_CODE: "triCode",
  CREATED_AT: "createdAt",
  UPDATED_AT: "updatedAt"
}

const CREATE_TEAM_TABLE_SQL = `CREATE TABLE IF NOT EXISTS ${TEAM_TABLE_NAME} (
    ${TeamFields.ID} INTEGER PRIMARY KEY,
    ${TeamFields.TEAM_FULL_NAME} TEXT,
    ${TeamFields.TEAM_COMMON_NAME} TEXT,
    ${TeamFields.TEAM_PLACE_NAME} TEXT,
    ${TeamFields.TRI_CODE} TEXT,
    ${TeamFields.CREATED_AT} INTEGER,
    ${TeamFields.UPDATED_AT} INTEGER
)`;

const INSERT_INTO_TEAM_TABLE_SQL = `INSERT INTO ${TEAM_TABLE_NAME} (
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
`;

const PlayerFields = {
  ID: "id",
  HEADSHOT_URL: "headshotUrl",
  FIRST_NAME: "firstName",
  LAST_NAME: "lastName",
  POSITION: "position",
  SHOOTS: "shoots",
  HEIGHT_IN_CENTIMETERS: "heightInCentimeters",
  WEIGHT_IN_KILOGRAMS: "weightInKilograms",
  BIRTH_DATE: "birthDate",
  BIRTH_CITY: "birthCity",
  BIRTH_STATE_PROVINCE: "birthStateProvince",
  BIRTH_COUNTRY: "birthCountry",
  CREATED_AT: "createdAt",
  UPDATED_AT: "updatedAt"
};

const CREATE_PLAYER_TABLE_SQL = `CREATE TABLE IF NOT EXISTS ${PLAYER_TABLE_NAME} (
  ${PlayerFields.ID} INTEGER PRIMARY KEY,
  ${PlayerFields.HEADSHOT_URL} TEXT,
  ${PlayerFields.FIRST_NAME} TEXT,
  ${PlayerFields.LAST_NAME} TEXT,
  ${PlayerFields.POSITION} TEXT,
  ${PlayerFields.SHOOTS} TEXT,
  ${PlayerFields.HEIGHT_IN_CENTIMETERS} INTEGER,
  ${PlayerFields.WEIGHT_IN_KILOGRAMS} INTEGER,
  ${PlayerFields.BIRTH_DATE} TEXT,
  ${PlayerFields.BIRTH_CITY} TEXT,
  ${PlayerFields.BIRTH_STATE_PROVINCE} TEXT,
  ${PlayerFields.BIRTH_COUNTRY} TEXT,
  ${PlayerFields.CREATED_AT} INTEGER,
  ${PlayerFields.UPDATED_AT} INTEGER
)`;

export const SQLStatements = {
  CREATE_TEAM_TABLE_SQL,
  INSERT_INTO_TEAM_TABLE_SQL,
  CREATE_PLAYER_TABLE_SQL
};