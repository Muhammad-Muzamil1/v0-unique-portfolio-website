"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative border-t border-cyan-500/30 bg-black/50 backdrop-blur-md py-12 mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-400 font-mono">
          <p>&copy; {currentYear} Muhammad Muzamil</p>
        </div>
      </div>
    </motion.footer>
  )
}
