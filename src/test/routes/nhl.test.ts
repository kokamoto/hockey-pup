import { describe, it, expect } from "vitest";
import { parse } from "node-html-parser";

import app from "../../app.tsx";

describe("NHL Page", () => {
  it("should render the NHL page title", async () => {
    const response = await app.request("/nhl");
    const text = await response.text();
    const html = parse(text);
    expect(html.querySelector("title")?.text).toBe("Hocky Pup: NHL");
    expect(response.status).toBe(200);
  });
});
