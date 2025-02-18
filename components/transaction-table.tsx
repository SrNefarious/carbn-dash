"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { TransactionDetail } from "./transaction-detail"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpDown } from "lucide-react"
import { type Transaction, transactions } from "@/utils/transaction-data"

const formatCurrency = (amount: number, currency: string) => {
  return amount.toLocaleString(undefined, { style: "currency", currency: currency })
}

type SortConfig = {
  key: keyof Transaction | null
  direction: "ascending" | "descending"
}

export function TransactionTable() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: "ascending" })

  const filteredAndSortedTransactions = useMemo(() => {
    let filtered = transactions.filter(
      (tx) =>
        tx.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tx.amount.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
        tx.fromCurrency.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tx.toCurrency.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    if (statusFilter !== "All") {
      filtered = filtered.filter((tx) => tx.status === statusFilter)
    }

    if (sortConfig.key) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === "ascending" ? -1 : 1
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === "ascending" ? 1 : -1
        }
        return 0
      })
    }

    return filtered
  }, [searchTerm, statusFilter, sortConfig])

  const requestSort = (key: keyof Transaction) => {
    let direction: "ascending" | "descending" = "ascending"
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }

  const getStatusStyle = (status: Transaction["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Retrying":
        return "bg-orange-100 text-orange-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <Input
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Statuses</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Retrying">Retrying</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="cursor-pointer" onClick={() => requestSort("id")}>
                    Transaction ID <ArrowUpDown className="inline ml-2 h-4 w-4" />
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => requestSort("amount")}>
                    Amount <ArrowUpDown className="inline ml-2 h-4 w-4" />
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => requestSort("fromCurrency")}>
                    From <ArrowUpDown className="inline ml-2 h-4 w-4" />
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => requestSort("toCurrency")}>
                    To <ArrowUpDown className="inline ml-2 h-4 w-4" />
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => requestSort("status")}>
                    Status <ArrowUpDown className="inline ml-2 h-4 w-4" />
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => requestSort("date")}>
                    Date <ArrowUpDown className="inline ml-2 h-4 w-4" />
                  </TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAndSortedTransactions.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell className="font-medium">{tx.id}</TableCell>
                    <TableCell>{formatCurrency(tx.amount, tx.fromCurrency)}</TableCell>
                    <TableCell>{tx.fromCurrency}</TableCell>
                    <TableCell>{formatCurrency(tx.amount * tx.exchangeRate, tx.toCurrency)}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusStyle(tx.status)}`}>
                        {tx.status}
                      </span>
                    </TableCell>
                    <TableCell>{tx.date}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => setSelectedTransaction(tx)}
                        className="bg-button-gradient text-white hover:opacity-90 transition-opacity duration-200"
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      {selectedTransaction && (
        <TransactionDetail transaction={selectedTransaction} onClose={() => setSelectedTransaction(null)} />
      )}
    </>
  )
}

