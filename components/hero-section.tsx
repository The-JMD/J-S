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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/30"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(71,85,105,0.05)_0%,transparent_60%)]" />

        {/* Enhanced floating glass elements */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-80 h-80 glass rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -3, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 glass-strong rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-40 h-40 glass rounded-full blur-xl opacity-40"
        />
      </div>

      <div className="absolute inset-0 parallax" data-speed="0.3">
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="absolute right-10 top-1/4 w-80 h-60 glass-strong rounded-3xl overflow-hidden shadow-2xl opacity-20 hover:opacity-35 transition-all duration-700 border border-white/30"
        >
          <img
            src="/professional-business-consulting-team-in-modern-of.png"
            alt="Équipe de consultation professionnelle"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="absolute left-10 bottom-1/4 w-72 h-48 glass-strong rounded-3xl overflow-hidden shadow-2xl opacity-18 hover:opacity-30 transition-all duration-700 border border-white/30"
        >
          <img
            src="/modern-professional-office-meeting-room-with-glass.png"
            alt="Salle de réunion moderne"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
        </motion.div>
      </div>

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100, scale: 0 }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            y: [0, -30, 0],
            scale: [0.5, 1.2, 0.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            delay: i * 0.15,
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: Math.random() * 3,
            ease: "easeInOut",
          }}
          className="absolute w-3 h-3 glass rounded-full border border-teal-300/30 shadow-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="container mx-auto top-8 px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="glass-strong rounded-3xl p-8 md:p-16 max-w-6xl mx-auto backdrop-blur-2xl border-2 border-white/30 shadow-2xl hover-lift"
        >
         <div className="mb-6 sm:mb-8 md:mb-10 space-y-3 sm:space-y-4">
  {floatingPhrases.map((phrase, index) => (
    <motion.div
      key={phrase}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.85 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{
        delay: 0.3 + index * 0.15,
        duration: 0.8,
        type: "spring",
        stiffness: 120,
      }}
      className="inline-block mx-1 sm:mx-2 mb-2 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 
                 glass rounded-full text-xs sm:text-sm md:text-base font-semibold 
                 border border-teal-200/40 hover:border-teal-300/60 
                 transition-all duration-300 text-teal-700 hover:text-teal-800 
                 shadow-md hover:shadow-lg md:hover:shadow-xl"
    >
      <Sparkles className="inline w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 opacity-70" />
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
            <motion.div whileHover={{ scale: 1.08, y: -4 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button
                onClick={scrollToServices}
                size="lg"
                className="glass-strong bg-teal-600/90 hover:bg-teal-700/90 text-white text-lg px-12 py-7 group shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-full border-2 border-teal-400/30 hover:border-teal-300/50 backdrop-blur-sm"
              >
                <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                Découvrir Nos Services
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -top-10 -right-10 w-32 h-32 glass rounded-full opacity-30 blur-sm"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -bottom-10 -left-10 w-24 h-24 glass-strong rounded-full opacity-25 blur-sm"
        />
      </div>
    </section>
  )
}
