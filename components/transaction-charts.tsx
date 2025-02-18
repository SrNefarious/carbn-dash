"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, Line, LineChart, Pie, PieChart, ResponsiveContainer } from "recharts"

const volumeData = [
  { name: "Jan", volume: 400 },
  { name: "Feb", volume: 300 },
  { name: "Mar", volume: 500 },
  { name: "Apr", volume: 450 },
  { name: "May", volume: 600 },
  { name: "Jun", volume: 550 },
]

const successRateData = [
  { name: "Jan", rate: 95 },
  { name: "Feb", rate: 98 },
  { name: "Mar", rate: 97 },
  { name: "Apr", rate: 99 },
  { name: "May", rate: 98 },
  { name: "Jun", rate: 99 },
]

const typeData = [
  { name: "Credit Card", value: 400 },
  { name: "Debit Card", value: 300 },
  { name: "Bank Transfer", value: 200 },
  { name: "Crypto", value: 100 },
]

export function TransactionCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Transaction Volume</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={volumeData}>
              <Bar dataKey="volume" fill="#07BEB8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Success Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={successRateData}>
              <Line type="monotone" dataKey="rate" stroke="#07BEB8" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Transaction Types</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={typeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#07BEB8" />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

