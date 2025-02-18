import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stages = [
  { name: "Initiated", status: "completed" },
  { name: "Fiat to Stablecoin", status: "completed" },
  { name: "Blockchain Transit", status: "in-progress" },
  { name: "Stablecoin to Fiat", status: "pending" },
  { name: "Last Mile Payout", status: "pending" },
]

export function TransactionFlow({ status }) {
  const getStageStatus = (index) => {
    if (status === "Completed") return "completed"
    if (status === "Retrying") return index === stages.length - 1 ? "retrying" : "completed"
    if (status === "Pending") {
      if (index < 2) return "completed"
      if (index === 2) return "in-progress"
      return "pending"
    }
    return "pending"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction Flow</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          {stages.map((stage, index) => (
            <div key={stage.name} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  getStageStatus(index) === "completed"
                    ? "bg-green-500"
                    : getStageStatus(index) === "in-progress"
                      ? "bg-blue-500"
                      : getStageStatus(index) === "retrying"
                        ? "bg-orange-500"
                        : "bg-gray-300"
                }`}
              >
                {getStageStatus(index) === "completed" && (
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </div>
              <div className="text-sm mt-2">{stage.name}</div>
              {index < stages.length - 1 && <div className="w-16 h-1 bg-gray-300 mt-4"></div>}
            </div>
          ))}
        </div>
        {status === "Retrying" && (
          <div className="mt-4 text-center text-orange-500">Transaction retrying. Automatic retry in progress...</div>
        )}
      </CardContent>
    </Card>
  )
}

