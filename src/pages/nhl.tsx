import { Hono } from 'hono'
import { html } from 'hono/html'
import { Layout } from '../Layout.tsx'
import { NHLAdapter } from '../utils/nhl-adapter.ts'

const nhl = new Hono()

nhl.get('/teams', async (c) => {

  const nhlTeams = await NHLAdapter.fetchNHLTeams();
  const teamsHtml = nhlTeams.map(team => (<li>{team.fullName}</li>))
  
  return c.html(
    <Layout title="NHL Teams" description="List of NHL teams">
      <h1>NHL Teams</h1>
      <ul>
        {teamsHtml}
      </ul>
      <p>Click on a team to see more details.</p>
    </Layout>
  )

})

export default nhl;