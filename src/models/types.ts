// TypeScript types generated from SQL table definitions in create-tables.sql

export type Team = {
  id: number;
  teamFullName: string;
  teamCommonName: string;
  teamPlaceName: string;
  triCode: string;
  createdAt: number;
  updatedAt: number;
};

export type Player = {
  id: number;
  headshotUrl: string;
  firstName: string;
  lastName: string;
  position: string;
  shoots: string;
  heightInCentimeters: number;
  weightInKilograms: number;
  birthDate: string;
  birthCity: string;
  birthStateProvince: string;
  birthCountry: string;
  createdAt: number;
  updatedAt: number;
};

export type Country = {
  id: string;
  name: string;
  code: string;
  iocCode: string;
  createdAt: number;
  updatedAt: number;
};
