"use client"

import { Bell, User } from "lucide-react"
import { CarbnLogo } from "./carbn-logo"
import { useNavigation } from "@/contexts/navigation-context"

export default function TopBar() {
  const { currentTab } = useNavigation()

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 flex items-center h-16">
      <div className="flex-shrink-0 px-4">
        <CarbnLogo />
      </div>
      <div className="flex-1 px-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-[#013364]">{currentTab}</h1>
        <div className="flex items-center space-x-4">
          <button className="text-white bg-button-gradient hover:opacity-90 rounded-full p-2 transition-opacity duration-200">
            <Bell className="h-6 w-6" />
          </button>
          <button className="text-white bg-button-gradient hover:opacity-90 rounded-full p-2 transition-opacity duration-200">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

