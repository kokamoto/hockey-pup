import { html } from "hono/html";

export const RosterList = () => {
  return html`
    <div class="roster-list">
      <h2>Roster List</h2>
      <ul>
        <li>Player 1</li>
        <li>Player 2</li>
        <li>Player 3</li>
      </ul>
    </div>
  `;
};