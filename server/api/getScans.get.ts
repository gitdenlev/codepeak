import User from "../models/User.model";

export default defineEventHandler(async (event) => {
  const { username } = getQuery(event); // Отримуємо параметри запиту

  try {
    console.log("Fetching scans for username:", username); // Логування username
    const user = await User.findOne({ username });
    if (!user) {
      return { statusCode: 404, body: { message: "User not found" } };
    }

    // Перевірка, чи scans існує та чи є масивом
    if (!user.scans || !Array.isArray(user.scans)) {
      return {
        statusCode: 404,
        body: { message: "Scans not found or invalid format" },
      };
    }

    console.log("User found:", user); // Логування знайденого користувача
    console.log("Scans found:", user.scans); // Логування сканів

    return { statusCode: 200, body: { scans: user.scans } };
  } catch (error) {
    console.error("Error fetching scans:", error); // Логування помилки
    return {
      statusCode: 500,
      body: { message: "Error fetching scans", error },
    };
  }
});
