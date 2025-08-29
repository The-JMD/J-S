"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"
import { LoadingScreen } from "@/components/loading-screen"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ApproachSection } from "@/components/approach-section"
import { ImpactSection } from "@/components/impact-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset
          const parallaxElements = document.querySelectorAll(".parallax")

          setShowScrollTop(scrolled > 300)

          parallaxElements.forEach((element) => {
            const speed = element.getAttribute("data-speed") || "0.5"
            const yPos = -(scrolled * Number.parseFloat(speed))
            element.style.transform = `translateY(${yPos}px)`
          })

          ticking = false
        })
        ticking = true
      }
    }

    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    document.addEventListener("click", handleAnchorClick)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      <LoadingScreen />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <ImpactSection />
      <ContactSection />
      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
            aria-label="Retour en haut"
          >
            <ChevronUp className="h-6 w-6 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  )
}
