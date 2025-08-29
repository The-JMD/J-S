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
  title: "J & S FIRM - Shaping the Future of Work",
  description:
    "HR Consulting and Business Solutions Designed for Growth. Empowering businesses with innovative human resources strategies and tailored consulting services.",
  generator: "v0.app",
  keywords: "HR consulting, business solutions, human resources, organizational development, recruitment, training",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${geist.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
