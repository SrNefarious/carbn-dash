"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

const data = [
  { date: "2023-05-09", requests: 1200 },
  { date: "2023-05-10", requests: 1900 },
  { date: "2023-05-11", requests: 1600 },
  { date: "2023-05-12", requests: 2100 },
  { date: "2023-05-13", requests: 1800 },
  { date: "2023-05-14", requests: 1400 },
  { date: "2023-05-15", requests: 2300 },
]

export function APIUsageStats() {
  return (
    <Card className="bg-white shadow-md border border-[#07BEB8]/20">
      <CardHeader>
        <CardTitle className="text-[#013364]">API Usage Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#07BEB8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#07BEB8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="requests" stroke="#07BEB8" fillOpacity={1} fill="url(#colorRequests)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

