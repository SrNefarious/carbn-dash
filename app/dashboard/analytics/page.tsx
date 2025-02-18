import { AnalyticsOverview } from "@/components/analytics-overview"
import { TransactionCosts } from "@/components/transaction-costs"
import { HourlyTransactions } from "@/components/hourly-transactions"
import { WeeklyCurrencyVolume } from "@/components/weekly-currency-volume"
import { AnalyticsAlerts } from "@/components/analytics-alerts"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <AnalyticsOverview />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <TransactionCosts />
          <HourlyTransactions />
          <WeeklyCurrencyVolume />
        </div>
        <div>
          <AnalyticsAlerts />
        </div>
      </div>
    </div>
  )
}

