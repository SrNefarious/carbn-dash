import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

interface Alert {
  id: number
  type: string
  description: string
  severity: string
  timestamp: string
  action: string
}

const alerts: Alert[] = [
  {
    id: 1,
    type: "Suspicious Activity",
    description: "Multiple failed login attempts from IP 192.168.1.100",
    severity: "High",
    timestamp: "2023-05-15 10:30:00",
    action: "Block IP and force password reset for affected accounts",
  },
  {
    id: 2,
    type: "Large Transaction",
    description: "Transaction of $150,000 from account ID 12345 to unknown recipient",
    severity: "Medium",
    timestamp: "2023-05-15 11:15:00",
    action: "Review transaction details and contact account holder for verification",
  },
  {
    id: 3,
    type: "Unusual Pattern",
    description: "50 transactions under $10 in 5 minutes from account ID 67890",
    severity: "Medium",
    timestamp: "2023-05-15 12:00:00",
    action: "Temporarily freeze account and investigate for potential fraud",
  },
  {
    id: 4,
    type: "Compliance Alert",
    description: "Potential sanctions list match for new customer John Smith",
    severity: "High",
    timestamp: "2023-05-15 13:45:00",
    action: "Conduct enhanced due diligence and report to compliance officer",
  },
  {
    id: 5,
    type: "System Alert",
    description: "API response time increased to 5s, exceeding 3s threshold",
    severity: "Low",
    timestamp: "2023-05-15 14:30:00",
    action: "Monitor system performance and scale resources if needed",
  },
]

export function AlertsMonitoring() {
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null)

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Alerts and Suspicious Activity Monitoring</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alerts.map((alert) => (
                <TableRow key={alert.id}>
                  <TableCell>{alert.type}</TableCell>
                  <TableCell>{alert.description}</TableCell>
                  <TableCell>{alert.severity}</TableCell>
                  <TableCell>{alert.timestamp}</TableCell>
                  <TableCell>
                    <Button onClick={() => setSelectedAlert(alert)}>View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedAlert && (
        <Dialog open={!!selectedAlert} onOpenChange={() => setSelectedAlert(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedAlert.type}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p><strong>Description:</strong> {selectedAlert.description}</p>
              <p><strong>Severity:</strong> {selectedAlert.severity}</p>
              <p><strong>Timestamp:</strong> {selectedAlert.timestamp}</p>
              <p><strong>Recommended Action:</strong> {selectedAlert.action}</p>
            </div>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}