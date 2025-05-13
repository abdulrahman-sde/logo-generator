
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  console.log("HeroSection");
  return (
    <section className="relative overflow-hidden  md:h-screen py-36 md:pt-52 lg:pt-56">
      {/* Mesh gradient background with enhanced animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 dark:from-purple-950/30 dark:via-blue-950/30 dark:to-teal-950/30" />

      {/* Animated gradient orbs with improved animations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-400/20 dark:bg-teal-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/6 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 right-1/6 w-32 h-32 bg-teal-500/10 rounded-full animate-pulse animation-delay-2000" />
      <div className="absolute -top-10 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-teal-500/5 rounded-full blur-2xl" />

      <div className="container relative px-4 mx-auto text-center ">
        <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-purple-600 transition-all duration-500 bg-purple-100 rounded-full dark:bg-purple-900/30 dark:text-purple-300 animate-fade-in">
          AI-Powered Logo Generation
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in animation-delay-500">
          <span className="block">Create stunning logos with</span>
          <span className="relative block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">
            AI-powered design
            <span className="">
              <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
            </span>
          </span>
        </h1>

        <p className="max-w-md mx-auto mt-6 text-lg text-gray-600 dark:text-gray-300 sm:max-w-xl sm:text-xl md:mt-8 ">
          Transform your ideas into professional logos in seconds. No design
          skills needed. Just describe your vision and let AI do the magic.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row animate-fade-in animation-delay-600">
          <Button
            asChild
            size="lg"
            className="px-8 py-6 text-lg transition-all duration-300 bg-gradient-to-r from-purple-600 to-teal-500 rounded-xl hover:shadow-xl hover:shadow-purple-500/20 hover:scale-[1.03] hover:-translate-y-1"
          >
            <Link href="/generate">
              <span>Start Creating</span>
              <Sparkles className="w-5 h-5 ml-2" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg transition-all duration-300 bg-white/5 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-800 rounded-xl hover:shadow-xl hover:shadow-purple-500/10 hover:scale-[1.03] hover:-translate-y-1 hover:border-purple-300 dark:hover:border-purple-700"
          >
            <Link href="/sign-up">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Floating badges - positioned carefully to not overlap text */}
        <div className="hidden md:block absolute left-[15%] top-0 px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-purple-600 to-purple-500 rounded-full shadow-lg animate-float">
          AI-Powered
        </div>
        <div className="hidden md:block absolute right-[15%] bottom-1/4 px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-teal-500 to-teal-400 rounded-full shadow-lg animate-float animation-delay-2000">
          Instant Results
        </div>
        {/* New badges */}
        <div className="hidden md:block absolute left-[10%] bottom-1/3 px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-blue-400 rounded-full shadow-lg animate-float animation-delay-1000">
          No Design Skills
        </div>
       
      </div>
    </section>
  );
}
