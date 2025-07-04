"use client";

import { useState } from "react";
import LogoForm from "@/components/generate/logo-form";
import GeneratedLogo from "@/components/generate/generated-logo";
import type { Logo } from "@/lib/types";
import { structurePrompt } from "@/actions/structurePrompt";

export default function GeneratePage() {
  const [generatedLogo, setGeneratedLogo] = useState<Logo | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (prompt: string) => {
    try {
      setIsGenerating(true);
      const structuredPrompt = await structurePrompt({ prompt });
      const encodedPrompt = encodeURIComponent(structuredPrompt!);
      const url=`https://image.pollinations.ai/prompt/${encodedPrompt}`
      
      const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text(); // Get error details if possible
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
    }
    const imageBlob = await response.blob();
    const imgUrl = URL.createObjectURL(imageBlob);

    setGeneratedLogo({
      id: "1",
      title: "AI Generated Logo",
      description: "A logo generated by AI based on your prompt.",
      category: "Technology",
      style: "Modern",
      colorScheme: ["#000000", "#FFFFFF", "#FF5733"],
      imageUrl: imgUrl,
      createdAt: new Date().toISOString(),
    });

    } catch (err) {
      console.error("Error generating logo:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="container px-4 pt-32 pb-16 mx-auto sm:px-6 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Generate Your Logo
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Describe your brand and let AI create the perfect logo for you.
        </p>

        <div className="grid grid-col-1 gap-10 mt-10 lg:grid-cols-2 max-w-7xl mx-auto h-auto" >
          <LogoForm
            handleGenerate={handleGenerate}
            isGenerating={isGenerating}
          />
          <GeneratedLogo logo={generatedLogo} isGenerating={isGenerating} />
        </div>
      </div>
    </div>
  );
}
