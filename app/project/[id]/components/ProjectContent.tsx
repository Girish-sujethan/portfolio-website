import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface ProjectContentProps {
  project: any;
  accentClass: string;
}

export default function ProjectContent({ project, accentClass }: ProjectContentProps) {
  const getTextColor = () => {
    switch (accentClass) {
      case 'accent-work':
        return 'text-purple-900';
      case 'accent-projects':
        return 'text-green-900';
      case 'accent-school':
        return 'text-amber-900';
      default:
        return 'text-gray-900';
    }
  }

  const getHeadingColor = () => {
    switch (accentClass) {
      case 'accent-work':
        return 'text-purple-700';
      case 'accent-projects':
        return 'text-green-700';
      case 'accent-school':
        return 'text-amber-700';
      default:
        return 'text-gray-700';
    }
  }

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
    >
      <p className={`text-lg sm:text-xl lg:text-2xl leading-relaxed ${getTextColor()} font-medium mb-6 sm:mb-8`}>
        {project.shortBio}
      </p>
      
      <Separator className="my-8 sm:my-12" />

      {project.details.map((section: any, index: number) => (
        <motion.section 
          key={index} 
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <h2 className={`text-2xl sm:text-3xl font-semibold ${getHeadingColor()} mb-3 sm:mb-4`}>
            {section.title}
          </h2>
          <p className={`${getTextColor()} leading-relaxed`}>
            {section.content}
          </p>
        </motion.section>
      ))}

      {project.achievements && (
        <div className="space-y-6 sm:space-y-8">
          <h3 className={`text-xl sm:text-2xl font-semibold ${getHeadingColor()} mb-4 sm:mb-6`}>
            Key Achievements
          </h3>
          <ul className="space-y-3 sm:space-y-4">
            {project.achievements.map((achievement: string, index: number) => (
              <motion.li 
                key={index}
                className={`flex items-start ${getTextColor()}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="whitespace-pre-wrap">{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  )
}

