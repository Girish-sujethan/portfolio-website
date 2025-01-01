import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Globe, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// This would typically come from an API or database
const projectsData = {
  '1': {
    title: "E-commerce Platform Optimization",
    description: "Led the development of a high-performance e-commerce platform, implementing advanced caching strategies and optimizing database queries, resulting in a 40% improvement in page load times and a 25% increase in conversion rates.",
    longDescription: "This project involved a complete overhaul of an existing e-commerce platform to improve its performance and user experience. We implemented a variety of optimization techniques, including:",
    image: "/placeholder.svg?height=400&width=600",
    status: "FEATURED",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project",
    challenges: [
      "Migrating a large existing codebase to Next.js without disrupting ongoing operations",
      "Implementing efficient caching strategies to handle high traffic loads",
      "Optimizing complex database queries to reduce response times"
    ],
    solutions: [
      "Developed a phased migration plan, allowing for incremental improvements",
      "Utilized Redis for caching frequently accessed data, reducing database load",
      "Implemented database indexing and query optimization techniques"
    ],
    results: [
      "40% improvement in page load times",
      "25% increase in conversion rates",
      "50% reduction in server costs due to improved efficiency"
    ]
  },
  // Add more projects as needed
}

export default function ProjectDetail() {
  const router = useRouter()
  const { id } = router.query

  // In a real application, you'd fetch this data from an API
  const project = projectsData[id as keyof typeof projectsData]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12">
        <Link href="/" passHref>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
        </Link>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-8"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="text-blue-700 bg-blue-100">
            {project.status}
          </Badge>
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        <p className="text-xl text-gray-700 mb-8">{project.description}</p>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Project Details</h2>
            <p className="text-gray-700">{project.longDescription}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Challenges</h2>
            <ul className="list-disc pl-5 space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="text-gray-700">{challenge}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Solutions</h2>
            <ul className="list-disc pl-5 space-y-2">
              {project.solutions.map((solution, index) => (
                <li key={index} className="text-gray-700">{solution}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Results</h2>
            <ul className="list-disc pl-5 space-y-2">
              {project.results.map((result, index) => (
                <li key={index} className="text-gray-700">{result}</li>
              ))}
            </ul>
          </section>
        </div>
        <div className="flex justify-center mt-12 space-x-4">
          {project.demoUrl && (
            <Button asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-4 w-4" /> View Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </Layout>
  )
}

