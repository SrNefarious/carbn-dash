"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const users = [
  { id: 1, name: "John Doe", role: "Admin", status: "Active", lastLogin: "2023-05-15" },
  { id: 2, name: "Jane Smith", role: "User", status: "Inactive", lastLogin: "2023-05-10" },
  { id: 3, name: "Bob Johnson", role: "Manager", status: "Active", lastLogin: "2023-05-14" },
  // Add more dummy data as needed
]

export function UsersTable() {
  const [selectedUser, setSelectedUser] = useState<number | null>(null)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Login</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow
            key={user.id}
            onClick={() => setSelectedUser(user.id)}
            className={`cursor-pointer ${selectedUser === user.id ? "bg-gray-100" : ""}`}
          >
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
            <TableCell>{user.lastLogin}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

