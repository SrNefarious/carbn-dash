import { TicketList } from "@/components/ticket-list"
import { LiveChat } from "@/components/live-chat"

export default function SupportPage() {
  return (
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <TicketList />
        <LiveChat />
      </div>
    </div>
  )
}

