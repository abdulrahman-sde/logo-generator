
import Image from "next/image"
import { Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"

interface UserLogoCardProps {
  
    imageUrl:string,
    createdAt:Date
}

export default function UserLogoCard({ imageUrl,createdAt }: UserLogoCardProps) {
 
  const formatDate = (dateString: Date) => {
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
        <Card className="overflow-hidden transition-transform duration-300  dark:border-gray-800 animate-fade-in rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          <CardContent className="p-0">
            <DialogTrigger asChild>
              <div className="relative aspect-square bg-white dark:bg-gray-800 rounded-t-lg cursor-pointer">
                <Image src={imageUrl || "/placeholder.svg"} alt="logo" fill className="object-contain p-6" />
              </div>
            </DialogTrigger>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-b-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Created on {formatDate(createdAt)}</p>
                </div>
                
              </div>

              <div className="flex gap-2 mt-4">
                <a href={imageUrl} download={true} target="_blank">
                  <Button variant="outline" className="flex-1 transition-all duration-200">
                  <Download className="w-4 h-4 mr-2"  />
                  Download
                </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

     

      </Dialog>

     
    </>
  )
}
