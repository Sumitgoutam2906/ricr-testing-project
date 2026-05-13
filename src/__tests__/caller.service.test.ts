import { getCallerById } from "../services/caller.service";

describe("Caller Service", () => {

  test("Happy path", async () => {
    const mockDb = {
      findById: jest.fn().mockResolvedValue({ id: "1", name: "Ankit" })
    };

    const result = await getCallerById("1", mockDb);

    expect(result.name).toBe("Ankit");
  });

  test("Not found", async () => {
    const mockDb = {
      findById: jest.fn().mockResolvedValue(null)
    };

    await expect(getCallerById("1", mockDb))
      .rejects
      .toThrow("Caller not found");
  });

  test("Argument verify", async () => {
    const mockDb = {
      findById: jest.fn().mockResolvedValue({ id: "1" })
    };

    await getCallerById("1", mockDb);

    expect(mockDb.findById).toHaveBeenCalledWith("1");
  });

  test("Database error propagation", async () => {
    const mockDb = {
      findById: jest.fn().mockRejectedValue(new Error("DB error"))
    };

    await expect(getCallerById("1", mockDb))
      .rejects
      .toThrow("DB error");
  });

});