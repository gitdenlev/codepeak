  // server/api/saveScan.post.ts
  import User from "../models/User.model";

  export default defineEventHandler(async (event) => {
    try {
      const body = await readBody(event);
      const { username, scanResult } = body;

      // Валідація даних
      if (!username || !scanResult) {
        throw createError({
          statusCode: 400,
          message: "Username and scanResult are required",
        });
      }

      // Перевірка структури scanResult
      const requiredFields = ["filename", "fileType", "fileSize", "scannedAt"];
      const isValidScan = requiredFields.every((field) => field in scanResult);

      if (!isValidScan) {
        throw createError({
          statusCode: 400,
          message: "Invalid scanResult structure",
        });
      }

      // Пошук користувача
      const user = await User.findOne({ username });
      if (!user) {
        throw createError({
          statusCode: 404,
          message: "User not found",
        });
      }

      // Додавання скану
      user.scans.push(scanResult);
      await user.save();

      console.log("Scan saved successfully for user:", username); // Додано логування

      return { success: true, message: "Scan saved successfully" };
    } catch (error) {
      console.error("Error saving scan:", error);
      throw createError({
        statusCode: 500,
        message: error.message || "Internal server error",
      });
    }
  });
