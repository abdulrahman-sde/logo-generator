"use client"

import { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { formSchema } from "@/lib/zodSchema"
import { categories, colors, styles } from "@/constants/constants"

interface LogoFormProps {
  handleGenerate: (prompt: string) => void
  isGenerating: boolean
}

export default function LogoForm({ handleGenerate, isGenerating }: LogoFormProps) {
  const [selectedColors, setSelectedColors] = useState<string[]>(["blue", "purple"])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "business",
      style: "minimalist",
      colorScheme: selectedColors,
    },
  })

  // Update form when selectedColors changes
  useEffect(() => {
    form.setValue("colorScheme", selectedColors)
  }, [selectedColors, form])

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Construct the prompt string
    const prompt = `
      Create a logo with the following details:
      - Title: ${values.title}
      - Description: ${values.description}
      - Category: ${values.category}
      - Style: ${values.style}
      - Colors: ${values.colorScheme.join(", ")}
    `
    console.log("Generated Prompt:", prompt)
    handleGenerate(prompt.trim())
  }

  const toggleColor = (colorId: string) => {
    setSelectedColors((prev) => {
      if (prev.includes(colorId)) {
        return prev.filter((id) => id !== colorId)
      } else {
        return [...prev, colorId]
      }
    })
  }

  return (
    <div className="p-8 bg-white rounded-xl shadow-sm dark:bg-gray-900 animate-fade-in">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">Logo Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="E.g., TechFlow, NatureLife, etc."
                    {...field}
                    className="transition-all focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your logo: colors, style, symbols, mood, etc."
                    {...field}
                    className="min-h-[120px] transition-all focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="transition-all focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-base font-medium">Style Preference</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-2 overflow-x-auto hide-scrollbar"
                  >
                    {styles.map((style) => (
                      <div key={style.value} className="flex items-center ocer">
                        <RadioGroupItem value={style.value} id={style.value} className="peer sr-only" />
                        <Label
                          htmlFor={style.value}
                          className="flex px-4 py-2 border rounded-md cursor-pointer peer-data-[state=checked]:bg-purple-100 peer-data-[state=checked]:border-purple-500 dark:peer-data-[state=checked]:bg-purple-900/30 dark:peer-data-[state=checked]:border-purple-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          {style.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-3">
            <FormLabel className="text-base font-medium">Color Palette</FormLabel>
            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.id}
                  type="button"
                  onClick={() => toggleColor(color.id)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    selectedColors.includes(color.id) ? "ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-600" : ""
                  }`}
                  style={{ backgroundColor: color.color }}
                  aria-label={color.label}
                >
                  {selectedColors.includes(color.id) && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </button>
              ))}
            </div>
            {selectedColors.length === 0 && <p className="text-sm text-red-500">Please select at least one color.</p>}
          </div>

          <Button
            type="submit"
            disabled={isGenerating || selectedColors.length === 0}
            className="w-full py-6 text-lg font-medium transition-all duration-200 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:from-blue-600 hover:to-purple-600"
          >
            {isGenerating ? (
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Generating...
              </span>
            ) : (
              <span className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Logo
              </span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
