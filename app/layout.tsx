'use client'

import { FileDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import type { Metadata } from 'next'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import "./globals.css"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isProjectPage, setIsProjectPage] = useState(false)

  useEffect(() => {
    setIsProjectPage(pathname.startsWith('/project/'))
  }, [pathname])

  return (
    <html lang="en">
      <body className={`min-h-screen text-gray-900 transition-colors duration-500 ${isProjectPage ? 'bg-purple-50' : 'bg-white'}`}>
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm transition-colors duration-500">
          <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="group">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg relative overflow-hidden transition-all duration-500 ${
                isProjectPage ? 'bg-gradient-to-r from-purple-600 to-purple-400' : 'bg-gradient-to-r from-blue-600 to-blue-400'
              }`}>
                <div className="z-10">GS</div>
                <div className="absolute inset-0 animate-shimmer"></div>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`hover:bg-blue-50 transition-colors duration-200 ${
                    isProjectPage ? 'text-purple-700 hover:bg-purple-50' : 'text-gray-700 hover:bg-blue-50'
                  }`}
                  asChild
                >
                  <a href="/path-to-your-resume.pdf" download="GarrySivakumar_Resume.pdf" aria-label="Download Resume" className="p-2">
                    <FileDown className="h-5 w-5 mr-2" />
                    <span>Resume</span>
                  </a>
                </Button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  Download my resume
                </div>
              </div>
              <div className="relative group">
                <div 
                  className={`absolute -inset-0.5 rounded-full opacity-75 group-hover:opacity-100 transition duration-500 blur-sm ${
                    isProjectPage ? 'bg-gradient-to-r from-purple-600 to-purple-400' : 'bg-gradient-to-r from-blue-600 to-blue-400'
                  }`}
                ></div>
                <Button
                  variant="ghost"
                  className={`relative rounded-full bg-white hover:bg-gray-50 transition-colors duration-200 ${
                    isProjectPage ? 'text-purple-900' : 'text-gray-900'
                  }`}
                >
                  <span className="relative z-10 flex items-center">
                    Get in Touch
                  </span>
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
      </body>
    </html>
  )
}

