import { describe, it, expect } from "vitest";
import { parse } from "node-html-parser";

import app from "../../app.tsx";

describe("Examples Page", () => {
  it("should render the Examples page title", async () => {
    const response = await app.request("/examples");
    const text = await response.text();
    const html = parse(text);
    expect(html.querySelector("title")?.text).toBe("Hockey Pup: Examples");
    expect(response.status).toBe(200);
  });
});
