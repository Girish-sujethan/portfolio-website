import type { Metadata } from 'next'
import Sidebar from "@/components/sidebar"
import MainContent from "@/components/main-content"

export const metadata: Metadata = {
  title: 'Garry Sivakumar - Portfolio',
  description: 'Full Stack Software Engineer specializing in React, Node.js, and cloud infrastructure.',
}

export function generateStaticParams() {
  // This should match your project IDs
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ]
}

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row lg:space-x-8">
      <Sidebar />
      <MainContent />
    </main>
  )
}
