import { Hono } from 'hono'
import { html } from 'hono/html'
import { Layout } from '../Layout.tsx'

const nhl = new Hono()

nhl.get('/teams', (c) => {

  // This route would typically fetch NHL teams from an API or database
  const teams = [
    { id: 1, name: 'Team A' },
    { id: 2, name: 'Team B' },
    { id: 3, name: 'Team C' }
  ]

  const teamsHtml = teams.map(team => (<li>{team.name}</li>))
  
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