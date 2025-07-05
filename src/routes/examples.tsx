import { Hono } from 'hono'
import { Layout } from '../templates/layouts/Layout.tsx'

const examples = new Hono()
examples.get('/', (c) => {
  return c.html(
    <Layout title="Fun Examples" description="This is the examples page.">
      <h1>Fun Examples</h1>
      <section>
        <h2>Random Color Swatch</h2>
        <p>Click the button to generate a random color swatch.</p>
        <button hx-get="/examples/api/random-color-swatch" hx-target="#color-swatch">Get Random Color Swatch</button>
        <div id="color-swatch" style={{ marginTop: '20px' }}>
          <div style={{ width: '100px', height: '100px', backgroundColor: 'trasparent' }}></div>
        </div>
      </section>
      <section>
        <h2>Random Hockey Team</h2>
        <button hx-get="/examples/api/random-hockey-team-link" hx-target="#hockey-team-link">Get Hockey Team Link</button>
        <div id="hockey-team-link" style={{ marginTop: '20px'}}>
        </div>
      </section>
      <section>
        <h2>Tile Example</h2>
        <ul>
          <li class="tile">First Tile</li>
          <li class="tile">Second Tile</li>
          <li class="tile">Third Tile</li>
        </ul>
      </section>
    </Layout>)
})  

examples.get('/api/random-color-swatch', (c) => {
  // Render a random color swatch
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return c.html(
      <div style={{ width: '100px', height: '100px', backgroundColor: randomColor }}></div>
  )
})

examples.get('/api/random-hockey-team-link', (c) => {
  return c.html(
    <a href="/nhl/teams/SJS">San Jose Sharks</a>
  )

})

export default examples