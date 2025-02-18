import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const complianceData = [
  { name: "KYC Verification", completed: 85 },
  { name: "AML Checks", completed: 92 },
  { name: "Risk Assessment", completed: 78 },
  { name: "Document Verification", completed: 88 },
]

export function ComplianceSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Compliance Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {complianceData.map((item) => (
            <div key={item.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{item.name}</span>
                <span className="text-sm font-medium">{item.completed}%</span>
              </div>
              <Progress value={item.completed} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

