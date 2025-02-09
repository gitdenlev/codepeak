import { useConfig } from "~/composables/config";

export default defineEventHandler(async (event) => {
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
          Authorization: `Bearer ${apiKey}`, // Використовуємо apiKey
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ inputs: imageFile }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Hugging Face API error:", errorData);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return { response: result };
  } catch (error) {
    console.error("Error querying model:", error);
    return { response: "Sorry, something went wrong. Please try again." };
  }
});
