import { createInteraction } from "../controllers/interaction.controller";

describe("Interaction Controller", () => {

  const mockService = {
    createInteraction: jest.fn()
  };

  test("Missing studentId", async () => {
    const res = await createInteraction(
      { body: { statusId: 1, remarks: "test" } },
      mockService
    );

    expect(res.success).toBe(false);
    expect(res.message).toBe("studentId is required");
  });

  test("Missing statusId", async () => {
    const res = await createInteraction(
      { body: { studentId: 1, remarks: "test" } },
      mockService
    );

    expect(res.success).toBe(false);
    expect(res.message).toBe("statusId is required");
  });

  test("Missing remarks", async () => {
    const res = await createInteraction(
      { body: { studentId: 1, statusId: 1 } },
      mockService
    );

    expect(res.success).toBe(false);
    expect(res.message).toBe("remarks is required");
  });

  test("Success case", async () => {
    mockService.createInteraction.mockResolvedValue({ id: 1 });

    const res = await createInteraction(
      { body: { studentId: 1, statusId: 1, remarks: "ok" } },
      mockService
    );

    expect(res.success).toBe(true);
    expect(res.data.id).toBe(1);
  });

  test("Service failure", async () => {
    mockService.createInteraction.mockRejectedValue(new Error("Service error"));

    const res = await createInteraction(
      { body: { studentId: 1, statusId: 1, remarks: "ok" } },
      mockService
    );

    expect(res.success).toBe(false);
    expect(res.message).toBe("Service error");
  });

  test("Service call verify", async () => {
    mockService.createInteraction.mockResolvedValue({});

    const body = { studentId: 1, statusId: 1, remarks: "ok" };

    await createInteraction({ body }, mockService);

    expect(mockService.createInteraction).toHaveBeenCalledWith(body);
  });

});