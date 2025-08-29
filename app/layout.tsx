import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

export const metadata: Metadata = {
  title: "J&S FIRM - Façonner l'Avenir du Travail",
  description:
    "Conseil en RH et Solutions d'Entreprise Conçues pour la Croissance. Nous aidons les entreprises à se développer grâce à des stratégies de ressources humaines innovantes et des services de conseil sur mesure.",
  generator: "Duino.app",
  keywords: "conseil RH, solutions d'entreprise, ressources humaines, développement organisationnel, recrutement, formation",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${geist.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
