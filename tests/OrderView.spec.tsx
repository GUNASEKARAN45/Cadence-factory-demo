import { describe, it, expect } from "vitest";
import { handleOrderViewAction } from "../src/services/ordersService";
describe("OrderView", () => {
  it("executes business logic cleanly", async () => {
    const res = await handleOrderViewAction("test");
    expect(res.status).toBe("success");
  });
});