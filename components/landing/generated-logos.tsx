

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { sampleLogos } from "@/constants/constants"
import { BorderBeam } from "../magicui/border-beam"


export default function GeneratedLogosSection() {
  console.log("Generated Logos Section ")
  return (
    <>
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto sm:px-6">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              AI-Generated Logo Showcase
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Browse through some of the stunning logos created with our platform.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 ">
            {sampleLogos.map((logo) => (
              <Card key={logo.id}
                className="relative overflow-hidden border-0 rounded-xl "
              >
                <CardContent className="p-0 ">
                  <div className="relative aspect-square bg-white dark:bg-gray-800">
                    <Image
                      src={logo.imageUrl || "/placeholder.svg"}
                      alt={logo.title}
                      fill
                      className="object-contain p-6 "
                    />
                  </div>
                  <div className="p-4 pt-0">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{logo.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{logo.category}</p>
                  </div>
                </CardContent>

                <BorderBeam
                  duration={6}
                  size={400}
                  className="absolute from-transparent via-orange-500 to-transparent"
                />
                <BorderBeam
                  duration={6}
                  delay={3}
                  size={400}
                  className="absolute from-transparent via-blue-500 to-transparent"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
