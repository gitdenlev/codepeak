import { d as defineEventHandler, r as readBody, u as useRuntimeConfig, c as createError, s as setCookie } from '../../_/nitro.mjs';
import jwt from 'jsonwebtoken';
import { U as User } from '../../_/User.model.mjs';
import 'node:http';
import 'node:https';
import 'consola/core';
import 'mongoose';
import '@iconify/utils';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import 'bcrypt';

const login_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email, password } = body;
    const { jwtSecret } = useRuntimeConfig();
    if (!email || !password) {
      throw createError({
        statusCode: 400,
        message: "Email and password are required"
      });
    }
    if (!jwtSecret) {
      throw createError({
        statusCode: 500,
        message: "Server misconfiguration - JWT secret not configured"
      });
    }
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      throw createError({
        statusCode: 401,
        message: "Invalid email or password"
      });
    }
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      throw createError({
        statusCode: 401,
        message: "Invalid email or password"
      });
    }
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        username: user.username
      },
      jwtSecret,
      { expiresIn: "24h" }
    );
    setCookie(event, "token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      // Increased security
      maxAge: 60 * 60 * 24,
      // 24 hours
      path: "/"
      // Ensure cookie is available across site
    });
    setCookie(
      event,
      "user",
      JSON.stringify({
        id: user._id,
        email: user.email,
        username: user.username
      }),
      {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24,
        // 24 години
        path: "/"
        // Доступність куки на всьому сайті
      }
    );
    const response = {
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      },
      token
    };
    console.log("Login response:", response);
    return response;
  } catch (error) {
    console.error("Login error:", {
      message: error.message,
      stack: error.stack,
      statusCode: error.statusCode
    });
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "An error occurred during login"
    });
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
