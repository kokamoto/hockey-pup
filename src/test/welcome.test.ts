import { describe, it, expect } from "vitest";
import { parse } from "node-html-parser";

import app from "../app.tsx";

describe("Welcome Page", () => {
  it("should render the welcome message", async () => {
    const response = await app.request("/");
    const text = await response.text();
    const html = parse(text);
    expect(html.querySelector("h1")?.text).toBe("Welcome to Hockey Pup!");
    expect(response.status).toBe(200);
  });
});
