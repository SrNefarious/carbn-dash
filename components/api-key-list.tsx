import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const apiKeys = [
  { id: 1, key: "sk_test_1234", created: "2023-05-01", usage: 1520 },
  { id: 2, key: "sk_test_5678", created: "2023-05-10", usage: 750 },
  { id: 3, key: "sk_test_9012", created: "2023-05-15", usage: 300 },
]

export function APIKeyList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>API Keys</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>API Key</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Usage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apiKeys.map((key) => (
              <TableRow key={key.id}>
                <TableCell>{key.key}</TableCell>
                <TableCell>{key.created}</TableCell>
                <TableCell>{key.usage} requests</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

