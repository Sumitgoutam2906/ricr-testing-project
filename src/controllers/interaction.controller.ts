export async function createInteraction(req: any, service: any) {
  const { studentId, statusId, remarks } = req.body;

  // validation
  if (!studentId) {
    return { success: false, message: "studentId is required" };
  }

  if (!statusId) {
    return { success: false, message: "statusId is required" };
  }

  if (!remarks) {
    return { success: false, message: "remarks is required" };
  }

  try {
    const data = await service.createInteraction(req.body);

    return {
      success: true,
      message: "Interaction created",
      data
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    };
  }
}