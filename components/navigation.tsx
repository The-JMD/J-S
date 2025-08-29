"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const navigationItems = [
    { label: "Accueil", id: "hero" }, // Updated id to match hero section
    { label: "À Propos", id: "about" },
    { label: "Services", id: "services" },
    { label: "Approche", id: "approach" },
    { label: "Impact", id: "impact" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-teal-500/10 backdrop-blur-sm border-b border-border/20 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="text-muted-foreground">📧 leila.idrissi@jsfirm.ma | 📞 +212 (0) 537 65 43 21</div>
          <div className="text-muted-foreground hidden md:block">Façonner l'avenir du travail depuis 2010</div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "glass-strong shadow-lg" : "glass"
        }`}
      >
        <div className="container mx-auto px-2 py-4 flex items-center justify-between">
          {/* Logo - Updated to use provided logo image */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 font-bold rounded-md w-[ato] flex-row"
            onClick={() => scrollToSection("hero")} // Updated to scroll to hero section
          >
            <img src="/js-firm-logo.png" alt="J&S FIRM Logo" className="w-12 h-12 object-contain" />
          </motion.button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-teal-600 transition-all duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Nous Contacter
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button - Added mobile hamburger menu */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass hover:glass-strong transition-all duration-300"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar - Added mobile sidebar navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 glass-strong border-l border-border/20 z-50 md:hidden"
            >
              <div className="p-6 space-y-6">
                {/* Mobile Logo */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src="/js-firm-logo.png" alt="J&S FIRM Logo" className="w-10 h-10 object-contain" />
                    <span className="text-lg font-bold text-foreground">J & S FIRM</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-muted/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-4">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left p-3 rounded-lg hover:bg-teal-500/10 hover:text-teal-600 transition-all duration-300 font-medium"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Contact Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4 border-t border-border/20"
                >
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    Nous Contacter
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
