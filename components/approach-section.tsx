"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Handshake, Eye, BarChart3 } from "lucide-react"

export function ApproachSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const principles = [
    {
      icon: Handshake,
      title: "Collaboration",
      description: "Travailler ensemble pour atteindre des objectifs communs",
    },
    {
      icon: Eye,
      title: "Transparence",
      description: "Communication claire et retours honnêtes",
    },
    {
      icon: BarChart3,
      title: "Impact Mesurable",
      description: "Résultats basés sur les données que vous pouvez voir et suivre",
    },
  ]

  return (
    <section id="approach" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Comment Nous Travaillons
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Notre approche de conseil est basée sur la collaboration, la transparence et l'impact mesurable. Chaque
              projet est adapté à la vision du client, intégrant les meilleures pratiques mondiales aux réalités locales.
            </p>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Grâce à des outils innovants, des animations macro et des tableaux de bord interactifs, les entreprises
              gagnent en clarté et obtiennent des stratégies actionnables pour avancer avec confiance.
            </p>
          </motion.div>

          {/* Principles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <principle.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{principle.title}</h3>
                    <p className="text-muted-foreground text-pretty">{principle.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
