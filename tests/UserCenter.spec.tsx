import { describe, it, expect } from "vitest";
import { handleUserCenterAction } from "../src/services/usersService";
describe("UserCenter", () => {
  it("executes business logic cleanly", async () => {
    const res = await handleUserCenterAction("test");
    expect(res.status).toBe("success");
  });
});