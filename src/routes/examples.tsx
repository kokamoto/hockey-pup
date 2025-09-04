import { Hono } from 'hono'
import { Layout } from '../templates/layout/Layout.tsx'
import { ExamplesMain } from '../templates/main/ExamplesMain.tsx'

const examples = new Hono()
examples.get('/', (c) => {
  return c.html(
    <Layout title="Examples" description="This is the examples page.">
      <ExamplesMain />
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