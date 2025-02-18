"use client"

import { TableHeader } from "@/components/ui/table"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { TransactionDetail } from "./transaction-detail"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpDown } from "lucide-react"

const transactions = [
  {
    id: "TX123456",
    amount: 1234.56,
    status: "Completed",
    date: "2023-05-15",
    fromCurrency: "USD",
    toCurrency: "EUR",
    fees: 12.35,
    timeTaken: "330s",
    exchangeRate: 0.92,
  },
  {
    id: "TX123457",
    amount: 2345.67,
    status: "Pending",
    date: "2023-05-15",
    fromCurrency: "GBP",
    toCurrency: "JPY",
    fees: 23.46,
    timeTaken: "225s",
    exchangeRate: 165.25,
  },
  {
    id: "TX123458",
    amount: 3456.78,
    status: "Retrying",
    date: "2023-05-14",
    fromCurrency: "EUR",
    toCurrency: "USD",
    fees: 34.57,
    timeTaken: "135s",
    exchangeRate: 1.08,
  },
  {
    id: "TX123459",
    amount: 4567.89,
    status: "Completed",
    date: "2023-05-14",
    fromCurrency: "JPY",
    toCurrency: "GBP",
    fees: 45.68,
    timeTaken: "260s",
    exchangeRate: 0.006,
  },
  {
    id: "TX123460",
    amount: 5678.9,
    status: "In Progress",
    date: "2023-04-30",
    fromCurrency: "USD",
    toCurrency: "AUD",
    fees: 56.79,
    timeTaken: "370s",
    exchangeRate: 1.42,
  },
  {
    id: "TX123461",
    amount: 6789.01,
    status: "Completed",
    date: "2023-04-15",
    fromCurrency: "CAD",
    toCurrency: "EUR",
    fees: 67.89,
    timeTaken: "235s",
    exchangeRate: 0.68,
  },
  {
    id: "TX123462",
    amount: 7890.12,
    status: "Retrying",
    date: "2023-03-28",
    fromCurrency: "AUD",
    toCurrency: "USD",
    fees: 78.9,
    timeTaken: "110s",
    exchangeRate: 0.7,
  },
  {
    id: "TX123463",
    amount: 8901.23,
    status: "Completed",
    date: "2023-03-10",
    fromCurrency: "EUR",
    toCurrency: "GBP",
    fees: 89.01,
    timeTaken: "280s",
    exchangeRate: 0.86,
  },
  {
    id: "TX123464",
    amount: 9012.34,
    status: "Pending",
    date: "2023-02-22",
    fromCurrency: "JPY",
    toCurrency: "USD",
    fees: 90.12,
    timeTaken: "150s",
    exchangeRate: 0.007,
  },
  {
    id: "TX123465",
    amount: 10123.45,
    status: "In Progress",
    date: "2023-02-05",
    fromCurrency: "GBP",
    toCurrency: "CAD",
    fees: 101.23,
    timeTaken: "315s",
    exchangeRate: 1.28,
  },
]

const formatCurrency = (amount: number, currency: string) => {
  return amount.toLocaleString(undefined, { style: "currency", currency: currency })
}

export function TransactionTable() {
  const [selectedTransaction, setSelectedTransaction] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" })

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
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1
        }
        return 0
      })
    }

    return filtered
  }, [searchTerm, statusFilter, sortConfig])

  const requestSort = (key) => {
    let direction = "ascending"
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Retrying":
        return "bg-orange-100 text-orange-800"
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
                <SelectItem value="Retrying">Retrying</SelectItem>
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

