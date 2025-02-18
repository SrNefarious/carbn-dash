import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function UserDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Contact Information</h3>
            <p>Email: john.doe@example.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="font-semibold">Transaction History</h3>
            <p>Total Transactions: 56</p>
            <p>Last Transaction: 2023-05-14</p>
          </div>
          <div>
            <h3 className="font-semibold">Compliance Status</h3>
            <p className="text-green-600">Compliant</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

