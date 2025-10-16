"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skillCategories = [
  {
    name: "Languages & Frameworks",
    skills: ["Java SE", "Spring Boot", "Spring MVC", "Microservices"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "MySQL", "Redis"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS EC2", "AWS RDS", "AWS S3", "AWS IAM"],
  },
  {
    name: "Frontend & Tools",
    skills: ["React.js", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Advanced Tools",
    skills: ["Kafka", "Lombok", "Postman", "JUnit"],
  },
  {
    name: "Configuration",
    skills: ["YAML", "XML", "JSON", "Gradle"],
  },
]

export default function SkillsDashboard() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="skills" ref={ref} className="relative min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-black to-violet-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold mb-4 font-mono text-center"
        >
          <span className="bg-gradient-to-r from-violet-400 to-cyan-600 bg-clip-text text-transparent">
            SKILLS DASHBOARD
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center text-gray-400 font-mono mb-12 text-lg"
        >
          &gt; Every technology is a tool — but mastery turns tools into power.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative border border-cyan-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-md hover:border-cyan-500/60 transition-all">
                <h3 className="text-cyan-400 font-mono font-bold mb-4 text-lg">{category.name}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0 }}
                      animate={inView ? { width: "100%" } : {}}
                      transition={{ delay: idx * 0.1 + i * 0.05, duration: 0.8 }}
                      className="flex items-center"
                    >
                      <div className="flex-1 h-2 bg-gradient-to-r from-cyan-500/50 to-violet-500/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-400 to-violet-500"
                          initial={{ width: 0 }}
                          animate={inView ? { width: "100%" } : {}}
                          transition={{ delay: idx * 0.1 + i * 0.05 + 0.3, duration: 0.8 }}
                        />
                      </div>
                      <span className="ml-3 text-gray-300 font-mono text-sm min-w-fit">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
