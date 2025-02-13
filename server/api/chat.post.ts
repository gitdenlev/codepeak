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
          Authorization: `Bearer ${apiKey}`,
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
    console.log("Hugging Face API response:", result);

    // Перевіряємо, чи `result` є масивом, якщо ні — робимо його масивом
    const formattedResult = Array.isArray(result) ? result : [result];

    return { response: formattedResult };
  } catch (error) {
    console.error("Error querying model:", error);
    return { response: [] }; // Повертаємо порожній масив, щоб уникнути помилок у фронтенді
  }
});
