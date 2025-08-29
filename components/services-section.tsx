"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { UserCheck, Search, GraduationCap, TrendingUp, ArrowRight, Users, Target, Award, Zap } from "lucide-react"

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: UserCheck,
      title: "Conseil RH",
      description:
        "Stratégies complètes en ressources humaines adaptées aux besoins et à la culture de votre organisation.",
      color: "teal",
    },
    {
      icon: Search,
      title: "Solutions de Recrutement",
      description: "Services experts d'acquisition de talents pour trouver les bonnes personnes pour votre équipe.",
      color: "slate",
    },
    {
      icon: GraduationCap,
      title: "Formation & Développement",
      description:
        "Programmes de développement professionnel qui améliorent les compétences et stimulent la performance.",
      color: "teal",
    },
    {
      icon: TrendingUp,
      title: "Conseil en Affaires",
      description: "Conseil stratégique pour optimiser les opérations et accélérer la croissance de l'entreprise.",
      color: "slate",
    },
  ]

  const highlights = [
    { icon: Users, text: "500+ Entreprises Accompagnées", color: "teal" },
    { icon: Target, text: "95% Taux de Satisfaction", color: "slate" },
    { icon: Award, text: "15+ Années d'Expertise", color: "teal" },
    { icon: Zap, text: "Solutions Innovantes", color: "slate" },
  ]

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(20,184,166,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(71,85,105,0.02)_0%,transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-600/3 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Nos{" "}
            <span className="text-teal-600 relative">
              Services
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-teal-500 rounded-full"
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto text-pretty"
          >
            Des solutions complètes et personnalisées pour transformer votre entreprise et optimiser vos ressources
            humaines
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-8 hover:glass-strong transition-all duration-500 group border border-white/20 hover:border-teal-200/30"
            >
              <div
                className={`w-16 h-16 ${service.color === "teal" ? "bg-teal-100" : "bg-slate-100"} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}
              >
                <service.icon className={`h-8 w-8 ${service.color === "teal" ? "text-teal-600" : "text-slate-600"}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-balance group-hover:text-teal-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-600 text-pretty leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-all duration-300 group"
            >
              <highlight.icon
                className={`h-8 w-8 mx-auto mb-3 ${highlight.color === "teal" ? "text-teal-600" : "text-slate-600"} group-hover:scale-110 transition-transform duration-300`}
              />
              <p className="text-sm font-semibold text-slate-700 text-balance">{highlight.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-10 py-6 group shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full"
            >
              Explorer Tous Nos Services
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
