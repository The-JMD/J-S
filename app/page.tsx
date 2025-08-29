"use client"

import { useEffect } from "react"
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
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset
          const parallaxElements = document.querySelectorAll(".parallax")

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
    </main>
  )
}
