import { MapPin, Clock, Github, Mail, Linkedin, Code, Layout, Server, Webhook, Database, Cloud, GitBranch, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { SkillBadge } from "./skill-badge"
import { Card } from "@/components/ui/card"

const skills = [
  { name: "React", level: "advanced" },
  { name: "TypeScript", level: "advanced" },
  { name: "Node.js", level: "advanced" },
  { name: "Next.js", level: "advanced" },
  { name: "PostgreSQL", level: "intermediate" },
  { name: "AWS", level: "intermediate" },
  { name: "Docker", level: "intermediate" },
]

const expertise = [
  { name: "Full Stack Development", icon: Code },
  { name: "Frontend Architecture", icon: Layout },
  { name: "Backend Systems", icon: Server },
  { name: "API Development", icon: Webhook },
  { name: "Database Design", icon: Database },
  { name: "Cloud Infrastructure", icon: Cloud },
  { name: "DevOps & CI/CD", icon: GitBranch },
  { name: "Performance Optimization", icon: Zap },
]

export default function Sidebar() {
  return (
    <div className="w-full lg:w-[400px] p-8 space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 focus:outline-none" tabIndex={-1}>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-tilt"></div>
          <div className="absolute inset-[3px] bg-white rounded-2xl"></div>
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <img
              src="/placeholder.svg"
              alt="Profile"
              className="object-cover w-full h-full transition-all duration-300 hover:scale-105 hover:brightness-110"
            />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-2 text-center tracking-tight">
          <span className="text-black">
            Garry Sivakumar
          </span>
        </h2>
      </div>
      
      <div className="space-y-4">
        <p className="text-sm leading-relaxed text-gray-600">
          I'm a Full Stack Software Engineer specializing in React, Node.js, and cloud infrastructure. 
          With 2 years of hands-on experience, I'm passionate about clean code, performance optimization, 
          and creating exceptional user experiences.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-blue-700">Areas of Expertise</h3>
        <ul className="grid grid-cols-2 gap-3 text-sm text-gray-600">
          {expertise.map((item, index) => (
            <li key={index} className="flex items-center">
              <item.icon className="h-4 w-4 mr-2 text-blue-600" />
              {item.name}
            </li>
          ))}
        </ul>
      </Card>
    
      <div>
        <h3 className="text-lg font-semibold mb-4 text-blue-700">Skills and Tools</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} level={skill.level as any} />
          ))}
        </div>
      </div>
    
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-2 text-blue-600" />
          Markham, Ontario, Canada
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-2 text-blue-600" />
          <span>EST (Toronto) - {new Date().toLocaleTimeString('en-US', { timeZone: 'America/Toronto', hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    </div>
  )
}

