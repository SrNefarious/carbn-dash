"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { TransactionDetail } from "./transaction-detail"
import { ArrowUpDown } from "lucide-react"
import { recentTransactions, type Transaction } from "@/utils/transaction-data"
import { formatCurrency } from "@/utils/currency-formatter"

export function RecentTransactions() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" })

  const sortedTransactions = [...recentTransactions].sort((a, b) => {
    if (!sortConfig.key) return 0
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1
    }
    return 0
  })

  const requestSort = (key) => {
    let direction = "ascending"
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }

  return (
    <>
      <Card className="bg-white shadow-md border border-[#07BEB8]/20">
        <CardHeader>
          <CardTitle className="text-[#013364]">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[#013364] cursor-pointer" onClick={() => requestSort("id")}>
                    Transaction ID <ArrowUpDown className="inline ml-2 h-4 w-4" />
                  </TableHead>
                  <TableHead className="text-[#013364] cursor-pointer" onClick={() => requestSort("amount")}>
                    Amount <ArrowUpDown className="inline ml-2 h-4 w-4" />
                  </TableHead>
                  <TableHead className="text-[#013364] cursor-pointer" onClick={() => requestSort("status")}>
                    Status <ArrowUpDown className="inline ml-2 h-4 w-4" />
                  </TableHead>
                  <TableHead className="text-[#013364] cursor-pointer" onClick={() => requestSort("date")}>
                    Date <ArrowUpDown className="inline ml-2 h-4 w-4" />
                  </TableHead>
                  <TableHead className="text-[#013364]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedTransactions.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell className="font-medium text-[#013364]">{tx.id}</TableCell>
                    <TableCell className="text-[#013364]">{formatCurrency(tx.amount, tx.fromCurrency)}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          tx.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : tx.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {tx.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-[#013364]">{tx.date}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedTransaction(tx)}
                        className="text-[#07BEB8] border-[#07BEB8] hover:bg-[#07BEB8] hover:text-white whitespace-nowrap"
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

