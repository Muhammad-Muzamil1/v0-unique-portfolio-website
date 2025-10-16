"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-black overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/10 via-black to-cyan-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 font-mono text-center"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-text text-transparent">MY STORY</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 leading-relaxed font-mono space-y-6"
          >
            <p>
              I'm a passionate Backend Java Developer with a love for building scalable, high-performance applications.
              My journey in software development is driven by curiosity and a desire to solve complex problems.
            </p>
            <p>
              I specialize in Java technologies, API development, and database management, with a solid understanding of
              frontend technologies. My approach combines technical expertise with creative problem-solving to deliver
              robust solutions.
            </p>
            <p>
              Beyond coding, I'm constantly exploring new technologies and methodologies to stay at the forefront of the
              ever-evolving tech landscape. I believe in writing clean, maintainable code that not only works
              efficiently but is also easy for others to understand and build upon.
            </p>
            <p>
              My goal is to create software that makes a meaningful impact, whether it's streamlining business
              processes, enhancing user experiences, or solving complex technical challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="relative w-full aspect-square rounded-2xl border-2 border-cyan-500/30 overflow-hidden"
              animate={{
                boxShadow: [
                  "0 0 30px rgba(34, 211, 238, 0.2)",
                  "0 0 60px rgba(139, 92, 246, 0.4)",
                  "0 0 30px rgba(34, 211, 238, 0.2)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 backdrop-blur-md" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl text-cyan-400/30">&lt;/&gt;</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
