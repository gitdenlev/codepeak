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

const deleteUser_delete = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { username, email } = body;
    if (!username && !email) {
      throw createError({
        statusCode: 400,
        message: "Username or email is required"
      });
    }
    const user = await User.findOne({
      $or: [{ username }, { email }]
    });
    if (!user) {
      throw createError({
        statusCode: 404,
        message: "User not found"
      });
    }
    await User.deleteOne({ _id: user._id });
    return {
      message: "User deleted successfully"
    };
  } catch (error) {
    console.error("Deletion error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Error deleting user"
    });
  }
});

export { deleteUser_delete as default };
//# sourceMappingURL=deleteUser.delete.mjs.map
