"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Target, Award } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Users,
      title: "Équipe d'Experts",
      description: "Consultants expérimentés dans plusieurs secteurs d'activité",
    },
    {
      icon: Target,
      title: "Solutions Sur Mesure",
      description: "Stratégies personnalisées pour vos défis uniques",
    },
    {
      icon: Award,
      title: "Résultats Prouvés",
      description: "Historique de livraison d'impact mesurable",
    },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-600/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute right-10 top-1/4 parallax" data-speed="0.4">
        <div className="w-80 h-56 rounded-2xl overflow-hidden shadow-2xl opacity-20 hover:opacity-30 transition-opacity duration-500">
          <img
            src="/professional-business-consulting-team-in-modern-of.png"
            alt="Équipe de consultation professionnelle"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Qui Nous Sommes</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-8 hover:glass-strong transition-all duration-300"
          >
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Notre cabinet se spécialise dans l'accompagnement des entreprises à travers les complexités de la gestion
              des ressources humaines et du développement organisationnel. Nos consultants apportent une expérience
              transversale dans plusieurs secteurs, délivrant des insights actionnables qui transforment les défis en
              opportunités.
            </p>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Notre mission est de créer une valeur durable en alignant les personnes, la culture et la performance.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-colors"
                  >
                    <feature.icon className="h-6 w-6 text-teal-600" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-pretty">{feature.description}</p>
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
