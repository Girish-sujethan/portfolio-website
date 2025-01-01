import { Metadata } from 'next'
import ProjectDetail from './ProjectDetails'

export const dynamicParams = false;
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ]
}

export const metadata: Metadata = {
  title: 'Project Details',
  description: 'View project details and information',
}

export default function Page({ params }: { params: { id: string } }) {
  return <ProjectDetail params={params} />
}
