"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, TrendingUp, TrendingDown, Info } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const analyticsAlerts = [
  {
    id: 1,
    type: "Unusual Volume Spike",
    severity: "High",
    description: "Transaction volume increased by 200% in the last hour",
    timestamp: "2023-05-15 14:30:00",
    affectedMetric: "Transaction Volume",
    currentValue: "15,000",
    previousValue: "5,000",
    recommendedAction: "Investigate potential causes and monitor closely for the next few hours.",
  },
  {
    id: 2,
    type: "Conversion Rate Drop",
    severity: "Medium",
    description: "Conversion rate decreased by 15% compared to last week",
    timestamp: "2023-05-15 10:15:00",
    affectedMetric: "Conversion Rate",
    currentValue: "2.55%",
    previousValue: "3.00%",
    recommendedAction: "Review recent changes to the platform and analyze user behavior patterns.",
  },
  {
    id: 3,
    type: "New Traffic Source",
    severity: "Low",
    description: "Significant increase in traffic from a new geographic region",
    timestamp: "2023-05-14 23:45:00",
    affectedMetric: "Traffic Source",
    currentValue: "15% from Region X",
    previousValue: "2% from Region X",
    recommendedAction: "Investigate the cause of the traffic increase and consider localizing content for this region.",
  },
]

export function AnalyticsAlerts() {
  const [showAllAlerts, setShowAllAlerts] = useState(false)
  const [selectedAlert, setSelectedAlert] = useState(null)

  const getAlertIcon = (severity) => {
    switch (severity) {
      case "High":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "Medium":
        return <TrendingDown className="h-5 w-5 text-yellow-500" />
      case "Low":
        return <TrendingUp className="h-5 w-5 text-green-500" />
      default:
        return <Info className="h-5 w-5 text-blue-500" />
    }
  }

  return (
    <>
      <Card className="bg-white shadow-md border border-[#07BEB8]/20">
        <CardHeader>
          <CardTitle className="text-[#013364]">Analytics Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {analyticsAlerts.map((alert) => (
              <li
                key={alert.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex items-center space-x-3">
                  {getAlertIcon(alert.severity)}
                  <span className="font-medium text-[#013364]">{alert.type}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedAlert(alert)}
                  className="text-[#07BEB8] border-[#07BEB8] hover:bg-[#07BEB8] hover:text-white"
                >
                  View
                </Button>
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
            <DialogTitle className="text-[#013364]">All Analytics Alerts</DialogTitle>
          </DialogHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {analyticsAlerts.map((alert) => (
                <TableRow key={alert.id}>
                  <TableCell>{alert.type}</TableCell>
                  <TableCell>{alert.severity}</TableCell>
                  <TableCell>{alert.description}</TableCell>
                  <TableCell>{alert.timestamp}</TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      onClick={() => {
                        setShowAllAlerts(false)
                        setSelectedAlert(alert)
                      }}
                      className="bg-button-gradient text-white hover:opacity-90 transition-opacity duration-200"
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>

      {selectedAlert && (
        <Dialog open={!!selectedAlert} onOpenChange={() => setSelectedAlert(null)}>
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle className="text-[#013364]">{selectedAlert.type}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                {getAlertIcon(selectedAlert.severity)}
                <span
                  className={`font-semibold ${
                    selectedAlert.severity === "High"
                      ? "text-red-500"
                      : selectedAlert.severity === "Medium"
                        ? "text-yellow-500"
                        : "text-green-500"
                  }`}
                >
                  {selectedAlert.severity} Severity
                </span>
              </div>
              <p>
                <strong>Description:</strong> {selectedAlert.description}
              </p>
              <p>
                <strong>Timestamp:</strong> {selectedAlert.timestamp}
              </p>
              <p>
                <strong>Affected Metric:</strong> {selectedAlert.affectedMetric}
              </p>
              <p>
                <strong>Current Value:</strong> {selectedAlert.currentValue}
              </p>
              <p>
                <strong>Previous Value:</strong> {selectedAlert.previousValue}
              </p>
              <p>
                <strong>Recommended Action:</strong> {selectedAlert.recommendedAction}
              </p>
            </div>
            <DialogClose asChild>
              <Button className="mt-4 bg-button-gradient text-white hover:opacity-90 transition-opacity duration-200 w-full">
                Close
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

