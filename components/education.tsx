"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, ExternalLink } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="w-full py-20 bg-black overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/10 via-black to-cyan-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-lg blur-xl" />
            <div className="relative border border-cyan-500/30 rounded-lg p-8 bg-black/50 backdrop-blur-md hover:border-cyan-500/60 transition-all">
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
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-lg blur-xl" />
            <div className="relative border border-cyan-500/30 rounded-lg p-8 bg-black/50 backdrop-blur-md hover:border-cyan-500/60 transition-all">
              <Award className="text-violet-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4 font-mono text-violet-400">Certifications</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-mono text-white">Amazon Junior Software Developer</p>
                  <p className="text-gray-400 font-mono">Coursera</p>
                  <p className="text-violet-400 font-mono text-sm mt-3">
                    ✓ Java, Data Structures, Full-Stack Development, SQL, Generative AI
                  </p>
                  <a
                    href="https://www.coursera.org/account/accomplishments/professional-cert/SDJBH0OP7SSP"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg text-white font-mono hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all text-sm"
                  >
                    <ExternalLink size={14} /> Verify Certificate
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
