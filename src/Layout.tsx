import { html } from 'hono/html'

export interface LayoutProps {
  title?: string
  description?: string
  children?: any
}

export const Layout = (props: LayoutProps) => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${props.title}</title>
      <meta name="description" content="${props.description}">
      <script src="https://unpkg.com/htmx.org@2.0.4" integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://unpkg.com/mvp.css"> 
    </head>
    <body>
      <nav>
        <a href="/">Hockey Pup</a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/examples">Examples</a></li>
          <li><a href="/nhl/teams">NHL Teams</a></li>
        </ul>
      </nav>
      <main>
      ${props.children} <!-- Render children here -->
      </main>
    </body>
    </html>`
}
