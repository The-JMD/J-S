"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const animatedSentences = [
    "Façonner l'Avenir Du travail.",
    "Transformer Votre Entreprise.",
    "Optimiser Vos Ressources Humaines.",
    "Accélérer Votre Croissance.",
    "Innover Avec Excellence.",
  ]

  useEffect(() => {
    const currentSentence = animatedSentences[currentPhraseIndex]
    let index = 0
    setDisplayedText("")
    setIsTyping(true)

    const typeTimer = setInterval(() => {
      if (index < currentSentence.length) {
        setDisplayedText(currentSentence.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(typeTimer)

        // Wait 2 seconds then move to next sentence
        setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % animatedSentences.length)
        }, 2000)
      }
    }, 80)

    return () => clearInterval(typeTimer)
  }, [currentPhraseIndex])

  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const floatingPhrases = [
    "Excellence en Conseil RH",
    "Innovation & Stratégie",
    "Croissance Durable",
    "Solutions Sur Mesure",
    "Leadership Transformationnel",
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(71,85,105,0.03)_0%,transparent_50%)]" />

        {/* Floating geometric elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/8 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-600/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl animate-float" />
      </div>

      {/* Professional Business Images */}
      <div className="absolute inset-0 parallax" data-speed="0.3">
        <div className="absolute right-10 top-1/4 w-80 h-60 rounded-2xl overflow-hidden shadow-2xl opacity-15 hover:opacity-25 transition-all duration-700">
          <img
            src="/professional-business-consulting-team-in-modern-of.png"
            alt="Équipe de consultation professionnelle"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="absolute left-10 bottom-1/4 w-72 h-48 rounded-2xl overflow-hidden shadow-2xl opacity-12 hover:opacity-22 transition-all duration-700">
          <img
            src="/modern-professional-office-meeting-room-with-glass.png"
            alt="Salle de réunion moderne"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100, scale: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3], y: 0, scale: 1 }}
          transition={{
            delay: i * 0.1,
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: Math.random() * 2,
          }}
          className="absolute w-2 h-2 bg-teal-500/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glass-strong rounded-3xl p-8 md:p-12 max-w-5xl mx-auto backdrop-blur-xl border border-white/20"
        >
          <div className="mb-8 space-y-3">
            {floatingPhrases.map((phrase, index) => (
              <motion.div
                key={phrase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  delay: 0.2 + index * 0.2,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                className="inline-block mx-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm md:text-base font-medium border border-teal-200/50 hover:bg-teal-100 transition-colors duration-300"
              >
                {phrase}
              </motion.div>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 text-balance leading-tight"
          >
            <span className="text-teal-600 relative inline-block">
              {displayedText.split(" ").map((word, index) => {
                const isLastTwoWords = word === "Du" || word === "travail."
                return (
                  <span key={index} className={isLastTwoWords ? "relative" : ""}>
                    {word}
                    {word === "travail." && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isTyping ? 0 : 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 rounded-full"
                      />
                    )}
                    {index < displayedText.split(" ").length - 1 && " "}
                  </span>
                )
              })}
              <motion.span
                animate={{ opacity: isTyping ? [1, 0] : 0 }}
                transition={{ duration: 0.8, repeat: isTyping ? Number.POSITIVE_INFINITY : 0, repeatType: "reverse" }}
                className="inline-block w-1 h-8 md:h-12 bg-teal-600 ml-1"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 text-pretty font-medium"
          >
            Conseil RH et Solutions d'Entreprise{" "}
            <span className="text-teal-600 font-semibold">Conçues pour la Croissance</span>
          </motion.p>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-base md:text-lg text-slate-500 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed"
          >
            Nous autonomisons les entreprises avec des{" "}
            <span className="text-teal-600 font-medium">stratégies innovantes</span> en ressources humaines et des
            services de conseil sur mesure. En combinant expertise, technologie et approche centrée sur l'humain, nous
            aidons les entreprises à libérer leur plein potentiel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button
                onClick={scrollToServices}
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-10 py-6 group shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full border-2 border-teal-500/20"
              >
                <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Découvrir Nos Services
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
