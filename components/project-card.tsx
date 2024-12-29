import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Github, Globe, Sparkle, Clock, CheckCircle, AlertCircle, Code, Database, Cloud, Server } from 'lucide-react'
import Link from 'next/link'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  status: "FEATURED" | "SUGGESTED" | "DRAFT" | "IN_PROGRESS" | string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
}

function StatusBadge({ status }: { status: ProjectCardProps['status'] }) {
  const baseClasses = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-orange-50 to-rose-50 text-orange-700 border border-orange-100/50 shadow-[0_0_8px_rgba(251,146,60,0.15)]"
  
  switch (status) {
    case 'SUGGESTED':
      return (
        <div className={baseClasses}>
          <Sparkle className="w-3.5 h-3.5" />
          {status}
        </div>
      )
    case 'DRAFT':
      return (
        <div className={baseClasses}>
          <AlertCircle className="w-3.5 h-3.5" />
          {status}
        </div>
      )
    case 'IN_PROGRESS':
      return (
        <div className={baseClasses}>
          <Clock className="w-3.5 h-3.5" />
          {status}
        </div>
      )
    case 'FEATURED':
      return (
        <div className={baseClasses}>
          <CheckCircle className="w-3.5 h-3.5" />
          {status}
        </div>
      )
    default:
      return null
  }
}

function TechnologyBadge({ name }: { name: string }) {
  const getIcon = (techName: string) => {
    switch (techName.toLowerCase()) {
      case 'react':
      case 'next.js':
        return <Code className="w-3.5 h-3.5" />;
      case 'node.js':
        return <Server className="w-3.5 h-3.5" />;
      case 'postgresql':
      case 'mongodb':
        return <Database className="w-3.5 h-3.5" />;
      case 'aws':
      case 'docker':
        return <Cloud className="w-3.5 h-3.5" />;
      default:
        return <Code className="w-3.5 h-3.5" />;
    }
  };

  return (
    <Badge 
      variant="secondary" 
      className="px-2.5 py-0.5 text-xs font-medium bg-gradient-to-r from-purple-50 to-indigo-50 text-indigo-700 border border-indigo-100/50 shadow-[0_0_8px_rgba(99,102,241,0.15)] flex items-center gap-1"
    >
      {getIcon(name)}
      {name}
    </Badge>
  );
}

export function ProjectCard({
  id,
  title,
  description,
  image,
  status,
  technologies,
  demoUrl,
  githubUrl
}: ProjectCardProps) {
  return (
    <Link href={`/project/${id}`} passHref>
      <div
        className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg bg-white cursor-pointer hover:bg-blue-50/30"
      >
        <div
          className="relative z-10 p-6 transform transition-transform duration-300 group-hover:scale-[1.01]"
        >
          <div className="space-y-4">
            <div className="relative w-full h-48 overflow-hidden rounded-lg shadow-md">
              <motion.img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <StatusBadge status={status} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600">{description}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <TechnologyBadge key={index} name={tech} />
              ))}
            </div>
            {(githubUrl || demoUrl) && (
              <div className="flex items-center justify-end gap-3 pt-4">
                {demoUrl && (
                  <a 
                    href={demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                )}
                {githubUrl && (
                  <a 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard;

