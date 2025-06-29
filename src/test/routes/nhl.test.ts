import { describe, it, expect } from "vitest";
import { parse } from "node-html-parser";

import app from "../../app.tsx";

describe("NHL Page", () => {

  it("should render the NHL page", async () => {
    const response = await app.request("/nhl/teams");
    const text = await response.text();
    const html = parse(text);
    expect(html.querySelector("title")?.text).toBe("Hockey Pup: NHL");
    expect(html.querySelector("main#nhl-main")).not.toBeNull();
    expect(response.status).toBe(200);
  });

});
