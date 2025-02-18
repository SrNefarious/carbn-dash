import { TransactionOverview } from "@/components/transaction-overview"
import { RecentTransactions } from "@/components/recent-transactions"
import { RecentAlerts } from "@/components/recent-alerts"
import { TrendingUp, CheckCircle, Clock, DollarSign } from "lucide-react"

export default function DashboardPage() {
  // Calculate total transactions today
  const transactionsToday = 305 // Updated to approximately 300

  // Calculate success rate (over 99%)
  const successRate = 99.87 // Kept the same as before

  // Calculate average processing time (in seconds)
  const avgProcessingTime = 3.2 // Kept the same as before

  // Calculate total daily volume (adjusted based on new transaction count)
  const dailyVolume = 526314 // Approximately 305 * $1,725.62 (average transaction value)

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium text-gray-700">Total Transactions Today</h3>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-3xl font-bold text-primary">{transactionsToday.toLocaleString()}</p>
            <p className="text-sm text-green-500">+{Math.floor(Math.random() * 5) + 3}% from yesterday</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-700">Success Rate</h3>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-3xl font-bold text-green-500">{successRate.toFixed(2)}%</p>
            <p className="text-sm text-green-500">+{(Math.random() * 0.05).toFixed(2)}% from last week</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Clock className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-700">Avg. Processing Time</h3>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-3xl font-bold text-blue-500">{avgProcessingTime.toFixed(1)}s</p>
            <p className="text-sm text-green-500">-{(Math.random() * 0.3).toFixed(1)}s from last month</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <DollarSign className="h-6 w-6 text-yellow-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-700">Today's Volume</h3>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-3xl font-bold text-yellow-500">
              ${dailyVolume.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
            <p className="text-sm text-green-500">+{Math.floor(Math.random() * 5) + 3}% from yesterday</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TransactionOverview />
        </div>
        <div>
          <RecentAlerts />
        </div>
      </div>
      <RecentTransactions />
    </div>
  )
}

