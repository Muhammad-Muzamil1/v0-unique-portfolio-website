"use client"

import { motion } from "framer-motion"

const skillCategories = [
  { name: "Languages & Frameworks", skills: ["Java SE", "Spring Boot", "Spring MVC", "Microservices"] },
  { name: "Databases", skills: ["MongoDB", "MySQL", "Redis"] },
  { name: "Cloud & DevOps", skills: ["AWS EC2", "AWS RDS", "AWS S3", "AWS IAM"] },
  { name: "Frontend & Tools", skills: ["React.js", "HTML", "CSS", "JavaScript"] },
  { name: "Advanced Tools", skills: ["Kafka", "Lombok", "Postman", "JUnit"] },
  { name: "Configuration", skills: ["YAML", "XML", "JSON", "Gradle"] },
]

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 bg-black overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-black to-violet-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 font-mono text-center"
        >
          <span className="bg-gradient-to-r from-violet-400 to-cyan-600 bg-clip-text text-transparent">
            SKILLS DASHBOARD
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 font-mono mb-16 text-lg"
        >
          &gt; Every technology is a tool — but mastery turns tools into power.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative border border-cyan-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-md hover:border-cyan-500/60 transition-all duration-300">
                <h3 className="text-cyan-400 font-mono font-bold mb-4 text-lg">{category.name}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                      <span className="text-gray-300 font-mono text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
