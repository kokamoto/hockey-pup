import { html } from 'hono/html'

export const Roster = () => {
  return html`
    <div class="roster">
      <p>This is the roster page.</p>
      <p>Here you can find the roster of players.</p>
    </div>
  `
}