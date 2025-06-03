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
    </head>
    <body>
      ${props.children} <!-- Render children here -->
    </body>
    </html>`
}
