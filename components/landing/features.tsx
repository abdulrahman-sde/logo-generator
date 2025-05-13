import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { features } from "@/constants/constants"


 


export default function FeaturesSection() {
  console.log("FeaturesSection")
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 mx-auto sm:px-6">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Powerful Features for Perfect Logos
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Our AI-powered platform makes logo creation simple, fast, and professional.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1 "
            >
              <CardHeader className="pb-2">
                <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-50 to-teal-50 shadow-sm">
                      <feature.icon className="text-teal-500 h-5 w-5"  />
                    </div>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
