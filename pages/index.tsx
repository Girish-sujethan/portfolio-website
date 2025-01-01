import Layout from "./layout"
import Sidebar from "./components/sidebar"
import MainContent from "./components/main-content"

export default function Page() {
  return (
    <Layout>
      <Sidebar />
      <MainContent />
    </Layout>
  )
}

