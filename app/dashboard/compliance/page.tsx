import { ComplianceDashboard } from "@/components/compliance-dashboard"
import { KYBProcessTable } from "@/components/kyb-process-table"
import { ComplianceAlerts } from "@/components/compliance-alerts"

export default function CompliancePage() {
  return (
    <div className="space-y-6">
      <ComplianceDashboard />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <KYBProcessTable />
        </div>
        <div>
          <ComplianceAlerts />
        </div>
      </div>
    </div>
  )
}

