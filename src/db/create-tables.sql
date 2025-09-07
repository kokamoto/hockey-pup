-- Create table for teams
CREATE TABLE IF NOT EXISTS teams (
    id INTEGER PRIMARY KEY,
    teamFullName TEXT,
    teamCommonName TEXT,
    teamPlaceName TEXT,
    triCode TEXT,
    createdAt INTEGER,
    updatedAt INTEGER
);

-- Create table for players
CREATE TABLE IF NOT EXISTS players (
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
);

-- Create table for countries

CREATE TABLE IF NOT EXISTS countries (
    id TEXT PRIMARY KEY,
    name TEXT,
    code TEXT,
    iocCode TEXT,
    createdAt INTEGER,
    updatedAt INTEGER
);

