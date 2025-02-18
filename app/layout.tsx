import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { NavigationProvider } from "@/contexts/navigation-context"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Carbn Dashboard",
  description: "Modern financial transaction monitoring dashboard",
  metadataBase: new URL("https://your-production-url.vercel.app"),
}

export const dynamic = "force-dynamic"
export const revalidate = 0

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${montserrat.className} min-h-screen bg-background`}>
        <NavigationProvider>{children}</NavigationProvider>
      </body>
    </html>
  )
}

