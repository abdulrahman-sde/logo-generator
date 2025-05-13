import Link from "next/link"
import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border rounded-lg animate-fade-in dark:border-gray-800">
      <div className="w-20 h-20 mb-6 text-gray-300 dark:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">No logos yet</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        You haven&apos;t created any logos yet. Start generating your first logo now.
      </p>
      <Button
        asChild
        className="mt-6 transition-transform duration-200 bg-gradient-to-r from-purple-600 to-teal-500 hover:scale-105"
      >
        <Link href="/generate">
          <PlusCircle className="w-4 h-4 mr-2" />
          Create Your First Logo
        </Link>
      </Button>
    </div>
  )
}
