'use client'

import { useState } from 'react'
import { FileDown, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDownloading, setIsDownloading] = useState(false)
  const pathname = usePathname()
  const projectId = pathname.startsWith('/project/') ? pathname.split('/')[2] : null

  // Determine the accent class based on the project type
  let accentClass = ''
  if (projectId) {
    const projectType = {
      '1': 'accent-work',
      '2': 'accent-projects',
      '3': 'accent-school'
    }[projectId] || 'accent-work'
    accentClass = projectType
  }

  const handleResumeClick = () => {
    setIsDownloading(true)
    setTimeout(() => setIsDownloading(false), 2000) // Reset after 2 seconds
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm transition-colors duration-500">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg relative overflow-hidden transition-all duration-500 ${
              accentClass ? `bg-gradient-to-r ${
                accentClass === 'accent-work' ? 'from-purple-600 to-purple-400' :
                accentClass === 'accent-projects' ? 'from-green-600 to-green-400' :
                'from-amber-700 to-amber-500'
              }` : 'bg-gradient-to-r from-blue-600 to-blue-400'
            } group-hover:shadow-lg group-hover:scale-110 transform transition-all duration-300 ease-in-out`}>
              <div className="z-10">GS</div>
              <div className="absolute inset-0 animate-shimmer"></div>
              <div className="ripple-effect absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <Button
                variant="ghost"
                size="sm"
                className={`transition-all duration-200 ${
                  accentClass ? `${
                    accentClass === 'accent-work' ? 'text-purple-700 hover:text-purple-900' :
                    accentClass === 'accent-projects' ? 'text-green-700 hover:text-green-900' :
                    'text-amber-700 hover:text-amber-900'
                  }` : 'text-blue-700 hover:text-blue-900'
                } hover:bg-transparent focus:ring-0 focus:ring-offset-0`}
                onClick={handleResumeClick}
                asChild
              >
                <a href="/path-to-your-resume.pdf" download="GarrySivakumar_Resume.pdf" aria-label="Download Resume" className="p-2 flex items-center">
                  {isDownloading ? (
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                  ) : (
                    <FileDown className="h-5 w-5 mr-2" />
                  )}
                  <span>Resume</span>
                </a>
              </Button>
            </div>
            <div className="relative group">
              <div 
                className={`absolute -inset-0.5 rounded-full opacity-75 group-hover:opacity-100 transition duration-500 blur-sm ${
                  accentClass ? `bg-gradient-to-r ${
                    accentClass === 'accent-work' ? 'from-purple-600 to-purple-400' :
                    accentClass === 'accent-projects' ? 'from-green-600 to-green-400' :
                    'from-amber-700 to-amber-500'
                  }` : 'bg-gradient-to-r from-blue-600 to-blue-400'
                }`}
              ></div>
              <Button
                variant="outline"
                className={`relative rounded-full bg-white hover:bg-gray-50 transition-colors duration-200 border-2 ${
                  accentClass ? `${
                    accentClass === 'accent-work' ? 'text-purple-700 border-purple-300' :
                    accentClass === 'accent-projects' ? 'text-green-700 border-green-300' :
                    'text-amber-700 border-amber-300'
                  }` : 'text-blue-700 border-blue-300'
                }`}
                asChild
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Get in Touch
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-8 bg-white">
        {children}
      </main>
      <footer className="border-t py-8 bg-gray-50 border-gray-100">
        <div className="container mx-auto px-4 md:px-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Garry Sivakumar. All rights reserved.</p>
          <p className="mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </>
  )
}

