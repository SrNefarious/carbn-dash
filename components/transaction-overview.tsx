"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Updated data to reflect new daily transaction count and volume
const dailyVolumes = [
  { name: "Mon", volume: 520000 },
  { name: "Tue", volume: 535000 },
  { name: "Wed", volume: 515000 },
  { name: "Thu", volume: 530000 },
  { name: "Fri", volume: 545000 },
  { name: "Sat", volume: 490000 },
  { name: "Sun", volume: 480000 },
]

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-md">
        <p className="text-sm font-semibold">{`${label}: $${payload[0].value.toLocaleString()}`}</p>
      </div>
    )
  }
  return null
}

export function TransactionOverview() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold text-primary-dark mb-4">Transaction Volume</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dailyVolumes} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="volume" fill="#07BEB8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

