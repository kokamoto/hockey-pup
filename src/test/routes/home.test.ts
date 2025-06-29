import { describe, it, expect } from "vitest";
import { parse } from "node-html-parser";

import app from "../../app.tsx";

describe("Home Page", () => {

  it("should render the Home page", async () => {
    const response = await app.request("/");
    const text = await response.text();
    const html = parse(text);
    expect(html.querySelector("title")?.text).toBe("Hockey Pup: Home");
    expect(html.querySelector("main#home-main")).not.toBeNull();
    expect(response.status).toBe(200);
  });

});
