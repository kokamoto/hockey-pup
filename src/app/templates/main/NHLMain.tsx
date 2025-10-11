import { html } from 'hono/html';

export const NHLMain = (props: { children?: any }) => {
  return html`
    <main id="nhl-main">
      ${props.children}
    </main>
  `;
}
