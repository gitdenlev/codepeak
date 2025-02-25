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

const saveScan_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { username, scanResult } = body;
    if (!username || !scanResult) {
      throw createError({
        statusCode: 400,
        message: "Username and scanResult are required"
      });
    }
    const requiredFields = ["filename", "fileType", "fileSize", "scannedAt"];
    const isValidScan = requiredFields.every((field) => field in scanResult);
    if (!isValidScan) {
      throw createError({
        statusCode: 400,
        message: "Invalid scanResult structure"
      });
    }
    const user = await User.findOne({ username });
    if (!user) {
      throw createError({
        statusCode: 404,
        message: "User not found"
      });
    }
    user.scans.push(scanResult);
    await user.save();
    console.log("Scan saved successfully for user:", username);
    return { success: true, message: "Scan saved successfully" };
  } catch (error) {
    console.error("Error saving scan:", error);
    throw createError({
      statusCode: 500,
      message: error.message || "Internal server error"
    });
  }
});

export { saveScan_post as default };
//# sourceMappingURL=saveScan.post.mjs.map
