"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Users, Award, Clock } from "lucide-react"

export function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [counts, setCounts] = useState({ clients: 0, retention: 0, experience: 0 })

  const stats = [
    {
      icon: Users,
      value: 200,
      suffix: "+",
      label: "Clients Served",
      key: "clients" as keyof typeof counts,
    },
    {
      icon: Award,
      value: 95,
      suffix: "%",
      label: "Client Retention",
      key: "retention" as keyof typeof counts,
    },
    {
      icon: Clock,
      value: 10,
      suffix: "+",
      label: "Years of Experience",
      key: "experience" as keyof typeof counts,
    },
  ]

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat) => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCounts((prev) => ({ ...prev, [stat.key]: end }))
            clearInterval(timer)
          } else {
            setCounts((prev) => ({ ...prev, [stat.key]: Math.floor(start) }))
          }
        }, 16)
      })
    }
  }, [isInView])

  return (
    <section id="impact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Why Choose Us</h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
          >
            Partnering with the firm means benefiting from a proven track record of delivering results, a dedicated team
            of experts, and a commitment to excellence. Clients trust the service for its reliability, innovation, and
            deep understanding of evolving workplace dynamics.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl p-8 text-center hover:glass-strong transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {counts[stat.key]}
                {stat.suffix}
              </div>
              <div className="text-lg text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
