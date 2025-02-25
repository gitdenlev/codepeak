import { u as useRuntimeConfig, d as defineEventHandler, r as readBody } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'consola/core';
import 'mongoose';
import '@iconify/utils';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';

const useConfig = () => {
  const config = useRuntimeConfig();
  return {
    apiKey: config.apiKey,
    mongodbUri: config.mongodbUri,
    jwtSecret: config.jwtSecret
  };
};

const chat_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const imageFile = body.image;
  const { apiKey } = useConfig();
  if (!apiKey) {
    throw new Error("Hugging Face API key is missing");
  }
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/microsoft/resnet-50",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ inputs: imageFile })
      }
    );
    if (!response.ok) {
      const errorData = await response.text();
      console.error("Hugging Face API error:", errorData);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log("Hugging Face API response:", result);
    const formattedResult = Array.isArray(result) ? result : [result];
    return { response: formattedResult };
  } catch (error) {
    console.error("Error querying model:", error);
    return { response: [] };
  }
});

export { chat_post as default };
//# sourceMappingURL=chat.post.mjs.map
