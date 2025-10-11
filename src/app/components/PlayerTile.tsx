import { html } from "hono/html";

export const PlayerTile = (player: { name: string; position: string; number: number }) => {
  return html`
    <div class="player-tile">
      <h3>${player.name}</h3>
      <p>Position: ${player.position}</p>
      <p>Number: ${player.number}</p>
    </div>
  `;
}