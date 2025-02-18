"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts"

const data = [
  { day: "Mon", USD: 2100000, EUR: 1900000, GBP: 1600000, JPY: 1300000 },
  { day: "Tue", USD: 2300000, EUR: 2100000, GBP: 1800000, JPY: 1500000 },
  { day: "Wed", USD: 2200000, EUR: 2000000, GBP: 1700000, JPY: 1400000 },
  { day: "Thu", USD: 2400000, EUR: 2200000, GBP: 1900000, JPY: 1600000 },
  { day: "Fri", USD: 2500000, EUR: 2300000, GBP: 2000000, JPY: 1700000 },
  { day: "Sat", USD: 2000000, EUR: 1800000, GBP: 1500000, JPY: 1200000 },
  { day: "Sun", USD: 1900000, EUR: 1700000, GBP: 1400000, JPY: 1100000 },
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
        <p className="text-sm font-semibold">{`Day: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {`${entry.name}: $${entry.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function WeeklyCurrencyVolume() {
  return (
    <Card className="bg-white shadow-md border border-[#07BEB8]/20">
      <CardHeader>
        <CardTitle className="text-[#013364]">Weekly Currency Volume</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis tickFormatter={(value) => `$${value / 1000000}M`} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="USD" stroke="#4CAF50" strokeWidth={2} />
            <Line type="monotone" dataKey="EUR" stroke="#2196F3" strokeWidth={2} />
            <Line type="monotone" dataKey="GBP" stroke="#FFC107" strokeWidth={2} />
            <Line type="monotone" dataKey="JPY" stroke="#FF5722" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

