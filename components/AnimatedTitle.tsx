'use client'

import React, { useState, useEffect } from 'react'

const phrases = [
  { text: "Full Stack Engineer", color: "text-blue-600" },
  { text: "Board Game Enthusiast 🎲", color: "text-green-600" },
  { text: "Book Worm 📚", color: "text-yellow-600" },
  { text: "Muay Thai Fighter 🥊", color: "text-red-600" },
  { text: "Software Engineer", color: "text-blue-600" },
]

const AnimatedTitle: React.FC = () => {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex]
      const fullText = currentPhrase.text

      // If we're on the last phrase and it's fully typed, don't delete it
      if (phraseIndex === phrases.length - 1 && text === fullText) {
        setIsFinished(true)
        return
      }

      if (!isDeleting && text === fullText) {
        // Start deleting after a pause
        timer = setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        // Move to next phrase
        setPhraseIndex((prevIndex) => {
          const nextIndex = prevIndex + 1
          return nextIndex < phrases.length ? nextIndex : prevIndex
        })
      } else {
        timer = setTimeout(() => {
          setText(prev => 
            isDeleting 
              ? prev.slice(0, -1) 
              : fullText.slice(0, prev.length + 1)
          )
        }, isDeleting ? 30 : 100)
      }
    }

    if (!isFinished) {
      handleTyping()
    }

    return () => clearTimeout(timer)
  }, [text, isDeleting, phraseIndex, isFinished])

  return (
    <h2 className={`text-2xl md:text-3xl font-bold tracking-tight ${phrases[phraseIndex].color} text-center`}>
      {text}
      {!isFinished && <span className="animate-blink text-blue-400">|</span>}
    </h2>
  )
}

export default AnimatedTitle

