import { MoreHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function WorkSection() {
  return (
    <div className="space-y-8 mt-6">
      <div className="border rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src="/placeholder.svg?height=200&width=300"
            alt="Internship Experience"
            className="w-full h-48 object-cover"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2"
          >
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-amber-50 text-amber-700">
                SUGGESTED
              </Badge>
              <Badge variant="secondary">DRAFT</Badge>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Internship Experience Showcase</h3>
          <p className="text-muted-foreground mb-4">
            Garry compiled key projects from his nearly two years of internship experience, 
            highlighting his growth and adaptability in software engineering roles.
          </p>
          <Badge variant="secondary">Software Engineer</Badge>
          <div className="flex items-center justify-end space-x-4 mt-4">
            <Button variant="outline">Add content</Button>
            <Button variant="ghost">Dismiss</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

