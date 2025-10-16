"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Latif Voice Companion",
    description:
      "An AI-powered Android app that listens to user conversations, detects the dominant theme using Natural Language Processing (NLP), and recommends relevant poetic verses from Shah Abdul Latif Bhittai's Shah Jo Risalo in real-time.",
    tech: ["Android", "NLP", "AI", "Real-time Processing"],
    link: "https://v0-latif-voice-companionmain.vercel.app/",
  },
  {
    title: "Abu Hanan's Urban School Management System",
    description:
      "Created a multi-portal School Management System using Spring Boot, Thymeleaf, and MongoDB Atlas. Features JWT Authentication, Role-Based Authorization, and Redis Caching.",
    tech: ["Spring Boot", "MongoDB", "JWT", "Redis", "Thymeleaf"],
    link: "https://abuhananurbanschool.netlify.app/",
  },
  {
    title: "Latif Ji Boli — Sindhi Programming Language",
    description:
      "Designed a custom programming language using Java with Sindhi syntax. Built a compiler (Lexer, Tokenizer, Parser, Interpreter) from scratch. Integrated with Spring Boot REST APIs via Microservices Architecture.",
    tech: ["Java", "Spring Boot", "Compiler Design", "REST API"],
    link: "https://sindhiprogramminglanguage.netlify.app/",
  },
]

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  return (
    <section id="projects" className="w-full py-20 bg-black overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/10 via-black to-cyan-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 font-mono text-center"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-text text-transparent">
            SHOWCASE GALLERY
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 font-mono mb-16"
        >
          &gt; Featured projects showcasing technical expertise
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={item} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-xl blur-2xl group-hover:blur-3xl transition-all duration-300" />

              <div className="relative border border-cyan-500/30 rounded-xl p-8 bg-black/60 backdrop-blur-md hover:border-cyan-500/60 transition-all duration-300 overflow-hidden h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-3 font-mono text-cyan-400 relative z-10">{project.title}</h3>

                <p className="text-gray-300 mb-4 leading-relaxed relative z-10 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-sm text-cyan-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="relative z-10">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg text-white font-mono hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all hover:scale-105"
                  >
                    <ExternalLink size={16} /> View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
