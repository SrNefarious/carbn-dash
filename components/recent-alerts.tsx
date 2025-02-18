"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import { AlertsMonitoring } from "./alerts-monitoring"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const recentAlerts = [
  { id: 1, type: "Suspicious Activity", severity: "High" },
  { id: 2, type: "Large Transaction", severity: "Medium" },
  { id: 3, type: "Unusual Pattern", severity: "Medium" },
]

export function RecentAlerts() {
  const [showAllAlerts, setShowAllAlerts] = useState(false)

  return (
    <>
      <Card className="bg-white shadow-md border border-[#07BEB8]/20">
        <CardHeader>
          <CardTitle className="text-[#013364]">Recent Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {recentAlerts.map((alert) => (
              <li
                key={alert.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex items-center space-x-3">
                  <AlertTriangle
                    className={`h-5 w-5 ${alert.severity === "High" ? "text-red-500" : "text-yellow-500"}`}
                  />
                  <span className="font-medium text-[#013364]">{alert.type}</span>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    alert.severity === "High" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {alert.severity}
                </span>
              </li>
            ))}
          </ul>
          <Button
            className="mt-4 w-full bg-button-gradient text-white hover:opacity-90 transition-opacity duration-200"
            onClick={() => setShowAllAlerts(true)}
          >
            View All Alerts
          </Button>
        </CardContent>
      </Card>

      <Dialog open={showAllAlerts} onOpenChange={setShowAllAlerts}>
        <DialogContent className="max-w-4xl bg-white">
          <DialogHeader>
            <DialogTitle className="text-[#013364]">All Alerts</DialogTitle>
          </DialogHeader>
          <AlertsMonitoring />
        </DialogContent>
      </Dialog>
    </>
  )
}

