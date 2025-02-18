import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, ArrowUpRight, DollarSign } from "lucide-react"

// New calculations
const dailyTransactions = 305 // Approximately 300 daily transactions
const daysInMonth = 30 // Assuming a 30-day month for simplicity
const totalMonthlyTransactions = dailyTransactions * daysInMonth
const totalMonthlyVolume = 15789432 // Keeping this the same as before
const averageTransactionValue = (totalMonthlyVolume / totalMonthlyTransactions).toFixed(2)

const analyticsMetrics = [
  {
    name: "Total Monthly Transactions",
    value: totalMonthlyTransactions.toLocaleString(),
    change: "+5.2%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    name: "Average Transaction Value",
    value: `$${averageTransactionValue}`,
    change: "+2.8%",
    trend: "up",
    icon: ArrowUpRight,
  },
  { name: "Success Rate", value: "99.87%", change: "+0.05%", trend: "up", icon: ArrowUpRight },
  {
    name: "Total Monthly Volume",
    value: `$${totalMonthlyVolume.toLocaleString()}`,
    change: "+7.1%",
    trend: "up",
    icon: DollarSign,
  },
]

export function AnalyticsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {analyticsMetrics.map((metric) => (
        <Card key={metric.name} className="bg-white shadow-md border border-[#07BEB8]/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#013364]">{metric.name}</CardTitle>
            <metric.icon className={`h-4 w-4 ${metric.trend === "up" ? "text-green-500" : "text-red-500"}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#013364]">{metric.value}</div>
            <p className={`text-xs ${metric.trend === "up" ? "text-green-500" : "text-red-500"}`}>
              {metric.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

