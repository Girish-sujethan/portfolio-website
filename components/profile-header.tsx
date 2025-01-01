import { MapPin, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfileHeader() {
  return (
    <div className="grid md:grid-cols-[300px_1fr] gap-8 mb-8">
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute -top-2 right-0 z-10">
            <Badge variant="secondary" className="bg-purple-50 text-purple-700">
              INCOMPLETE
            </Badge>
          </div>
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Profile"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-amber-50 text-amber-700 px-2 py-1 text-sm">
              UNAVAILABLE
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Garry Sivakumar</h1>
          <Button className="w-full" size="lg">
            Get In Touch
          </Button>
          <div>
            <h3 className="text-sm font-medium mb-2">RATE</h3>
            <p className="text-sm text-muted-foreground">I'd prefer not to say</p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">SKILLS AND TOOLS</h3>
            <Badge variant="secondary" className="mr-2">
              Software Engineer
            </Badge>
            <Button variant="outline" size="sm" className="mt-2">
              <Plus className="h-4 w-4 mr-2" />
              Add more tags
            </Button>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">ABOUT</h3>
            <p className="text-sm text-muted-foreground">
              I'm Garry, a dedicated Software Engineer skilled in both backend and frontend
              development. With nearly 2 years of internship experience and graduating soon, I
              thrive in collaborative environments where the company mission and team success are
              priorities. Let's create innovative solutions that align with your goals!
            </p>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            Markham, Ontario, Canada
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <Button variant="outline" className="rounded-full">
            <span className="mr-2">✨</span>
            View AI suggestions
          </Button>
          <Button variant="ghost">No thanks</Button>
        </div>
        <h2 className="text-4xl font-bold mb-8">
          Team-Oriented Software Engineer for Hire
        </h2>
        <Tabs defaultValue="work" className="w-full">
          <TabsList className="border-b rounded-none w-full justify-start h-auto p-0">
            <TabsTrigger 
              value="work" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Work
            </TabsTrigger>
            <TabsTrigger 
              value="projects" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger 
              value="recommendations" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Recommendations
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}

