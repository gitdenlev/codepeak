import User from "../models/User.model"; // Імпорт моделі
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { username, email, password } = body;

    // Validate input
    if (!username || !email || !password) {
      throw createError({
        statusCode: 400,
        message: "All fields are required",
      });
    }

    // Check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      throw createError({
        statusCode: 400,
        message: "Username already exists",
      });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      throw createError({
        statusCode: 400,
        message: "Email already exists",
      });
    }

    // Create new user
    const newUser = new User({
      username,
      email: email.toLowerCase(),
      password,
    });

    await newUser.save();

    return {
      message: "User created successfully",
      user: {
        username: newUser.username,
        email: newUser.email,
      },
    };
  } catch (error: any) {
    console.error("Registration error:", error);

    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Error creating user",
    });
  }
});
