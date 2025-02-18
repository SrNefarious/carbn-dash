"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type NavigationContextType = {
  currentTab: string
  setCurrentTab: (tab: string) => void
}

const defaultNavigationContext: NavigationContextType = {
  currentTab: "Dashboard",
  setCurrentTab: () => {},
}

const NavigationContext = createContext<NavigationContextType>(defaultNavigationContext)

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentTab, setCurrentTab] = useState("Dashboard")

  return <NavigationContext.Provider value={{ currentTab, setCurrentTab }}>{children}</NavigationContext.Provider>
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider")
  }
  return context
}

