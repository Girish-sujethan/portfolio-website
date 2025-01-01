'use client'

import { motion } from 'framer-motion'
import ProjectHeader from './components/ProjectHeader'
import ProjectContent from './components/ProjectContent'
import ProjectMedia from './components/ProjectMedia'
import ProjectSidebar from './components/ProjectSidebar'
import { useEffect } from 'react'
import { Globe, Github } from 'lucide-react'

// Project data
const projectsData = {
  '1': {
    type: 'work',
    title: "E-commerce Platform Optimization",
    logo: "/placeholder.svg?height=60&width=60",
    organization: "TechCorp Solutions",
    period: {
      start: "2023-06",
      end: "2023-12"
    },
    location: "Toronto, Canada",
    shortBio: "A comprehensive e-commerce platform optimization project focused on performance, user experience, and scalability.",
    description: "Led the development of a high-performance e-commerce platform, implementing advanced caching strategies and optimizing database queries, resulting in a 40% improvement in page load times and a 25% increase in conversion rates.",
    videoUrl: "/placeholder.mp4",
    thumbnail: "/placeholder.svg?height=400&width=600",
    images: [
      {
        url: "/placeholder.svg?height=600&width=800",
        caption: "Dashboard Overview"
      },
      {
        url: "/placeholder.svg?height=600&width=800",
        caption: "Performance Metrics"
      }
    ],
    status: "FEATURED",
    skills: {
      primary: ["Full Stack Developer", "Technical Lead"],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS"],
      tools: ["Docker", "GitHub Actions", "Jest", "Cypress"]
    },
    links: [
      {
        title: "Live Demo",
        url: "https://demo.example.com",
        icon: Globe
      },
      {
        title: "Source Code",
        url: "https://github.com/yourusername/project",
        icon: Github
      }
    ],
    details: [
      {
        title: "Project Overview",
        content: "This project involved a complete overhaul of an existing e-commerce platform to improve its performance and user experience."
      },
      {
        title: "Technical Challenges",
        content: "Key challenges included migrating a large existing codebase to Next.js without disrupting operations."
      },
      {
        title: "Solutions & Implementation",
        content: "We developed a phased migration plan allowing for incremental improvements."
      }
    ],
    achievements: [
      "Led a team of 5 developers in successful project delivery",
      "Reduced server costs by 50% through optimization",
      "Implemented new CI/CD pipeline reducing deployment time by 70%"
    ]
  },
  '2': {
    type: 'projects',
    title: "Real-time Analytics Dashboard",
    logo: "/placeholder.svg?height=60&width=60",
    organization: "Personal Project",
    period: {
      start: "2024-01"
    },
    location: "Remote",
    shortBio: "A real-time analytics dashboard processing millions of events daily.",
    description: "Created a high-performance analytics dashboard using WebSocket connections.",
    videoUrl: "/placeholder.mp4",
    thumbnail: "/placeholder.svg?height=400&width=600",
    images: [
      {
        url: "/placeholder.svg?height=600&width=800",
        caption: "Dashboard Overview"
      }
    ],
    status: "IN_PROGRESS",
    skills: {
      primary: ["Frontend Developer", "Data Visualization"],
      technologies: ["React", "WebSocket", "D3.js"],
      tools: ["Vite", "Vitest"]
    },
    links: [
      {
        title: "Source Code",
        url: "https://github.com/yourusername/analytics",
        icon: Github
      }
    ],
    details: [
      {
        title: "Project Overview",
        content: "A real-time analytics dashboard for monitoring system metrics."
      }
    ],
    achievements: [
      "Processed 10M+ events daily",
      "Achieved sub-second response times"
    ]
  },
  '3': {
    type: 'school',
    title: "Machine Learning Research Project",
    logo: "/placeholder.svg?height=60&width=60",
    organization: "University Research Lab",
    period: {
      start: "2024-01",
      end: "2024-06"
    },
    location: "University Research Lab",
    shortBio: "Machine learning model for predictive analysis achieving 85% accuracy.",
    description: "Developed a machine learning model for academic performance prediction.",
    videoUrl: "/placeholder.mp4",
    thumbnail: "/placeholder.svg?height=400&width=600",
    images: [
      {
        url: "/placeholder.svg?height=600&width=800",
        caption: "Model Architecture"
      }
    ],
    status: "COMPLETED",
    skills: {
      primary: ["Machine Learning Engineer", "Researcher"],
      technologies: ["Python", "TensorFlow", "scikit-learn"],
      tools: ["Jupyter", "Git"]
    },
    links: [
      {
        title: "Research Paper",
        url: "https://example.com/paper",
        icon: Globe
      }
    ],
    details: [
      {
        title: "Research Overview",
        content: "Investigated machine learning applications in academic performance prediction."
      }
    ],
    achievements: [
      "Achieved 85% prediction accuracy",
      "Published in peer-reviewed journal"
    ]
  }
}

function getAccentClass(type: string) {
  switch (type) {
    case 'work':
      return 'accent-work';
    case 'projects':
      return 'accent-projects';
    case 'school':
      return 'accent-school';
    default:
      return 'accent-work';
  }
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const contentVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const { id } = params
  const project = projectsData[id as keyof typeof projectsData]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return <div>Content not found</div>
  }

  const accentClass = getAccentClass(project.type)

  return (
    <motion.div 
      className={`min-h-screen ${accentClass}`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 mt-4 bg-white border border-gray-200 rounded-lg shadow-lg backdrop-blur-sm"
        style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <motion.div 
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
          variants={contentVariants}
        >
          <motion.div className="flex-1 space-y-8 lg:space-y-12" variants={contentVariants}>
            <motion.div variants={itemVariants}>
              <ProjectHeader project={project} accentClass={accentClass} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ProjectMedia project={project} accentClass={accentClass} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ProjectContent project={project} accentClass={accentClass} />
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProjectSidebar project={project} accentClass={accentClass} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

