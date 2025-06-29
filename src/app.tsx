import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'
import { Layout, type LayoutProps } from './templates/layouts/Layout.tsx'

import examples from './routes/examples.tsx'
import nhl from './routes/nhl.tsx'

const app = new Hono();

app.use('/static/*', serveStatic({ root: './src/' }))

app.get('/', (c) => {
  // Render the main page with a layout
  const props: LayoutProps = {
    title: 'Home',
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

export default app;

