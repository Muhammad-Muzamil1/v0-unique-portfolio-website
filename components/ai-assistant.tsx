"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

const faqs = [
  { q: "What tech does Muzamil use?", a: "Java, Spring Boot, Microservices, AWS, MongoDB, and more!" },
  { q: "How can I hire him?", a: "Contact via email: muhammadmuzamilumrani@gmail.com or call 0314-7419170" },
  {
    q: "What's his main specialty?",
    a: "Backend development with Java & Spring Boot, building scalable microservices.",
  },
]

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([])

  const handleQuestion = (answer: string) => {
    setMessages([...messages, { role: "ai", text: answer }])
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 font-mono">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-80 bg-black border-2 border-cyan-500/50 rounded-lg p-4 backdrop-blur-md mb-4"
          >
            <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
              {messages.length === 0 && (
                <p className="text-cyan-400 text-sm">Welcome! Ask me anything about Muzamil...</p>
              )}
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm ${msg.role === "ai" ? "text-cyan-400" : "text-gray-300"}`}
                >
                  <span className="font-bold">{msg.role === "ai" ? "[AI] " : "[You] "}</span>
                  {msg.text}
                </motion.div>
              ))}
            </div>

            <div className="space-y-2 border-t border-cyan-500/30 pt-3">
              {faqs.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuestion(faq.a)}
                  className="w-full text-left text-xs p-2 bg-cyan-500/10 hover:bg-cyan-500/20 rounded border border-cyan-500/30 text-gray-300 hover:text-cyan-400 transition-all"
                >
                  {faq.q}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  )
}
