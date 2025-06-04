export type NHLTeam = {
  id: number;
  franhiseId: number;
  fullName: string;
  triCode: string;
};

async function fetchNHLTeams(): Promise<NHLTeam[]> {
  const response = await fetch('https://api.nhle.com/stats/rest/en/team');
  if (!response.ok) {
    throw new Error(`Failed to fetch NHL teams: ${response.statusText}`);
  }
  const data = await response.json();
  if (!Array.isArray(data.data)) {
    throw new Error('Unexpected API response format');
  }
  return data.data.map((team: any) => ({
    id: team.id,
    franhiseId: team.franchiseId,
    fullName: team.fullName,
    triCode: team.triCode,
  }));
}

export const NHLAdapter = {
  fetchNHLTeams
}