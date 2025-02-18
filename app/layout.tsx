import type React from "react"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { NavigationProvider } from "@/contexts/navigation-context"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavigationProvider>{children}</NavigationProvider>
      </body>
    </html>
  )
}

