"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, AlertCircle, Info } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const complianceAlerts = [
  {
    id: 1,
    type: "High Risk Customer",
    severity: "High",
    description: "New customer Acme Corp flagged for high-risk jurisdiction",
    timestamp: "2023-05-15 14:30:00",
    recommendedAction: "Conduct enhanced due diligence and escalate to compliance officer",
  },
  {
    id: 2,
    type: "AML Alert",
    severity: "Medium",
    description: "Unusual transaction pattern detected for TechGiant Inc",
    timestamp: "2023-05-15 11:45:00",
    recommendedAction: "Review recent transactions and consider filing a suspicious activity report",
  },
  {
    id: 3,
    type: "KYC Update Required",
    severity: "Low",
    description: "Annual KYC refresh due for Global Traders Ltd",
    timestamp: "2023-05-14 09:15:00",
    recommendedAction: "Initiate KYC refresh process and request updated documentation",
  },
  {
    id: 4,
    type: "Sanctions List Match",
    severity: "High",
    description: "Potential sanctions list match for new beneficiary",
    timestamp: "2023-05-15 16:20:00",
    recommendedAction: "Immediately freeze the transaction and report to relevant authorities",
  },
  {
    id: 5,
    type: "Expired Documentation",
    severity: "Medium",
    description: "Business license for FastPay Solutions has expired",
    timestamp: "2023-05-13 13:10:00",
    recommendedAction: "Contact the client to request updated business license documentation",
  },
]

export function ComplianceAlerts() {
  const [showAllAlerts, setShowAllAlerts] = useState(false)
  const [selectedAlert, setSelectedAlert] = useState(null)

  const getAlertIcon = (severity) => {
    switch (severity) {
      case "High":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "Medium":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      case "Low":
        return <Info className="h-5 w-5 text-blue-500" />
      default:
        return <Info className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <>
      <Card className="bg-white shadow-md border border-[#07BEB8]/20">
        <CardHeader>
          <CardTitle className="text-[#013364]">Recent Compliance Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {complianceAlerts.slice(0, 3).map((alert) => (
              <li
                key={alert.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex items-center space-x-3">
                  {getAlertIcon(alert.severity)}
                  <span className="font-medium text-[#013364]">{alert.type}</span>
                </div>
                <Button
                  size="sm"
                  onClick={() => setSelectedAlert(alert)}
                  className="bg-button-gradient text-white hover:opacity-90 transition-opacity duration-200"
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
            <DialogTitle className="text-[#013364] text-2xl mb-4">All Compliance Alerts</DialogTitle>
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
              {complianceAlerts.map((alert) => (
                <TableRow key={alert.id}>
                  <TableCell className="font-medium">{alert.type}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        alert.severity === "High"
                          ? "bg-red-100 text-red-800"
                          : alert.severity === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {alert.severity}
                    </span>
                  </TableCell>
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
          <DialogContent className="bg-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-[#013364] text-2xl mb-4">{selectedAlert.type}</DialogTitle>
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
                        : "text-blue-500"
                  }`}
                >
                  {selectedAlert.severity} Severity
                </span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Description</p>
                <p className="font-medium">{selectedAlert.description}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Timestamp</p>
                <p className="font-medium">{selectedAlert.timestamp}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Recommended Action</p>
                <p className="font-medium">{selectedAlert.recommendedAction}</p>
              </div>
            </div>
            <DialogClose asChild>
              <Button className="mt-4 w-full bg-button-gradient text-white hover:opacity-90 transition-opacity duration-200">
                Close
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

