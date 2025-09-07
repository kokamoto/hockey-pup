import { vi, describe, it, expect } from "vitest";

describe("Config", () => {
  it("should return the correct database file path based on environment", () => {
    // Test for 'test' environment
    const { Config } = require("../../utils/config.ts");
    expect(Config.getDataBaseFilePath("test")).toBe("data/hockey-pup.test.sqlite");

    // Test for non-'test' environment
    expect(Config.getDataBaseFilePath("production")).toBe("data/hockey-pup.sqlite");

    // Test for undefined environment (should default to non-'test')
    expect(Config.getDataBaseFilePath()).toBe("data/hockey-pup.sqlite");

    vi.unstubAllEnvs();
  });
});