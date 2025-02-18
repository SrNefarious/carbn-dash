"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

// Updated data to reflect 1% of the new daily volumes
const data = [
  { date: "2023-05-01", cost: 5200 },
  { date: "2023-05-02", cost: 5350 },
  { date: "2023-05-03", cost: 5150 },
  { date: "2023-05-04", cost: 5300 },
  { date: "2023-05-05", cost: 5450 },
  { date: "2023-05-06", cost: 4900 },
  { date: "2023-05-07", cost: 4800 },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-md">
        <p className="text-sm font-semibold">{`Date: ${label}`}</p>
        <p className="text-sm text-[#07BEB8]">{`Cost: $${payload[0].value.toLocaleString()}`}</p>
      </div>
    )
  }
  return null
}

export function TransactionCosts() {
  return (
    <Card className="bg-white shadow-md border border-[#07BEB8]/20">
      <CardHeader>
        <CardTitle className="text-[#013364]">Transaction Costs (1% of Volume)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis tickFormatter={(value) => `$${value}`} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="cost" fill="#07BEB8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

