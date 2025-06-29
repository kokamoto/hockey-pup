import { Hono } from 'hono'
import { Layout } from '../templates/layouts/Layout.tsx'

const examples = new Hono()
examples.get('/', (c) => {
  return c.html(
    <Layout title="Fun Examples" description="This is the examples page.">
      <h1>Fun Examples</h1>
      <h2>Random Color Swatch</h2>
      <p>Click the button to generate a random color swatch.</p>
      <button hx-get="/examples/random-color-swatch" hx-target="#color-swatch">Get Random Color Swatch</button>
      <div id="color-swatch" style={{ marginTop: '20px' }}>
        <div style={{ width: '100px', height: '100px', backgroundColor: 'trasparent' }}></div>
      </div>
    </Layout>)
})  

examples.get('/random-color-swatch', (c) => {
  // Render a random color swatch
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return c.html(
      <div style={{ width: '100px', height: '100px', backgroundColor: randomColor }}></div>
  )
})

export default examples