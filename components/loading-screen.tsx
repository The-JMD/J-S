"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-secondary/20"
        >
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-20 -left-20 w-4 h-4 bg-primary/30 rounded-full animate-float" />
            <div
              className="absolute -top-10 right-10 w-2 h-2 bg-secondary/40 rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-20 -right-16 w-3 h-3 bg-accent/50 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute -bottom-10 left-5 w-2 h-2 bg-primary/20 rounded-full animate-float"
              style={{ animationDelay: "0.5s" }}
            />

            {/* Main Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="glass-strong rounded-2xl p-12 text-center"
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-6xl font-bold text-primary mb-4"
              >
                J&S
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg text-muted-foreground"
              >
                Façonner Votre Avenir
              </motion.p>

              {/* Loading Animation */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
                className="h-1 bg-primary/30 rounded-full mt-8 overflow-hidden"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
                  className="h-full w-1/3 bg-primary rounded-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
