import { vi, describe, it, expect } from "vitest";

describe("Config", () => {
  it("should return the correct database file path based on environment", () => {
    // Test for 'test' environment
    vi.stubEnv("HOCKEY_PUP_ENV", "test");
    const { Config } = require("../../utils/config.ts");
    expect(Config.getDataBaseFilePath()).toBe("data/hockey-pup.test.sqlite");

    // Test for non-'test' environment
    vi.stubEnv("HOCKEY_PUP_ENV", "production");
    expect(Config.getDataBaseFilePath()).toBe("data/hockey-pup.sqlite");

    vi.stubEnv("HOCKEY_PUP_ENV", "");
    expect(Config.getDataBaseFilePath()).toBe("data/hockey-pup.sqlite");

    vi.unstubAllEnvs();
  });
});