"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypeAnimationProps {
  phrases: string[]
  className?: string
  speed?: number
  pauseTime?: number
}

export function TypeAnimation({ phrases, className, speed = 100, pauseTime = 1500 }: TypeAnimationProps) {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typingSpeed = isDeleting ? speed / 2 : speed

    const timer = setTimeout(
      () => {
        const phrase = phrases[currentPhrase]

        if (!isDeleting) {
          // Typing
          setCurrentText(phrase.substring(0, currentText.length + 1))

          // If we've typed the full phrase
          if (currentText === phrase) {
            // Pause before deleting
            setTimeout(() => {
              setIsDeleting(true)
            }, pauseTime)
          }
        } else {
          // Deleting
          setCurrentText(phrase.substring(0, currentText.length - 1))

          // If we've deleted the full phrase
          if (currentText === "") {
            setIsDeleting(false)
            setCurrentPhrase((currentPhrase + 1) % phrases.length)
          }
        }
      },
      isDeleting ? typingSpeed / 2 : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [currentText, currentPhrase, isDeleting, phrases, speed, pauseTime])

  return (
    <motion.span className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {currentText}
      <span className="animate-blink">|</span>
    </motion.span>
  )
}
