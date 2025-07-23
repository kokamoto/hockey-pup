const DATABASE_FILE_PATH = "data/hockey-pup.sqlite";

function getDataBaseFilePath(): string {
  return process.env.DATA_BASE_FILE_PATH || DATABASE_FILE_PATH
}

export const Config = {
  getDataBaseFilePath
}
