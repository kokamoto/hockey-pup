import { Hono } from 'hono'
import { html } from 'hono/html'
import { Layout } from '../templates/layout/Layout.tsx'
import { fetchTeams } from '../utils/db-adapter.ts'

const nhl = new Hono()

nhl.get('/', (c) => {
  return c.html(
    <Layout title="NHL" description="This is the NHL page.">
      <h1>NHL</h1>
      <p>Welcome to the NHL section of Hockey Pup!</p>
      <p>Here you can find information about NHL teams and players.</p>
      <ul>
        <li><a href="/nhl/teams">Teams</a></li>
      </ul>
    </Layout>
  )
});

nhl.get('/teams', async (c) => {

  const nhlTeams = await fetchTeams();
  const teamsHtml = nhlTeams.map(team =>
    html`<li><a href='/nhl/teams/${team.id}'>${team.fullName}</a></li>`
  )
  
  return c.html(
    <Layout title="NHL" description="List of NHL teams">
      <h1>NHL Teams</h1>
      <ul>
        {teamsHtml}
      </ul>
      <p>Click on a team to see more details.</p>
    </Layout>
  )

})

nhl.get('/teams/:id', async (c) => {
  const teamId = c.req.param('id');
  const nhlTeams = await fetchTeams();
  const team = nhlTeams.find(t => t.id === parseInt(teamId));

  if (!team) {
    return c.text('Team not found', 404);
  }

  return c.html(
    <Layout title={team.fullName} description={`Details for ${team.fullName}`}>
      <h1>{team.fullName}</h1>
      <p>Franchise ID: {team.franchiseId}</p>
      <p>Tri Code: {team.triCode}</p>
      <p><a href="/nhl/teams">Back to Teams</a></p>
    </Layout>
  )
})

nhl.get('/teams/:id/roster', async (c) => {
  const teamId = c.req.param('id');
  const nhlTeams = await fetchTeams();
  const team = nhlTeams.find(t => t.id === parseInt(teamId));

  if (!team) {
    return c.text('Team not found', 404);
  }

  // Here you would typically fetch the roster for the team
  // For now, we'll just return a placeholder
  const rosterHtml = html`<p>Roster for ${team.fullName} will be displayed here.</p>`;

  return c.html(
    <Layout title={`${team.fullName} Roster`} description={`Roster for ${team.fullName}`}>
      <h1>{team.fullName} Roster</h1>
      {rosterHtml}
      <p><a href={`/nhl/teams/${team.id}`}>Back to Team Details</a></p>
    </Layout>
  )
})

export default nhl;