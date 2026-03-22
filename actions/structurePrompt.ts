"use server";

import { directivePrompt } from "@/constants/constants";

export async function structurePrompt({ prompt }: { prompt: string }) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (process.env.POLLINATIONS_API_KEY) {
    headers["Authorization"] = `Bearer ${process.env.POLLINATIONS_API_KEY}`;
  }

  const response = await fetch("https://text.pollinations.ai/openai", {
    method: "POST",
    headers,
    body: JSON.stringify({
      model: "openai",
      messages: [
        {
          role: "user",
          content: directivePrompt + prompt,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Text generation failed: ${response.status} - ${errorText}`
    );
  }

  const data = await response.json();
  const text: string | undefined = data?.choices?.[0]?.message?.content;
  if (!text) {
    throw new Error("Unexpected response format from text generation API");
  }
  console.log(text);
  return text;
}
