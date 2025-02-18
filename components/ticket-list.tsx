import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const tickets = [
  { id: "T-001", subject: "Payment Issue", status: "Open", agent: "John Doe" },
  { id: "T-002", subject: "Account Verification", status: "In Progress", agent: "Jane Smith" },
  { id: "T-003", subject: "API Integration Help", status: "Closed", agent: "Bob Johnson" },
  { id: "T-004", subject: "Refund Request", status: "Open", agent: "Alice Brown" },
  { id: "T-005", subject: "Security Concern", status: "In Progress", agent: "John Doe" },
]

export function TicketList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Support Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket ID</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Assigned Agent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell>{ticket.id}</TableCell>
                <TableCell>{ticket.subject}</TableCell>
                <TableCell>{ticket.status}</TableCell>
                <TableCell>{ticket.agent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

