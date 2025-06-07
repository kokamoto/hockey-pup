import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'
import { Layout, type LayoutProps } from './Layout.tsx'

import examples from './pages/examples.tsx'
import nhl from './pages/nhl.tsx'

const app = new Hono();

app.use('/static/*', serveStatic({ root: './src/' }))

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
      <img src="/static/hockey-pup.svg" alt="Hockey Pup Logo" />
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
