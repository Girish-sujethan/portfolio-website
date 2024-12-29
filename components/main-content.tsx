'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCard } from "./project-card"
import AnimatedTitle from "./AnimatedTitle"
import AnimatedSearchBar from "./AnimatedSearchBar"

const projects = [
  {
    id: '1',
    title: "E-commerce Platform Optimization",
    description: "Led the development of a high-performance e-commerce platform, implementing advanced caching strategies and optimizing database queries, resulting in a 40% improvement in page load times and a 25% increase in conversion rates.",
    image: "/images/bs1.webp?height=200&width=300",
    status: "FEATURED",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project"
  },
  {
    id: '2',
    title: "Real-time Analytics Dashboard",
    description: "Designed and implemented a real-time analytics dashboard processing millions of events daily. Utilized WebSocket connections and efficient data structures to handle live updates while maintaining sub-second response times.",
    image: "/images/bs2.webp?height=200&width=300",
    status: "SUGGESTED",
    technologies: ["React", "Node.js", "WebSocket", "MongoDB", "Docker"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project"
  }
]

const schoolProjects = [
  {
    id: '3',
    title: "Machine Learning Research Project",
    description: "Developed a machine learning model for predictive analysis of student performance, achieving 85% accuracy. Implemented using Python and scikit-learn, with a web interface for easy data visualization.",
    image: "/images/bs1.webp?height=200&width=300",
    status: "IN_PROGRESS",
    technologies: ["Python", "scikit-learn", "Flask", "React", "D3.js"],
    githubUrl: "https://github.com/yourusername/project"
  }
]

const tabVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const cardVariants = {
  initial: { scale: 0.9, opacity: 0, y: 20 },
  enter: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1.000] } },
  exit: { scale: 0.9, opacity: 0, y: -20, transition: { duration: 0.3 } }
}

const containerVariants = {
  enter: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.05 } }
}

export default function MainContent() {
  const [activeTab, setActiveTab] = useState('work')
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0)
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0)
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([])

  const tabs = [
    { id: 'work', label: 'Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'school', label: 'School' }
  ]

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[tabs.findIndex(tab => tab.id === activeTab)]
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0)
      setTabUnderlineWidth((currentTab?.clientWidth ?? 0) - 2)
    }

    setTabPosition()
    window.addEventListener('resize', setTabPosition)

    return () => window.removeEventListener('resize', setTabPosition)
  }, [activeTab, tabs])

  return (
    <div className="flex-1 space-y-12 max-w-3xl mx-auto">
      <div className="text-center">
        <AnimatedSearchBar>
          <AnimatedTitle />
        </AnimatedSearchBar>
      </div>

      <div className="w-full">
        <nav className="flex justify-center mb-8 relative">
          <div className="inline-flex p-1.5 rounded-full border border-gray-200 bg-gray-100 relative">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={el => (tabsRef.current[index] = el)}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 mx-0.5 text-sm font-medium rounded-full transition-all duration-300 relative z-10 ${
                  activeTab === tab.id
                    ? 'text-blue-700'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <motion.div
              className="absolute bottom-1.5 left-0.5 h-[calc(100%-12px)] bg-white rounded-full shadow-sm z-0"
              animate={{ width: tabUnderlineWidth - 4, x: tabUnderlineLeft }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={tabVariants}
          >
            {activeTab === 'work' && (
              <motion.div className="space-y-8" variants={containerVariants}>
                {projects.map((project, index) => (
                  <motion.div key={project.id} variants={cardVariants}>
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </motion.div>
            )}
            {activeTab === 'projects' && (
              <motion.div className="space-y-8" variants={containerVariants}>
                {projects.slice(0, 1).map((project, index) => (
                  <motion.div key={project.id} variants={cardVariants}>
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </motion.div>
            )}
            {activeTab === 'school' && (
              <motion.div className="space-y-8" variants={containerVariants}>
                {schoolProjects.map((project, index) => (
                  <motion.div key={project.id} variants={cardVariants}>
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

