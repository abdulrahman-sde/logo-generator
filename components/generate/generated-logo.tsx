"use client"

import { useState } from "react"
import Image from "next/image"
import { Download, Save, RefreshCw, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Logo } from "@/lib/types"

interface GeneratedLogoProps {
  logo: Logo | null
  isGenerating: boolean
}

export default function GeneratedLogo({ logo, isGenerating }: GeneratedLogoProps) {
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      // Show success message or redirect
    }, 1000)
  }

  const handleDownload = () => {
    // In a real app, this would trigger a download of the logo file
    if (logo?.imageUrl) {
      const link = document.createElement("a")
      link.href = logo.imageUrl
      link.download = `${logo.title || "logo"}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  if (isGenerating) {
    return (
      <Card className="overflow-hidden border-0 shadow-md animate-fade-in dark:bg-gray-900">
        <CardContent className="p-0">
          <div className="flex items-center justify-center aspect-square bg-white dark:bg-gray-800">
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <RefreshCw className="w-10 h-10 mb-4 animate-spin text-purple-500" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Generating your logo...</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Our AI is crafting the perfect logo based on your description.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!logo) {
    return (
      <Card className="overflow-hidden border-0 shadow-md animate-fade-in dark:bg-gray-900">
        <CardContent className="p-0">
          <div className="flex items-center justify-center aspect-square bg-white dark:bg-gray-800">
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <div className="w-24 h-24 mb-4 text-gray-300 dark:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Your logo will appear here</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Fill out the form and click Generate Logo to create your custom logo.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden border-0 shadow-md animate-fade-in dark:bg-gray-900">
      <CardContent className="p-0">
        <div className="relative aspect-square bg-white dark:bg-gray-800 group">
          <Image
            src={logo.imageUrl || "/placeholder.svg"}
            alt={logo.title}
            fill
            className="object-contain p-6 transition-all duration-300 group-hover:blur-sm"
          />

          {/* Hover Overlay with Actions */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button
              size="icon"
              variant="secondary"
              className="w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
            >
              <Eye className="w-5 h-5 text-blue-500" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              onClick={handleDownload}
              className="w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
            >
              <Download className="w-5 h-5 text-purple-500" />
            </Button>
          </div>
        </div>

        <div className="p-4 border-t dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{logo.title}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {logo.category} • {logo.style}
          </p>

          <div className="flex gap-3 mt-4">
            <Button
              onClick={handleSave}
              disabled={isSaving}
              variant="default"
              className="flex-1 transition-all duration-200 bg-purple-600 hover:bg-purple-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Save to My Work
            </Button>
            <Button onClick={handleDownload} variant="outline" className="flex-1 transition-all duration-200">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
