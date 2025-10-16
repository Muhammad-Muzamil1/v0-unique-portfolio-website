"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center pt-20 bg-black overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/5 via-black to-cyan-600/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-8 lg:gap-12 items-center py-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 font-mono leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-violet-600 bg-clip-text text-transparent block">
              MUHAMMAD
            </span>
            <span className="bg-gradient-to-r from-violet-600 via-cyan-400 to-blue-500 bg-clip-text text-transparent block">
              MUZAMIL
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-2 sm:mb-3 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Java Backend Developer | Spring Boot Specialist
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-cyan-400/80 mb-6 sm:mb-8 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            &gt; Building the backend of tomorrow — one microservice at a time.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white rounded-lg font-mono text-sm sm:text-base hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                Explore Projects <ArrowRight size={18} />
              </span>
            </a>
            <a
              href="#contact"
              className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg font-mono text-sm sm:text-base hover:bg-cyan-500/10 transition-all hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="flex gap-4 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="https://github.com/Muhammad-Muzamil1"
              target="_blank"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-muzamil-b69b5b299"
              target="_blank"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:muhammadmuzamilumrani@gmail.com"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:03147419170"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full aspect-square max-w-md mx-auto"
        >
          <motion.div
            className="relative w-full h-full rounded-2xl border-2 border-cyan-500/50 overflow-hidden"
            animate={{
              boxShadow: [
                "0 0 20px rgba(34, 211, 238, 0.3)",
                "0 0 40px rgba(139, 92, 246, 0.5)",
                "0 0 20px rgba(34, 211, 238, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 backdrop-blur-xl" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1738660079146-fem3Nz5T2sDtFIzwX3y3XqwkizR7Hc.jpg"
              alt="Muhammad Muzamil - Java Backend Developer"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent"
              animate={{ y: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.div>

          <motion.div
            className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-violet-600/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </div>
    </section>
  )
}
