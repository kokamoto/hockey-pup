import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { Layout, type LayoutProps } from './Layout.tsx'

const app = new Hono();

app.get('/', (c) => {
  // Render the main page with a layout
  const props: LayoutProps = {
    title: 'Puck Pup',
    description: 'A simple hockey app.'
  }
  return c.html(
    <Layout {...props}>
      <h1>Welcome to Puck Pup!</h1>
      <p>Visit <a href="/hello">/hello</a> to see another route.</p>
    </Layout>)
})

app.get('/hello', (c) => {
  // Render a simple page
  return c.html(
    <Layout title="Hello Page" description="This is the hello page.">
      <h1>Hello, World!</h1>
      <p>This is another route in our Hono app.</p>
    </Layout>)
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
