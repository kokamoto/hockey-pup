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
      <h1>Fun Examples</h1>
      <h2>Random Color Swatch</h2>
      <p>Click the button to generate a random color swatch.</p>
      <button hx-get="/example/random-color-swatch" hx-target="#color-swatch">Get Random Color Swatch</button>
      <div id="color-swatch" style={{ marginTop: '20px' }}>
        <div style={{ width: '100px', height: '100px', backgroundColor: 'trasparent' }}></div>
      </div>
    </Layout>)
})

app.get('/example/random-color-swatch', (c) => {
  // Render a random color swatch
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return c.html(
      <div style={{ width: '100px', height: '100px', backgroundColor: randomColor }}></div>
  )
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
