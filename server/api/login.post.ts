import jwt from "jsonwebtoken";
import User from "../models/User.model";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email, password } = body;
    const { jwtSecret } = useRuntimeConfig();

    // Input validation
    if (!email || !password) {
      throw createError({
        statusCode: 400,
        message: "Email and password are required",
      });
    }

    // Check JWT_SECRET
    if (!jwtSecret) {
      throw createError({
        statusCode: 500,
        message: "Server misconfiguration - JWT secret not configured",
      });
    }

    // Find user and handle case-sensitivity
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      throw createError({
        statusCode: 401,
        message: "Invalid email or password",
      });
    }

    // Compare password
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      throw createError({
        statusCode: 401,
        message: "Invalid email or password",
      });
    }

    // Generate token with user info
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        username: user.username,
      },
      jwtSecret,
      { expiresIn: "24h" }
    );

    // Set secure cookie
    setCookie(event, "token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict", // Increased security
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/", // Ensure cookie is available across site
    });

    setCookie(
      event,
      "user",
      JSON.stringify({
        id: user._id,
        email: user.email,
        username: user.username,
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 24 години
        path: "/", // Доступність куки на всьому сайті
      }
    );

    // Return success with user details
    const response = {
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
      token,
    };

    console.log("Login response:", response); // Логування
    return response;
  } catch (error: any) {
    // Improved error logging
    console.error("Login error:", {
      message: error.message,
      stack: error.stack,
      statusCode: error.statusCode,
    });

    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "An error occurred during login",
    });
  }
});