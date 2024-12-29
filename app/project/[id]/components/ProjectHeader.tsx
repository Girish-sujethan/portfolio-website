import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useToast } from "@/hooks/use-toast"


export default function ProjectHeader({ project }: { project: any }) {
  const { toast } = useToast()
  const [isCopied, setIsCopied] = useState(false)

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setIsCopied(true)
        toast({
          title: "URL copied to clipboard",
          description: "You can now share this project with others!",
        })
        setTimeout(() => setIsCopied(false), 2000)
      })
      .catch((err) => {
        console.error('Failed to copy URL: ', err)
        toast({
          title: "Failed to copy URL",
          description: "Please try again or copy the URL manually.",
          variant: "destructive",
        })
      })
  }

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 sm:space-y-6"
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="inline-flex">
          <Button variant="ghost" size="sm" className="hover:bg-purple-50 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
        <Button 
          variant="ghost" 
          size="sm" 
          className="hover:bg-purple-50 transition-colors"
          onClick={handleShare}
        >
          <Share2 className="mr-2 h-4 w-4" />
          {isCopied ? "Copied!" : "Share"}
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg flex-shrink-0"
        >
          <img 
            src={project.logo} 
            alt={`${project.organization} logo`}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-400">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-600">
            {project.period.start && (
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                <time>{project.period.start}</time>
              </div>
            )}
            {project.period.end && (
              <>
                <span className="mx-2">—</span>
                <time>{project.period.end}</time>
              </>
            )}
            <span className="hidden sm:inline">•</span>
            <span>{project.location}</span>
          </div>
          <div className="text-xl sm:text-2xl font-medium text-purple-800">
            {project.organization}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

