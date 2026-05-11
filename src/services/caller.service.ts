type Db = {
  findById: (id: string) => Promise<any>;
};

// dependency inject करेंगे (test में mock pass करेंगे)
export async function getCallerById(id: string, db: Db) {
  if (!id) {
    throw new Error("Invalid id");
  }

  const result = await db.findById(id);

  if (!result) {
    throw new Error("Caller not found");
  }

  return result;
}