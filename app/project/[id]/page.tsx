'use client'

import { motion } from 'framer-motion'
import ProjectHeader from './components/ProjectHeader'
import ProjectContent from './components/ProjectContent'
import ProjectMedia from './components/ProjectMedia'
import ProjectSidebar from './components/ProjectSidebar'
import { Globe, Github } from 'lucide-react'
import { useEffect } from 'react'

// This would typically come from an API or database
const projectsData = {
  '1': {
    type: 'project',
    title: "E-commerce Platform Optimization",
    logo: "/images/monkey3.jpg?height=60&width=60",
    organization: "TechCorp Solutions",
    period: {
      start: "2023-06",
      end: "2023-12"
    },
    location: "Toronto, Canada",
    shortBio: "A comprehensive e-commerce platform optimization project focused on performance, user experience, and scalability.",
    description: "Led the development of a high-performance e-commerce platform, implementing advanced caching strategies and optimizing database queries, resulting in a 40% improvement in page load times and a 25% increase in conversion rates.",
    videoUrl: "/images/monkey.mp4",
    images: [
      {
        url: "/images/monkey1.png?height=600&width=800",
        caption: "Dashboard Overview"
      },
      {
        url: "/images/monkey2.webp?height=600&width=800",
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
        content: "This project involved a complete overhaul of an existing e-commerce platform to improve its performance and user experience. The primary focus was on implementing efficient caching strategies, optimizing database queries, and enhancing the overall architecture for better scalability."
      },
      {
        title: "Technical Challenges",
        content: "Key challenges included migrating a large existing codebase to Next.js without disrupting operations, implementing efficient caching strategies for high traffic loads, and optimizing complex database queries while maintaining data consistency."
      },
      {
        title: "Solutions & Implementation",
        content: "We developed a phased migration plan allowing for incremental improvements, utilized Redis for caching frequently accessed data, and implemented advanced database indexing and query optimization techniques. The new architecture was designed with scalability in mind, using microservices where appropriate."
      },
      {
        title: "Results & Impact",
        content: "The optimization efforts led to significant improvements: 40% faster page load times, 25% increase in conversion rates, and 50% reduction in server costs. The new architecture also provided better scalability for future growth."
      }
    ],
    degree: "Bachelor of Science",
    major: "Computer Science",
    gpa: "3.8/4.0",
    courses: ["Advanced Algorithms", "Distributed Systems", "Cloud Computing"],
    position: "Senior Software Engineer",
    achievements: [
      "Led a team of 5 developers in successful project delivery",
      "Reduced server costs by 50% through optimization",
      "Implemented new CI/CD pipeline reducing deployment time by 70%"
    ]
  },
  '2': {
    type: 'project',
    title: "Real-time Analytics Dashboard",
    logo: "/placeholder.svg?height=60&width=60",
    period: {
      start: "2024-07"
    },
    location: "Remote",
    shortBio: "Designed and implemented a real-time analytics dashboard processing millions of events daily, utilizing WebSocket connections and efficient data structures.",
    description: "Created a high-performance, real-time analytics dashboard capable of processing and visualizing millions of events per day. The system uses WebSocket connections for live updates and employs efficient data structures to maintain sub-second response times even under heavy load.",
    videoUrl: "/placeholder.mp4",
    images: [
      {
        url: "/placeholder.svg?height=600&width=800",
        caption: "Dashboard Overview"
      },
      {
        url: "/placeholder.svg?height=600&width=800",
        caption: "Real-time Data Visualization"
      }
    ],
    status: "IN PROGRESS",
    skills: {
      primary: ["Full Stack Developer", "Data Visualization Specialist"],
      technologies: ["React", "Node.js", "WebSocket", "MongoDB", "D3.js"],
      tools: ["Docker", "Kubernetes", "Grafana", "Prometheus"]
    },
    links: [
      {
        title: "Source Code",
        url: "https://github.com/yourusername/realtime-analytics",
        icon: Github
      }
    ],
    details: [
      {
        title: "Project Overview",
        content: "The Real-time Analytics Dashboard project aimed to create a robust, scalable system capable of ingesting, processing, and visualizing millions of events in real-time. The dashboard provides instant insights into user behavior, system performance, and business metrics."
      },
      {
        title: "Technical Challenges",
        content: "Key challenges included designing a system architecture that could handle high-volume data streams, implementing efficient data structures for quick aggregations and queries, and creating responsive visualizations that update in real-time without overwhelming the client's browser."
      },
      {
        title: "Solutions & Implementation",
        content: "We implemented a microservices architecture using Node.js for the backend, with MongoDB for data storage. WebSocket connections were used for real-time data transmission. The frontend was built with React and D3.js for dynamic, efficient visualizations. We employed Redis for caching and implemented a custom data aggregation layer to optimize query performance."
      },
      {
        title: "Results & Impact",
        content: "The dashboard successfully processes over 10 million events daily with sub-second response times. It has become a critical tool for real-time decision making, improving reaction times to system issues by 70% and increasing user engagement insights by 45%."
      }
    ],
    achievements: [
      "Designed a system architecture capable of processing 10+ million events daily",
      "Implemented real-time data visualization with sub-second update times",
      "Reduced system reaction time to critical issues by 70%"
    ]
  },
  '3': {
    type: 'project',
    title: "Machine Learning Research Project",
    logo: "/placeholder.svg?height=60&width=60",
    period: {
      start: "2024-01",
      end: "2024-06"
    },
    location: "University Research Lab",
    shortBio: "Developed a machine learning model for predictive analysis of student performance, achieving 85% accuracy.",
    description: "Conducted an in-depth research project focusing on the application of machine learning techniques to predict student academic performance. The project involved data collection, preprocessing, model development, and evaluation.",
    status: "COMPLETED",
    skills: {
      primary: ["Machine Learning Engineer", "Data Scientist"],
      technologies: ["Python", "scikit-learn", "TensorFlow", "Pandas", "NumPy"],
      tools: ["Jupyter Notebook", "Git", "Docker", "AWS SageMaker"]
    },
    links: [
      {
        title: "Research Paper",
        url: "https://example.com/research-paper",
        icon: Globe
      },
      {
        title: "Source Code",
        url: "https://github.com/yourusername/ml-student-performance",
        icon: Github
      }
    ],
    details: [
      {
        title: "Project Overview",
        content: "This research project aimed to develop a machine learning model capable of predicting student academic performance based on various factors such as study habits, socio-economic background, and previous academic records. The goal was to create a tool that could help educators identify at-risk students early and provide targeted support."
      },
      {
        title: "Data Collection and Preprocessing",
        content: "We collected data from multiple sources, including student surveys, academic records, and institutional databases. The data preprocessing phase involved handling missing values, feature engineering, and normalization to prepare the dataset for model training."
      },
      {
        title: "Model Development",
        content: "We experimented with various machine learning algorithms, including Random Forests, Gradient Boosting, and Neural Networks. After extensive testing and validation, we selected an ensemble model that combined the strengths of multiple algorithms, achieving the highest predictive accuracy."
      },
      {
        title: "Evaluation and Results",
        content: "The final model achieved an accuracy of 85% in predicting student performance, significantly outperforming traditional assessment methods. We used cross-validation techniques to ensure the model's robustness and generalizability across different student populations."
      },
      {
        title: "Ethical Considerations",
        content: "Throughout the project, we paid close attention to ethical considerations, ensuring data privacy and addressing potential biases in the model. We implemented fairness constraints and conducted thorough audits to minimize any unintended discriminatory effects."
      },
      {
        title: "Future Work",
        content: "Future directions for this research include incorporating real-time data to create a dynamic prediction system, exploring the use of explainable AI techniques to provide insights into the factors influencing predictions, and conducting longitudinal studies to assess the long-term impact of interventions based on the model's predictions."
      }
    ],
    achievements: [
      "• Developed a machine learning model with 85% accuracy in predicting student performance",
      "• Published research findings in a peer-reviewed journal",
      "• Presented the project at two international machine learning conferences",
      "• Implemented the model in a pilot program at the university, leading to a 20% increase in early interventions for at-risk students"
    ]
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

  return (
    <motion.div 
      className="min-h-screen"
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
              <ProjectHeader project={project} />
            </motion.div>
            {(project.videoUrl || project.images) && (
              <motion.div variants={itemVariants}>
                <ProjectMedia project={project} />
              </motion.div>
            )}
            <motion.div variants={itemVariants}>
              <ProjectContent project={project} />
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProjectSidebar project={project} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

