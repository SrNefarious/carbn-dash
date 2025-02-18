"use client"

import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  Clock,
  ArrowDownToLine,
  ArrowUpFromLine,
  Calendar,
  Timer,
  CreditCard,
  Receipt,
  Wallet,
  ArrowRightCircle,
  RefreshCw,
  BanknoteIcon,
} from "lucide-react"
import type { Transaction } from "@/utils/transaction-data"

interface TransactionDetailProps {
  transaction: Transaction
  onClose: () => void
}

export function TransactionDetail({ transaction, onClose }: TransactionDetailProps) {
  const getStatusIcon = () => {
    switch (transaction.status) {
      case "Completed":
        return <CheckCircle2 className="w-12 h-12 text-green-500" />
      case "Retrying":
        return <RefreshCw className="w-12 h-12 text-orange-500" />
      default:
        return <Clock className="w-12 h-12 text-yellow-500" />
    }
  }

  const getStatusColor = () => {
    switch (transaction.status) {
      case "Completed":
        return "text-green-500"
      case "Retrying":
        return "text-orange-500"
      default:
        return "text-yellow-500"
    }
  }

  const formatCurrency = (amount: number, currency: string) => {
    return amount.toLocaleString(undefined, { style: "currency", currency: currency })
  }

  const stages = [
    { name: "Initiated", icon: CreditCard },
    { name: "Fiat to Stablecoin", icon: RefreshCw },
    { name: "Blockchain Transit", icon: ArrowRightCircle },
    { name: "Stablecoin to Fiat", icon: BanknoteIcon },
    { name: "Last Mile Payout", icon: CheckCircle2 },
  ]

  const getStageStatus = (index: number) => {
    if (transaction.status === "Completed") return "completed"
    if (transaction.status === "Retrying") return index === stages.length - 1 ? "retrying" : "completed"
    if (transaction.status === "Pending") {
      if (index < 2) return "completed"
      if (index === 2) return "in-progress"
      return "pending"
    }
    return "pending"
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
              {getStatusIcon()}
            </motion.div>
            <div>
              <h2 className={`text-xl font-bold ${getStatusColor()}`}>{transaction.status.toUpperCase()}</h2>
              <p className="text-sm text-gray-500">ID: {transaction.id}</p>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* Amount Transfer Details */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-[#07BEB8]/10 p-2 rounded-full">
                  <ArrowUpFromLine className="w-5 h-5 text-[#07BEB8]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">From</p>
                  <p className="text-lg font-bold text-[#013364]">
                    {formatCurrency(transaction.amount, transaction.fromCurrency)}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-[#07BEB8]/10 p-2 rounded-full">
                  <ArrowDownToLine className="w-5 h-5 text-[#07BEB8]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">To</p>
                  <p className="text-lg font-bold text-[#013364]">
                    {formatCurrency(transaction.amount * transaction.exchangeRate, transaction.toCurrency)}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Exchange Rate: 1 {transaction.fromCurrency} = {transaction.exchangeRate.toFixed(4)}{" "}
              {transaction.toCurrency}
            </div>
          </div>

          {/* Transaction Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-[#07BEB8]" />
                <p className="text-sm text-gray-500">Date & Time</p>
              </div>
              <p className="mt-1 font-medium text-[#013364]">{transaction.date}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="flex items-center space-x-2">
                <Timer className="w-4 h-4 text-[#07BEB8]" />
                <p className="text-sm text-gray-500">Processing Time</p>
              </div>
              <p className="mt-1 font-medium text-[#013364]">{transaction.timeTaken}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="flex items-center space-x-2">
                <Receipt className="w-4 h-4 text-[#07BEB8]" />
                <p className="text-sm text-gray-500">Fees</p>
              </div>
              <p className="mt-1 font-medium text-[#013364]">
                {formatCurrency(transaction.fees, transaction.fromCurrency)}
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="flex items-center space-x-2">
                <Wallet className="w-4 h-4 text-[#07BEB8]" />
                <p className="text-sm text-gray-500">Payment Method</p>
              </div>
              <p className="mt-1 font-medium text-[#013364]">Bank Transfer</p>
            </div>
          </div>

          {/* Transaction Flow */}
          <div className="border-t pt-4">
            <h3 className="text-md font-semibold text-[#013364] mb-4">Transaction Flow</h3>
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-200" />

              {/* Stages */}
              <div className="relative flex justify-between max-w-[450px] mx-auto">
                {stages.map((stage, index) => {
                  const status = getStageStatus(index)
                  const StageIcon = stage.icon
                  return (
                    <div key={stage.name} className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 z-10
                          ${
                            status === "completed"
                              ? "bg-green-100"
                              : status === "in-progress"
                                ? "bg-blue-100"
                                : status === "failed"
                                  ? "bg-red-100"
                                  : "bg-gray-100"
                          }`}
                      >
                        <StageIcon
                          className={`w-6 h-6
                            ${
                              status === "completed"
                                ? "text-green-500"
                                : status === "in-progress"
                                  ? "text-blue-500"
                                  : status === "retrying"
                                    ? "text-orange-500"
                                    : "text-gray-400"
                            }`}
                        />
                      </div>
                      <p
                        className="text-xs text-[#013364] text-center w-20 whitespace-nowrap overflow-hidden text-ellipsis"
                        title={stage.name}
                      >
                        {stage.name}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4">
            <Button
              className="flex-1 bg-button-gradient text-white hover:opacity-90 transition-opacity duration-200"
              onClick={() => {
                console.log("Downloading receipt...")
              }}
            >
              Download Receipt
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

