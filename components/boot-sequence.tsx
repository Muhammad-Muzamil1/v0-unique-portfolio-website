"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function BootSequence() {
  const [displayText, setDisplayText] = useState("")
  const fullText =
    "Initializing neural interface...\nConnecting to Muhammad Muzamil's development core...\nAccess granted. Welcome to the 2060 Developer Terminal."

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="w-full max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-lg text-cyan-400 whitespace-pre-wrap"
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            className="ml-1"
          >
            █
          </motion.span>
        </motion.div>

        {displayText.includes("Welcome") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <div className="w-32 h-32 border-4 border-violet-500 rounded-lg animate-spin"></div>
          </motion.div>
        )}
      </div>

      {/* Background holographic effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/20 via-black to-cyan-600/20 pointer-events-none" />
    </div>
  )
}
