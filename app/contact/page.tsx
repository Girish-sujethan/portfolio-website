'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server or a service like Formspree
    console.log('Form submitted:', { name, email, message })
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Get in Touch</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <p className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-blue-600" />
              garry.sivakumar@example.com
            </p>
            <p className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-blue-600" />
              +1 (123) 456-7890
            </p>
            <p className="flex items-center">
              <Linkedin className="mr-2 h-5 w-5 text-blue-600" />
              <a href="https://linkedin.com/in/garrysivakumar" target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/garrysivakumar
              </a>
            </p>
            <p className="flex items-center">
              <Github className="mr-2 h-5 w-5 text-blue-600" />
              <a href="https://github.com/garrysivakumar" target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/garrysivakumar
              </a>
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-600">
              I'm a passionate Full Stack Developer with expertise in React, Node.js, and cloud technologies. 
              I'm always excited to take on new challenges and contribute to innovative projects. 
              Feel free to reach out for job opportunities, collaborations, or just to say hi!
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Your message here..."
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

