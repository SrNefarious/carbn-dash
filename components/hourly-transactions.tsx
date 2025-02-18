"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts"

const data = [
  { hour: "00:00", successful: 120, failed: 2, retry: 1 },
  { hour: "02:00", successful: 75, failed: 1, retry: 1 },
  { hour: "04:00", successful: 80, failed: 1, retry: 0 },
  { hour: "06:00", successful: 150, failed: 2, retry: 1 },
  { hour: "08:00", successful: 250, failed: 3, retry: 2 },
  { hour: "10:00", successful: 300, failed: 4, retry: 2 },
  { hour: "12:00", successful: 280, failed: 3, retry: 2 },
  { hour: "14:00", successful: 320, failed: 4, retry: 3 },
  { hour: "16:00", successful: 290, failed: 3, retry: 2 },
  { hour: "18:00", successful: 220, failed: 2, retry: 1 },
  { hour: "20:00", successful: 180, failed: 2, retry: 1 },
  { hour: "22:00", successful: 140, failed: 1, retry: 1 },
]

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<{ name: string; value: number; color: string }>
  label?: string
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-md">
        <p className="text-sm font-semibold">{`Time: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function HourlyTransactions() {
  return (
    <Card className="bg-white shadow-md border border-[#07BEB8]/20">
      <CardHeader>
        <CardTitle className="text-[#013364]">Hourly Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="successful" stroke="#07BEB8" strokeWidth={2} />
            <Line type="monotone" dataKey="failed" stroke="#FF6B6B" strokeWidth={2} />
            <Line type="monotone" dataKey="retry" stroke="#FFD93D" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

