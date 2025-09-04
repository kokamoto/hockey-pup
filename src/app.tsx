import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'
import { Layout, type LayoutProps } from './templates/layout/Layout.tsx'
import { HomeMain } from './templates/main/HomeMain.tsx'

import examples from './routes/examples.tsx'
import nhl from './routes/nhl.tsx'

const app = new Hono();

app.use('/static/*', serveStatic({ root: './src/' }))

app.get('/', (c) => {
  // Render the main page with a layout
  const props: LayoutProps = {
    title: 'Home',
    description: 'Hockey Pup home page.'
  }
  return c.html(
    <Layout {...props}>
      <HomeMain />
    </Layout>)
})

app.route('/examples', examples);
app.route('/nhl', nhl);

export default app;

