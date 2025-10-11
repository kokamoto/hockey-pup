import { html } from 'hono/html';

export const HomeMain = () => {
  return html`
    <main id="home-main">
      <h1>Welcome to Hockey Pup!</h1>
      <p>Your hockey companion</p>
      <p>Visit <a href="/examples">/examples</a> to see another route.</p>
      <img src="/static/hockey-pup.svg" alt="Hockey Pup Logo" />
    </main>
  `;
}