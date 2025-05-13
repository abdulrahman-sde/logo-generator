import HeroSection from "@/components/landing/hero"
import FeaturesSection from "@/components/landing/features"
import GeneratedLogosSection from "@/components/landing/generated-logos"
import FaqSection from "@/components/shared/faq"
import CtaSection from "@/components/landing/cta"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <GeneratedLogosSection />
        <FaqSection />
        <CtaSection />
      </main>
    </div>
  )
}
