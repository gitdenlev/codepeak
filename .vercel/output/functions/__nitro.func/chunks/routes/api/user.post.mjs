import { d as defineEventHandler, r as readBody, c as createError } from '../../_/nitro.mjs';
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

const user_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { username, email, password } = body;
    if (!username || !email || !password) {
      throw createError({
        statusCode: 400,
        message: "All fields are required"
      });
    }
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      throw createError({
        statusCode: 400,
        message: "Username already exists"
      });
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      throw createError({
        statusCode: 400,
        message: "Email already exists"
      });
    }
    const newUser = new User({
      username,
      email: email.toLowerCase(),
      password
    });
    await newUser.save();
    return {
      message: "User created successfully",
      user: {
        username: newUser.username,
        email: newUser.email
      }
    };
  } catch (error) {
    console.error("Registration error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Error creating user"
    });
  }
});

export { user_post as default };
//# sourceMappingURL=user.post.mjs.map
