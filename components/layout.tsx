import { FileDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="z-10">GS</div>
              <div className="absolute inset-0 animate-shimmer"></div>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur-sm"></div>
              <Button
                variant="ghost"
                className="relative rounded-full bg-white text-gray-900 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                <span className="relative z-10 flex items-center">
                  Get in Touch
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {children}
        </div>
      </main>
      <footer className="bg-gray-50 border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 md:px-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Girish Sujethan. All rights reserved.</p>
          <p className="mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}

