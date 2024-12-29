import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ProjectSidebar({ project }: { project: any }) {
  return (
    <motion.div 
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="w-full lg:w-96 space-y-6 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]"
    >
      <div className="h-full flex flex-col space-y-6 transition-all duration-300">
        <Card className="backdrop-blur-sm bg-white/60 shadow-xl border border-purple-100">
          <CardContent className="p-4 sm:p-6 flex flex-col h-full overflow-y-auto">
            <div className="space-y-4 sm:space-y-6 flex-grow">
              {project.links && (
                <div className="space-y-2 sm:space-y-3">
                  {project.links.map((link: any, index: number) => (
                    <Button 
                      key={index}
                      className="w-full bg-white/80 text-purple-600 border border-purple-200 hover:bg-purple-50"
                      variant="outline"
                      asChild
                    >
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        {link.icon && <link.icon className="mr-2 h-4 w-4" />}
                        {link.title}
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  ))}
                </div>
              )}

              <Separator className="bg-purple-100" />

              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-semibold text-purple-800">Role</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.primary.map((skill: string, index: number) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <h3 className="font-semibold text-purple-800">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.technologies.map((tech: string, index: number) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="border-purple-200 text-purple-600 hover:bg-purple-50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <h3 className="font-semibold text-purple-800">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.tools.map((tool: string, index: number) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="border-purple-200 text-purple-600 hover:bg-purple-50 transition-colors"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="bg-purple-100" />

              <div>
                <h3 className="font-semibold text-purple-800 mb-2">Status</h3>
                <Badge 
                  variant="secondary" 
                  className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
                >
                  {project.status}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

