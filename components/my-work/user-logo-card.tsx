"use client"

import { useState } from "react"
import Image from "next/image"
import { Download, Trash2, MoreHorizontal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import type { Logo } from "@/lib/types"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface UserLogoCardProps {
  logo: Logo
}

export default function UserLogoCard({ logo }: UserLogoCardProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <>
      <Dialog>
        <Card className="overflow-hidden transition-transform duration-300 hover:shadow-2xl dark:border-gray-800 animate-fade-in rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          <CardContent className="p-0">
            <DialogTrigger asChild>
              <div className="relative aspect-square bg-white dark:bg-gray-800 rounded-t-lg cursor-pointer">
                <Image src={logo.imageUrl || "/placeholder.svg"} alt={logo.title} fill className="object-contain p-6" />
              </div>
            </DialogTrigger>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-b-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{logo.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Created on {formatDate(logo.createdAt)}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <MoreHorizontal className="w-5 h-5" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      className="flex items-center text-red-600 focus:text-red-600 cursor-pointer"
                      onClick={() => setIsDeleteDialogOpen(true)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex gap-2 mt-4">
                <Button variant="outline" className="flex-1 transition-all duration-200">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dialog content */}
        <DialogContent className="w-full max-w-3xl h-auto max-h-[80vh] overflow-y-auto rounded-xl">
          <DialogHeader>
            <DialogTitle>{logo.title}</DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              {logo.category}
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="p-2 pt-0">
              <p className="text-lg font-bold">Description</p>
              <p className="ms-1">{logo.description}</p>

              <p className="text-lg font-bold mt-4 pb-2">Style</p>
              <span className="ms-1 border px-2 py-1 rounded-xl text-sm">{logo.style}</span>

              <p className="text-lg font-bold mt-4">Color</p>
              <div className="flex flex-wrap gap-2 my-2">
                {logo.colorScheme?.map((color, i) => (
                  <span key={i} className="border px-2 py-1 rounded-xl text-sm"
                    style={{
                      backgroundColor: color,
                      borderColor: color === "#ffffff" ? "#e5e7eb" : color,
                      color: color === "#000000" ? "#ffffff" : "#000000",
                    }}>
                    {color}
                  </span>

                ))}
              </div>
              <a
                href={logo.imageUrl || "/placeholder.svg"}
                download={`${logo.title.replace(/\s+/g, "_").toLowerCase()}.png`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-4 py-0" variant="outline">
                  Download
                </Button>
              </a>

            </div>

            <div className="px-4 flex align-center justify-center">
              <div className="border border-grey-300 rounded-xl p-2 bg-white dark:bg-gray-800">
                <Image
                  src={logo.imageUrl || "/placeholder.svg"}
                  alt={logo.title}
                  width={280}
                  height={280}
                  className="object-contain rounded-md"
                />
              </div>
            </div>
          </div>

        </DialogContent>

      </Dialog>

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this logo. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button className="bg-red-600 hover:bg-red-700" onClick={() => setIsDeleteDialogOpen(false)}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
