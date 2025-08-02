const DATABASE_FILE_PATH = "data/hockey-pup.sqlite";
const TEST_DATABASE_FILE_PATH = "data/hockey-pup.test.sqlite";

function getDataBaseFilePath(): string {
  return process.env.HOCKEY_PUP_ENV === "test" ? TEST_DATABASE_FILE_PATH : DATABASE_FILE_PATH;
}

export const Config = {
  getDataBaseFilePath
}
