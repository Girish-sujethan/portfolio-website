import { MoreHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Mission-Driven Frontend Development",
    description: "Garry contributed to a frontend project that aligned with the company's mission, demonstrating his commitment to impactful work.",
    image: "/images/bs1.webp?height=200&width=300",
    status: "SUGGESTED",
    draft: true
  },
  {
    title: "Collaborative Backend System Revamp",
    description: "Garry led a team to revamp a backend system, enhancing performance and scalability through effective teamwork.",
    image: "/images/bs1.webp?height=200&width=300",
    status: "SUGGESTED",
    draft: true
  }
]

export default function ProjectsSection() {
  return (
    <div className="space-y-8 mt-6">
      {projects.map((project, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
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
                  {project.status}
                </Badge>
                {project.draft && (
                  <Badge variant="secondary">DRAFT</Badge>
                )}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <Badge variant="secondary">Software Engineer</Badge>
            <div className="flex items-center justify-end space-x-4 mt-4">
              <Button variant="outline">Add content</Button>
              <Button variant="ghost">Dismiss</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

