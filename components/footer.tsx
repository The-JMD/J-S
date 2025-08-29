"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Linkedin, Twitter, Mail, Phone, ArrowUp, MapPin, Send } from "lucide-react"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/jsfirm", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/jsfirm", label: "Twitter" },
    {
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=leila.idrissi@jsfirm.ma&su=Contact%20depuis%20le%20site%20web",
      label: "Email",
    }, // Updated to open Gmail with pre-filled recipient
    { icon: Phone, href: "tel:+212537654321", label: "Téléphone" }, // Made phone clickable
  ]

  const footerLinks = [
    { label: "Politique de Confidentialité", href: "#" },
    { label: "Conditions d'Utilisation", href: "#" },
    { label: "Politique des Cookies", href: "#" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="relative py-20 overflow-hidden bg-slate-50/50 dark:bg-slate-900/50">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-600/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-400/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl p-10 shadow-2xl border border-white/20"
        >
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-10">
            <div className="lg:col-span-2 md:col-span-2">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-4 mb-6 group"
              >
                <div className="relative">
                  <img
                    src="/js-firm-logo-cropped.png"
                    alt="J&S FIRM Logo"
                    className="w-20 h-20 object-contain group-hover:rotate-6 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-foreground group-hover:text-teal-600 transition-colors block">
                    J & S FIRM
                  </span>
                  <span className="text-sm text-muted-foreground">Excellence en Conseil RH</span>
                </div>
              </motion.button>

              <p className="text-muted-foreground text-pretty mb-6 leading-relaxed">
                Façonner l'avenir du travail avec excellence et innovation. Votre partenaire de confiance pour
                transformer vos défis RH en opportunités de croissance.
              </p>

              <div className="space-y-3">
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=leila.idrissi@jsfirm.ma&su=Contact%20depuis%20le%20site%20web"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-teal-600 transition-all duration-300 group"
                >
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">leila.idrissi@jsfirm.ma</span>
                </motion.a>

                <motion.a
                  href="tel:+212537654321"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-teal-600 transition-all duration-300 group"
                >
                  <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+212 (0) 537 65 43 21</span>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-muted-foreground group cursor-pointer"
                  onClick={() => window.open("https://maps.google.com/?q=Casablanca,Morocco", "_blank")}
                >
                  <MapPin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Casablanca, Maroc</span>
                </motion.div>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">Nos Services</h4>
              <div className="space-y-3">
                {[
                  { name: "Conseil RH", desc: "Stratégie & Optimisation" },
                  { name: "Formation", desc: "Développement des Talents" },
                  { name: "Recrutement", desc: "Acquisition de Talents" },
                  { name: "Audit", desc: "Évaluation Organisationnelle" },
                ].map((service) => (
                  <motion.a
                    key={service.name}
                    href="#services"
                    whileHover={{ x: 5 }}
                    className="block group cursor-pointer"
                  >
                    <div className="text-foreground group-hover:text-teal-600 transition-colors duration-200 font-medium text-sm">
                      {service.name}
                    </div>
                    <div className="text-xs text-muted-foreground group-hover:text-teal-500 transition-colors">
                      {service.desc}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">Suivez-nous</h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 p-3 glass rounded-xl hover:glass-strong hover:bg-teal-500/10 transition-all duration-300 group"
                    aria-label={link.label}
                  >
                    <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-teal-600 transition-colors" />
                    <span className="text-xs text-muted-foreground group-hover:text-teal-600 transition-colors">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Restez informé de nos dernières actualités et conseils RH.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 text-sm bg-background/80 border border-border/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500/50 transition-all duration-300"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubscribed}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-green-600 text-white text-sm rounded-xl transition-all duration-300 font-medium"
                >
                  {isSubscribed ? (
                    <>
                      <span>✓ Inscrit!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>S'abonner</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>

          <div className="border-t border-border/30 mt-12 pt-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-6">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -1 }}
                  className="text-muted-foreground hover:text-teal-600 transition-all duration-200 text-sm font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-muted-foreground text-sm">
                  Copyright © {new Date().getFullYear()} J & S FIRM. Tous droits réservés.
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">Conçu avec ❤️ pour l'excellence RH</p>
              </div>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 glass rounded-full hover:glass-strong hover:bg-teal-500/10 text-sm text-muted-foreground hover:text-teal-600 transition-all duration-300 group"
              >
                <span>Retour en haut</span>
                <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8"
        >
          <div className="glass-strong rounded-2xl p-6 border border-white/20">
            <h4 className="font-bold text-foreground mb-4 text-center">Notre Localisation</h4>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.2!2d-7.6!3d33.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM2JzAwLjAiTiA3wrAzNicwMC4wIlc!5e0!3m2!1sen!2sma!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-teal-500/5 pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
