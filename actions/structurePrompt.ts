"use server";

import Groq from "groq-sdk";
import { directivePrompt } from "@/constants/constants";

if (!process.env.GROQ_API_KEY) {
  throw new Error("GROQ_API_KEY environment variable is not set");
}

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function structurePrompt({ prompt }: { prompt: string }) {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: directivePrompt,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 512,
    });

    const text = completion.choices[0]?.message?.content;
    if (!text) {
      throw new Error("Unexpected response format from Groq API");
    }
    console.log(text);
    return text;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (message.includes("429") || message.toLowerCase().includes("rate limit")) {
      throw new Error("429: Groq API rate limit exceeded. Please try again shortly.");
    }
    throw new Error(`Groq API error: ${message}`);
  }
}
