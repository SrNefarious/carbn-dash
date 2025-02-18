import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { NavigationProvider } from "@/contexts/navigation-context"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Carbn Dashboard",
  description: "Modern financial transaction monitoring dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <NavigationProvider>{children}</NavigationProvider>
      </body>
    </html>
  )
}

