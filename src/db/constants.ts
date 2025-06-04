export const DATABASE_FILE_PATH = "data/hockey-pup.sqlite";

export const TEAM_TABLE_NAME = "teams";
export const PLAYER_TABLE_NAME = "players";

export const TeamFields = {
  ID: "id",
  TEAM_FULL_NAME: "teamFullName",
  TEAM_COMMON_NAME: "teamCommonName",
  TEAM_PLACE_NAME: "teamPlaceName",
  TRI_CODE: "triCode",
  CREATED_AT: "createdAt",
  UPDATED_AT: "updatedAt"
} as const; 