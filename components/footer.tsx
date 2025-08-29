"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Twitter, Mail, Phone, ArrowUp } from "lucide-react"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:leila.idrissi@jsfirm.ma", label: "Email" },
    { icon: Phone, href: "tel:+212537654321", label: "Téléphone" },
  ]

  const footerLinks = [
    { label: "Politique de Confidentialité", href: "#" },
    { label: "Conditions d'Utilisation", href: "#" },
    { label: "Politique des Cookies", href: "#" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Description - Enhanced with clickable logo */}
            <div className="md:col-span-2">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 mb-4 group"
              >
                <img
                  src="/js-firm-logo.png"
                  alt="J&S FIRM Logo"
                  className="w-12 h-12 object-contain group-hover:rotate-6 transition-transform duration-300"
                />
                <span className="text-xl font-bold text-foreground group-hover:text-teal-600 transition-colors">
                  J & S FIRM
                </span>
              </motion.button>
              <p className="text-muted-foreground text-pretty mb-4">
                Façonner l'avenir du travail avec excellence et innovation
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📧 leila.idrissi@jsfirm.ma</p>
                <p>📞 +212 (0) 537 65 43 21</p>
                <p>📍 Casablanca, Maroc</p>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Nos Services</h4>
              <div className="space-y-2">
                {["Conseil RH", "Formation", "Recrutement", "Audit Organisationnel"].map((service) => (
                  <a
                    key={service}
                    href="#services"
                    className="block text-muted-foreground hover:text-teal-600 transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links & Newsletter */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Suivez-nous</h4>
              <div className="flex space-x-3 mb-6">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:glass-strong hover:bg-teal-500/10 transition-all duration-300 group"
                    aria-label={link.label}
                  >
                    <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-teal-600 transition-colors" />
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-2">
                <h5 className="text-sm font-medium text-foreground">Newsletter</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-3 py-2 text-sm bg-background/50 border border-border/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                  />
                  <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm rounded-r-lg transition-colors">
                    S'abonner
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="border-t border-border/20 mt-8 pt-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-teal-600 transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Copyright Section with Back to Top */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                Copyright © {new Date().getFullYear()} J & S FIRM. Tous droits réservés.
              </p>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-teal-600 transition-colors group"
              >
                <span>Retour en haut</span>
                <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
