import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, UserCheck, AlertTriangle, FileCheck } from "lucide-react"

const complianceMetrics = [
  { name: "KYC Verifications", value: "99.8%", status: "good", icon: UserCheck, change: "+0.2%" },
  { name: "AML Checks", value: "100%", status: "good", icon: ShieldCheck, change: "0%" },
  { name: "Risk Assessments", value: "98.5%", status: "warning", icon: AlertTriangle, change: "+1.5%" },
  { name: "Regulatory Reports", value: "100%", status: "good", icon: FileCheck, change: "0%" },
]

export function ComplianceDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {complianceMetrics.map((metric) => (
        <Card key={metric.name} className="bg-white shadow-md border border-[#07BEB8]/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#013364]">{metric.name}</CardTitle>
            <metric.icon
              className={`h-4 w-4 ${
                metric.status === "good"
                  ? "text-green-500"
                  : metric.status === "warning"
                    ? "text-yellow-500"
                    : "text-red-500"
              }`}
            />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#013364]">{metric.value}</div>
            <p className="text-xs text-[#07BEB8]">{metric.change} from last month</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

