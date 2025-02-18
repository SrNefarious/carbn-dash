import { UsersTable } from "@/components/users-table"
import { UserDetails } from "@/components/user-details"

export default function UserManagementPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <UsersTable />
        </div>
        <div>
          <UserDetails />
        </div>
      </div>
    </div>
  )
}

