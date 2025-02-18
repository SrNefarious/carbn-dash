import { APIKeyManagement } from "@/components/api-key-management"
import { APIDocs } from "@/components/api-docs"
import { APIUsageStats } from "@/components/api-usage-stats"

export default function APIManagementPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <APIKeyManagement />
          <APIUsageStats />
        </div>
        <APIDocs />
      </div>
    </div>
  )
}

