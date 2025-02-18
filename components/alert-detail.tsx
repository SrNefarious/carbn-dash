import React from 'react'
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, XCircle, Calendar, User, Shield, Activity } from 'lucide-react'

interface Alert {
  severity: 'High' | 'Medium' | 'Low'
  type: string
  description: string
  timestamp: string
  affectedUser?: string
  riskLevel?: string
  status?: string
  action: string
}

interface AlertDetailProps {
  alert: Alert
  onClose: () => void
}

export function AlertDetail({ alert, onClose }: AlertDetailProps) {
  const getAlertIcon = () => {
    switch (alert.severity) {
      case "High":
        return <AlertTriangle className="w-12 h-12 text-red-500" />
      case "Medium":
        return <AlertTriangle className="w-12 h-12 text-yellow-500" />
      default:
        return <AlertTriangle className="w-12 h-12 text-blue-500" />
    }
  }



  const getAlertColor = () => {
    switch (alert.severity) {
      case "High":
        return "text-red-500"
      case "Medium":
        return "text-yellow-500"
      default:
        return "text-blue-500"
    }
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto bg-white p-0">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {getAlertIcon()}
            </motion.div>
            <div>
              <h2 className={`text-xl font-bold ${getAlertColor()}`}>{alert.type}</h2>
              <p className="text-sm text-gray-500">Severity: {alert.severity}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <XCircle className="h-6 w-6" />
          </Button>
        </div>

        <div className="p-4 space-y-4">
          {/* Alert Description */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-md font-semibold text-[#013364] mb-2">Description</h3>
            <p className="text-sm text-gray-700">{alert.description}</p>
          </div>

          {/* Alert Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-[#07BEB8]" />
                <p className="text-sm text-gray-500">Timestamp</p>
              </div>
              <p className="mt-1 font-medium text-[#013364]">{alert.timestamp}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-[#07BEB8]" />
                <p className="text-sm text-gray-500">Affected User</p>
              </div>
              <p className="mt-1 font-medium text-[#013364]">{alert.affectedUser || "N/A"}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-[#07BEB8]" />
                <p className="text-sm text-gray-500">Risk Level</p>
              </div>
              <p className="mt-1 font-medium text-[#013364]">{alert.riskLevel || "N/A"}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-[#07BEB8]" />
                <p className="text-sm text-gray-500">Status</p>
              </div>
              <p className="mt-1 font-medium text-[#013364]">{alert.status || "Open"}</p>
            </div>
          </div>

          {/* Recommended Action */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-md font-semibold text-[#013364] mb-2">Recommended Action</h3>
            <p className="text-sm text-gray-700">{alert.action}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4">
            <Button
              className="flex-1 bg-[#07BEB8] text-white hover:bg-[#07BEB8]/90"
              onClick={() => {
                console.log("Taking action on alert...")
              }}
            >
              Take Action
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-[#07BEB8] text-[#07BEB8] hover:bg-[#07BEB8] hover:text-white"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

