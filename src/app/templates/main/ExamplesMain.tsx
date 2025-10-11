import { html } from 'hono/html';

export const ExamplesMain = () => {
  return html`
    <main id="example-main">
      <h1>Fun Examples</h1>
      <h2>Random Color Swatch</h2>
      <p>Click the button to generate a random color swatch.</p>
      <button hx-get="/examples/random-color-swatch" hx-target="#color-swatch">Get Random Color Swatch</button>
      <div id="color-swatch" style="margin-top: 20px;">
        <div style="width: 100px; height: 100px; background-color: transparent;"></div>
      </div>
    </main>
  `;
}
