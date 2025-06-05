import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { Layout, type LayoutProps } from './Layout.tsx'

import examples from './pages/examples.tsx'
import nhl from './pages/nhl.tsx'

const app = new Hono();

app.get('/', (c) => {
  // Render the main page with a layout
  const props: LayoutProps = {
    title: 'Hockey Pup',
    description: 'A simple hockey app.'
  }
  return c.html(
    <Layout {...props}>
      <h1>Welcome to Hockey Pup!</h1>
      <p>Your hockey companion</p>
      <p>Visit <a href="/examples">/examples</a> to see another route.</p>
    </Layout>)
})

app.route('/examples', examples);
app.route('/nhl', nhl);

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
