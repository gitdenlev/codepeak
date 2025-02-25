import { d as defineEventHandler, g as getQuery } from '../../_/nitro.mjs';
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

const getScans_get = defineEventHandler(async (event) => {
  const { username } = getQuery(event);
  try {
    console.log("Fetching scans for username:", username);
    const user = await User.findOne({ username });
    if (!user) {
      return { statusCode: 404, body: { message: "User not found" } };
    }
    if (!user.scans || !Array.isArray(user.scans)) {
      return {
        statusCode: 404,
        body: { message: "Scans not found or invalid format" }
      };
    }
    console.log("User found:", user);
    console.log("Scans found:", user.scans);
    return { statusCode: 200, body: { scans: user.scans } };
  } catch (error) {
    console.error("Error fetching scans:", error);
    return {
      statusCode: 500,
      body: { message: "Error fetching scans", error }
    };
  }
});

export { getScans_get as default };
//# sourceMappingURL=getScans.get.mjs.map
