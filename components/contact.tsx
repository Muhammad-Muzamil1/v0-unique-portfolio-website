"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const contacts = [
    {
      icon: Mail,
      text: "muhammadmuzamilumrani@gmail.com",
      href: "mailto:muhammadmuzamilumrani@gmail.com",
      label: "Email",
    },
    { icon: Phone, text: "03147419170", href: "tel:03147419170", label: "Phone" },
    {
      icon: Linkedin,
      text: "linkedin.com/in/muhammad-muzamil",
      href: "https://linkedin.com/in/muhammad-muzamil-b69b5b299",
      label: "LinkedIn",
    },
    {
      icon: Github,
      text: "github.com/Muhammad-Muzamil1",
      href: "https://github.com/Muhammad-Muzamil1",
      label: "GitHub",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="w-full py-20 bg-black overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 via-black to-violet-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 font-mono text-center"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-text text-transparent">
            INITIATE CONTACT
          </span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {contacts.map((contact, idx) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                variants={item}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative border border-cyan-500/30 rounded-lg p-8 bg-black/50 backdrop-blur-md hover:border-cyan-500/60 transition-all duration-300 cursor-pointer">
                  <Icon className="text-cyan-400 mb-4" size={32} />
                  <p className="text-gray-400 font-mono text-sm mb-2">{contact.label}</p>
                  <p className="text-white font-mono font-bold break-all hover:text-cyan-400 transition-colors duration-300">
                    {contact.text}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-cyan-400/60 font-mono"
        >
          <p>&gt; The future isn't written — it's compiled.</p>
        </motion.div>
      </div>
    </section>
  )
}
