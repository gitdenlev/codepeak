import User from "../models/User.model"; // Імпорт моделі

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { username, email } = body;

    // Validate input
    if (!username && !email) {
      throw createError({
        statusCode: 400,
        message: "Username or email is required",
      });
    }

    // Find user by username or email
    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (!user) {
      throw createError({
        statusCode: 404,
        message: "User not found",
      });
    }

    // Delete user
    await User.deleteOne({ _id: user._id });

    return {
      message: "User deleted successfully",
    };
  } catch (error: any) {
    console.error("Deletion error:", error);

    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Error deleting user",
    });
  }
});
