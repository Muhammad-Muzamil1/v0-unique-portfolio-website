"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Latif Ji Boli — Sindhi Programming Language",
    description:
      "Designed a custom programming language using Java with Sindhi syntax. Built a compiler (Lexer, Tokenizer, Parser, Interpreter) from scratch. Integrated with Spring Boot REST APIs via Microservices Architecture. Developed a real-time IDE for executing Sindhi code online.",
    tech: ["Java", "Spring Boot", "Compiler Design", "REST API"],
    link: "https://sindhiprogramminglanguage.netlify.app/",
    github: "https://github.com/MuhammadMuzamil-Engineer",
  },
  {
    title: "Abu Hanan's Urban School Management System",
    description:
      "Created a multi-portal School Management System using Spring Boot, Thymeleaf, and MongoDB Atlas. Features JWT Authentication, Role-Based Authorization, and Redis Caching. Implemented Global Exception Handling, Jakarta Validation, and YAML Configuration.",
    tech: ["Spring Boot", "MongoDB", "JWT", "Redis", "Thymeleaf"],
    link: "https://abuhananurbanschool.netlify.app/",
    github: "https://github.com/MuhammadMuzamil-Engineer",
  },
  {
    title: "University Entry Test System",
    description:
      "Developed with JavaFX, Swing, and MySQL. Includes test scheduling, question management, and automated result evaluation. A comprehensive desktop application for streamlined exam management.",
    tech: ["JavaFX", "Swing", "MySQL", "JDBC"],
    link: "#",
    github: "https://github.com/MuhammadMuzamil-Engineer",
  },
]

export default function ProjectsGallery() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="projects" ref={ref} className="relative min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/10 via-black to-cyan-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold mb-4 font-mono text-center"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-text text-transparent">
            SHOWCASE GALLERY
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center text-gray-400 font-mono mb-12"
        >
          &gt; Holographic project cards with animated transitions
        </motion.p>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-xl blur-2xl group-hover:blur-3xl transition-all" />

              <div className="relative border border-cyan-500/30 rounded-xl p-8 bg-black/60 backdrop-blur-md hover:border-cyan-500/60 transition-all overflow-hidden">
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-r from-cyan-500/0 via-violet-500/50 to-cyan-500/0 pointer-events-none"
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                <h3 className="text-2xl font-bold mb-3 font-mono text-cyan-400 relative z-10">{project.title}</h3>

                <p className="text-gray-300 mb-4 leading-relaxed relative z-10">{project.description}</p>

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

                <div className="flex gap-4 relative z-10">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg text-white font-mono hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all"
                    rel="noreferrer"
                  >
                    <ExternalLink size={16} /> View
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 border border-cyan-500 rounded-lg text-cyan-400 font-mono hover:bg-cyan-500/10 transition-all"
                    rel="noreferrer"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
