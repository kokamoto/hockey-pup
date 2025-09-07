import { DBConstants } from "./constants.ts";


/*
 * TEAM TABLE
 */
const TEAM_TABLE_NAME = DBConstants.TEAM_TABLE_NAME;
const TeamFields = {
  ID: "id",
  TEAM_FULL_NAME: "teamFullName",
  TEAM_COMMON_NAME: "teamCommonName",
  TEAM_PLACE_NAME: "teamPlaceName",
  TRI_CODE: "triCode",
  CREATED_AT: "createdAt",
  UPDATED_AT: "updatedAt"
};
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

/*
 * PLAYER TABLE
 */
const PLAYER_TABLE_NAME = DBConstants.PLAYER_TABLE_NAME;
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
const INSERT_INTO_PLAYER_TABLE_SQL = `INSERT INTO ${PLAYER_TABLE_NAME} (
  ${PlayerFields.ID},
  ${PlayerFields.HEADSHOT_URL},
  ${PlayerFields.FIRST_NAME},
  ${PlayerFields.LAST_NAME},
  ${PlayerFields.POSITION},
  ${PlayerFields.SHOOTS},
  ${PlayerFields.HEIGHT_IN_CENTIMETERS},
  ${PlayerFields.WEIGHT_IN_KILOGRAMS},
  ${PlayerFields.BIRTH_DATE},
  ${PlayerFields.BIRTH_CITY},
  ${PlayerFields.BIRTH_STATE_PROVINCE},
  ${PlayerFields.BIRTH_COUNTRY},
  ${PlayerFields.CREATED_AT},
  ${PlayerFields.UPDATED_AT}
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(${PlayerFields.ID}) DO UPDATE SET
  ${PlayerFields.HEADSHOT_URL} = excluded.${PlayerFields.HEADSHOT_URL},
  ${PlayerFields.FIRST_NAME} = excluded.${PlayerFields.FIRST_NAME},
  ${PlayerFields.LAST_NAME} = excluded.${PlayerFields.LAST_NAME},
  ${PlayerFields.POSITION} = excluded.${PlayerFields.POSITION},
  ${PlayerFields.SHOOTS} = excluded.${PlayerFields.SHOOTS},
  ${PlayerFields.HEIGHT_IN_CENTIMETERS} = excluded.${PlayerFields.HEIGHT_IN_CENTIMETERS},
  ${PlayerFields.WEIGHT_IN_KILOGRAMS} = excluded.${PlayerFields.WEIGHT_IN_KILOGRAMS},
  ${PlayerFields.BIRTH_DATE} = excluded.${PlayerFields.BIRTH_DATE},
  ${PlayerFields.BIRTH_CITY} = excluded.${PlayerFields.BIRTH_CITY},
  ${PlayerFields.BIRTH_STATE_PROVINCE} = excluded.${PlayerFields.BIRTH_STATE_PROVINCE},
  ${PlayerFields.BIRTH_COUNTRY} = excluded.${PlayerFields.BIRTH_COUNTRY},
  ${PlayerFields.UPDATED_AT} = excluded.${PlayerFields.UPDATED_AT}
`;

/*
 * COUNTRY TABLE
 */
const COUNTRY_TABLE_NAME = "countries";
const CountryFields = {
  ID: "id",
  NAME: "name",
  CODE: "code",
  CREATED_AT: "createdAt",
  UPDATED_AT: "updatedAt"
};
const CREATE_COUNTRY_TABLE_SQL = `CREATE TABLE IF NOT EXISTS ${COUNTRY_TABLE_NAME} (
  ${CountryFields.ID} TEXT PRIMARY KEY,
  ${CountryFields.NAME} TEXT,
  ${CountryFields.CODE} TEXT,
  ${CountryFields.CREATED_AT} INTEGER,
  ${CountryFields.UPDATED_AT} INTEGER
)`;
const INSERT_INTO_COUNTRY_TABLE_SQL = `INSERT INTO ${COUNTRY_TABLE_NAME} (
  ${CountryFields.ID},
  ${CountryFields.NAME},
  ${CountryFields.CODE},
  ${CountryFields.CREATED_AT},
  ${CountryFields.UPDATED_AT}
) VALUES (?, ?, ?, ?, ?) ON CONFLICT(${CountryFields.ID}) DO UPDATE SET
  ${CountryFields.NAME} = excluded.${CountryFields.NAME},
  ${CountryFields.CODE} = excluded.${CountryFields.CODE},
  ${CountryFields.UPDATED_AT} = excluded.${CountryFields.UPDATED_AT}
`;


export const SQLStatements = {
  CREATE_TEAM_TABLE_SQL,
  INSERT_INTO_TEAM_TABLE_SQL,
  CREATE_PLAYER_TABLE_SQL,
  INSERT_INTO_PLAYER_TABLE_SQL,
  CREATE_COUNTRY_TABLE_SQL,
  INSERT_INTO_COUNTRY_TABLE_SQL
};