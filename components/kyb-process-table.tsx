"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpDown } from "lucide-react"

const kybProcesses = [
  { id: "KYB001", customer: "Acme Inc", status: "Approved", riskScore: "Low", lastUpdated: "2023-05-15" },
  { id: "KYB002", customer: "TechCorp", status: "In Review", riskScore: "Medium", lastUpdated: "2023-05-14" },
  { id: "KYB003", customer: "Global Traders", status: "Pending", riskScore: "High", lastUpdated: "2023-05-13" },
  { id: "KYB004", customer: "Local Shop", status: "Rejected", riskScore: "High", lastUpdated: "2023-05-12" },
  { id: "KYB005", customer: "Innovate Ltd", status: "Approved", riskScore: "Low", lastUpdated: "2023-05-11" },
]

export function KYBProcessTable() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" })

  const requestSort = (key) => {
    let direction = "ascending"
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }

  const sortedProcesses = [...kybProcesses].sort((a, b) => {
    if (!sortConfig.key) return 0
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1
    }
    return 0
  })

  return (
    <Card className="bg-white shadow-md border border-[#07BEB8]/20">
      <CardHeader>
        <CardTitle className="text-[#013364]">KYB Processes</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-[#013364] cursor-pointer" onClick={() => requestSort("id")}>
                Process ID <ArrowUpDown className="inline ml-2 h-4 w-4" />
              </TableHead>
              <TableHead className="text-[#013364] cursor-pointer" onClick={() => requestSort("customer")}>
                Customer <ArrowUpDown className="inline ml-2 h-4 w-4" />
              </TableHead>
              <TableHead className="text-[#013364] cursor-pointer" onClick={() => requestSort("status")}>
                Status <ArrowUpDown className="inline ml-2 h-4 w-4" />
              </TableHead>
              <TableHead className="text-[#013364] cursor-pointer" onClick={() => requestSort("riskScore")}>
                Risk Score <ArrowUpDown className="inline ml-2 h-4 w-4" />
              </TableHead>
              <TableHead className="text-[#013364] cursor-pointer" onClick={() => requestSort("lastUpdated")}>
                Last Updated <ArrowUpDown className="inline ml-2 h-4 w-4" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedProcesses.map((process) => (
              <TableRow key={process.id}>
                <TableCell className="font-medium text-[#013364]">{process.id}</TableCell>
                <TableCell>{process.customer}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      process.status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : process.status === "In Review"
                          ? "bg-yellow-100 text-yellow-800"
                          : process.status === "Pending"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-red-100 text-red-800"
                    }`}
                  >
                    {process.status}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      process.riskScore === "Low"
                        ? "bg-green-100 text-green-800"
                        : process.riskScore === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {process.riskScore}
                  </span>
                </TableCell>
                <TableCell>{process.lastUpdated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

