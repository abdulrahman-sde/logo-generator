"use server";

import { directivePrompt } from "@/constants/constants";
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function structurePrompt({ prompt }: { prompt: string }) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: directivePrompt + prompt,
  });
  console.log(response.text);
  console.log(response.text)
  return response.text;
}
