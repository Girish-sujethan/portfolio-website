import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Pause } from 'lucide-react'

export default function ProjectMedia({ project }: { project: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoError, setVideoError] = useState(false)

  if (!project.videoUrl && (!project.images || project.images.length === 0)) {
    return null;
  }

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === (project.images.length - 1) ? 0 : prev + 1
    )
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="space-y-6 sm:space-y-8"
    >
      {project.videoUrl && (
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={project.videoUrl}
            onError={() => setVideoError(true)}
          >
            Your browser does not support the video tag.
          </video>
          {videoError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
              <p>Video unavailable</p>
            </div>
          ) : (
            <Button
              variant="secondary"
              size="icon"
              className="absolute bottom-4 right-4 rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-gray-100/80 hover:bg-gray-200/80 transition-colors shadow-lg"
              onClick={toggleVideo}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
              ) : (
                <Play className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
              )}
            </Button>
          )}
        </div>
      )}

      {project.images && project.images.length > 0 && (
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
          <motion.img
            key={currentImageIndex}
            src={project.images[currentImageIndex].url}
            alt={project.images[currentImageIndex].caption}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-gray-100/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-xs sm:text-sm text-gray-800 shadow-lg">
              {project.images[currentImageIndex].caption}
            </div>
          </div>
          {project.images.length > 1 && (
            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 sm:left-4 sm:right-4 flex justify-between">
              <Button
                variant="secondary"
                size="icon"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100/80 hover:bg-gray-200/80 transition-colors shadow-lg"
                onClick={previousImage}
              >
                <ArrowLeft className="h-4 w-4 text-gray-600" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100/80 hover:bg-gray-200/80 transition-colors shadow-lg"
                onClick={nextImage}
              >
                <ArrowLeft className="h-4 w-4 rotate-180 text-gray-600" />
              </Button>
            </div>
          )}
        </div>
      )}
    </motion.div>
  )
}

