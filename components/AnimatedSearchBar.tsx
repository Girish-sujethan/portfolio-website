'use client'

import React from 'react'
import { Search } from 'lucide-react'

interface AnimatedSearchBarProps {
  children: React.ReactNode
}

const AnimatedSearchBar: React.FC<AnimatedSearchBarProps> = ({ children }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto mt-8">
      <div className="relative">
        <div
          className="w-full py-3 px-12 bg-white bg-opacity-20 backdrop-blur-md rounded-full border border-gray-300 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200 focus-within:ring-opacity-50 shadow-lg text-gray-900 transition-all duration-300 ease-in-out"
        >
          {children}
        </div>
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
      </div>
    </div>
  )
}

export default AnimatedSearchBar

