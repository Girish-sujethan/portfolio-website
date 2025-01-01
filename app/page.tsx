import Sidebar from "@/components/sidebar"
import MainContent from "@/components/main-content"

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row lg:space-x-8">
      <Sidebar />
      <MainContent />
    </main>
  )
}

