import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, Play, Pause, SkipForward, SkipBack, Maximize, Minimize } from 'lucide-react'

export default function ProjectMedia({ project }: { project: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showThumbnail, setShowThumbnail] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => setCurrentTime(video.currentTime)
    const updateDuration = () => setDuration(video.duration)

    video.addEventListener('timeupdate', updateTime)
    video.addEventListener('loadedmetadata', updateDuration)

    return () => {
      video.removeEventListener('timeupdate', updateTime)
      video.removeEventListener('loadedmetadata', updateDuration)
    }
  }, [])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
        setShowThumbnail(false)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  const handleSeek = (value: number[]) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value[0]
      setCurrentTime(value[0])
    }
  }

  const skipTime = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds
    }
  }

  const toggleFullscreen = () => {
    if (!containerRef.current) return

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
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

  if (!project.videoUrl && (!project.images || project.images.length === 0)) {
    return null
  }

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="space-y-6 sm:space-y-8"
    >
      {project.videoUrl && (
        <div ref={containerRef} className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
          {showThumbnail && (
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${project.thumbnail || '/placeholder.svg?height=400&width=600'})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <Button
                  variant="secondary"
                  size="icon"
                  className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  onClick={toggleVideo}
                >
                  <Play className="h-8 w-8 text-white" />
                </Button>
              </div>
            </div>
          )}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={project.videoUrl}
            onClick={toggleVideo}
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-white">{formatTime(currentTime)} / {formatTime(duration)}</div>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={() => skipTime(-10)}
                >
                  <SkipBack className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={toggleVideo}
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={() => skipTime(10)}
                >
                  <SkipForward className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={toggleFullscreen}
                >
                  {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                </Button>
              </div>
            </div>
            <Slider
              value={[currentTime]}
              max={duration}
              step={0.1}
              onValueChange={handleSeek}
              className="w-full"
            />
          </div>
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

