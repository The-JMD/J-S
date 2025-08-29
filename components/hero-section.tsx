"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Façonner l'Avenir du Travail"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const animatedPhrases = [
    "Excellence en Conseil RH",
    "Innovation & Stratégie",
    "Croissance Durable",
    "Solutions Sur Mesure",
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-teal-400/15 rounded-full blur-2xl animate-float" />
      </div>

      {/* Professional Business Images - Enhanced with multiple images */}
      <div className="absolute inset-0 parallax" data-speed="0.3">
        <div className="absolute right-10 top-1/4 w-80 h-60 rounded-2xl overflow-hidden shadow-2xl opacity-20 hover:opacity-30 transition-opacity duration-500">
          <img
            src="/professional-business-consulting-team-in-modern-of.png"
            alt="Équipe de consultation professionnelle"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute left-10 bottom-1/4 w-72 h-48 rounded-2xl overflow-hidden shadow-2xl opacity-15 hover:opacity-25 transition-opacity duration-500">
          <img
            src="/modern-professional-office-meeting-room-with-glass.png"
            alt="Salle de réunion moderne"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 1 }}
          className={`absolute w-2 h-2 bg-teal-500/30 rounded-full animate-float`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glass-strong rounded-3xl p-8 md:p-12 max-w-4xl mx-auto backdrop-blur-xl"
        >
          {/* Animated Phrases Above Title - Added floating animated text */}
          <div className="mb-6 space-y-2">
            {animatedPhrases.map((phrase, index) => (
              <motion.div
                key={phrase}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.3, duration: 0.8 }}
                className="text-sm md:text-base text-teal-600 font-medium"
              >
                {phrase}
              </motion.div>
            ))}
          </div>

          {/* Title with Typewriter Animation - Added typewriter effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
          >
            <span className="text-teal-600 relative">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                className="inline-block w-1 h-8 md:h-12 bg-teal-600 ml-1"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-teal-500/40 rounded-full"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 text-pretty"
          >
            Conseil RH et Solutions d'Entreprise Conçues pour la Croissance
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty"
          >
            Nous autonomisons les entreprises avec des stratégies innovantes en ressources humaines et des services de
            conseil sur mesure. En combinant expertise, technologie et approche centrée sur l'humain, nous aidons les
            entreprises à libérer leur plein potentiel.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToServices}
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-8 py-6 group shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Découvrir Nos Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
