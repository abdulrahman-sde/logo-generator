import Link from "next/link"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  console.log("CTA Section ")
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-teal-500">
      <div className="container px-4 mx-auto text-center sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to create your perfect logo?
          </h2>
          <p className="mt-6 text-xl text-purple-100">
            Join thousands of businesses who have created stunning logos in minutes.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="default"
              className="w-full bg-white text-purple-600 hover:bg-gray-100 sm:w-auto transition-transform duration-200 hover:scale-105"
            >
              <Link href="/generate">
                Start Creating
                <Sparkles className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-white text-black hover:bg-white/10 sm:w-auto transition-transform duration-200 hover:scale-105"
            >
              <Link href="/explore">Explore Examples</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
