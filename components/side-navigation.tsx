"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FileText, ShieldCheck, Zap, BarChart2, LifeBuoy } from "lucide-react"
import { useNavigation } from "@/contexts/navigation-context"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Transactions", href: "/dashboard/transactions", icon: FileText },
  { name: "Compliance", href: "/dashboard/compliance", icon: ShieldCheck },
  { name: "API Management", href: "/dashboard/api", icon: Zap },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart2 },
  { name: "Support", href: "/dashboard/support", icon: LifeBuoy },
]

export default function SideNavigation() {
  const pathname = usePathname()
  const { setCurrentTab } = useNavigation()

  return (
    <div className="flex flex-col w-64 bg-white border-r border-gray-200">
      <nav className="flex-grow">
        <ul className="space-y-1 p-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  pathname === item.href || (item.href === "/dashboard" && pathname === "/")
                    ? "bg-[#07BEB8] text-white"
                    : "text-gray-600 hover:border hover:border-[#07BEB8]"
                }`}
                onClick={() => setCurrentTab(item.name)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

