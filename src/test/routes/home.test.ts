import { describe, it, expect } from "vitest";
import { parse } from "node-html-parser";

import app from "../../app.tsx";

describe("Home Page", () => {
  it("should render the Home page title", async () => {
    const response = await app.request("/");
    const text = await response.text();
    const html = parse(text);
    expect(html.querySelector("title")?.text).toBe("Hocky Pup: Home");
    expect(response.status).toBe(200);
  });
});
