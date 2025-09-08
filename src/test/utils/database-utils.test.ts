import { vi, describe, it, expect } from "vitest";
import { DatabaseUtils } from "../../utils/database-utils.ts";
import type { Database } from "sqlite3";

describe("Database Utils", () => {
  const ENV = "test";

  it("should be able to get the database connection", () => {
    const db: Database = DatabaseUtils.getDatabase(ENV);
    expect(db).toBeDefined();
    db.close();
  });

  it("should be able to initialize the database without errors", () => {
    DatabaseUtils.initializeDatabase(ENV);
    const db: Database = DatabaseUtils.getDatabase(ENV);
    db.serialize(() => {
      // Check if tables exist
      db.all("SELECT name FROM sqlite_master WHERE type='table';", (err, rows) => {
        expect(err).toBeNull();
        const tableNames = (rows as { name: string }[]).map(row => row.name);
        expect(tableNames.includes("countries")).toBeTruthy();
        expect(tableNames.includes("players")).toBeTruthy();
        expect(tableNames.includes("teams")).toBeTruthy();
      });

      // Check if initial country data is loaded
      db.get("SELECT COUNT(*) as count FROM countries;", (err, row) => {
        expect(err).toBeNull();
        expect((row as { count: number }).count).toBeGreaterThan(0);
      });
    });
    db.close();
  });
});