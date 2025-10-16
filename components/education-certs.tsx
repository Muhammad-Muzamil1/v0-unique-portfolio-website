"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, BookOpen } from "lucide-react"

export default function EducationCerts() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="education" ref={ref} className="relative min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/10 via-black to-cyan-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold mb-12 font-mono text-center"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-text text-transparent">
            CREDENTIALS
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-lg blur-xl" />
            <div className="relative border border-cyan-500/30 rounded-lg p-8 bg-black/50 backdrop-blur-md">
              <BookOpen className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4 font-mono text-cyan-400">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-mono text-white">Bachelor of Engineering (Software Engineering)</p>
                  <p className="text-gray-400 font-mono">
                    Quaid-e-Awam University of Engineering, Science & Technology
                  </p>
                  <p className="text-cyan-400 font-mono text-sm mt-2">2022 – 2026 | Nawabshah, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-lg blur-xl" />
            <div className="relative border border-cyan-500/30 rounded-lg p-8 bg-black/50 backdrop-blur-md">
              <Award className="text-violet-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4 font-mono text-violet-400">Certifications</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-mono text-white">Amazon Junior Software Developer</p>
                  <p className="text-gray-400 font-mono">Coursera</p>
                  <p className="text-violet-400 font-mono text-sm mt-2">
                    ✓ Java, Data Structures, Full-Stack Development, SQL, Generative AI
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
