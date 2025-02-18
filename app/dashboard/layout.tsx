import type React from "react"
import dynamic from "next/dynamic"

const SideNavigation = dynamic(() => import("@/components/side-navigation"), { ssr: false })
const TopBar = dynamic(() => import("@/components/top-bar"), { ssr: false })

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <SideNavigation />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  )
}

