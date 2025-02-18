"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Copy, Key, Trash2 } from "lucide-react"

const apiKeys = [
  { id: 1, name: "Production Key", key: "sk_live_1234567890abcdef", created: "2023-05-01", lastUsed: "2023-05-15" },
  { id: 2, name: "Test Key", key: "sk_test_1234567890abcdef", created: "2023-05-10", lastUsed: "2023-05-14" },
]

export function APIKeyManagement() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newKeyName, setNewKeyName] = useState("")

  const handleCreateKey = () => {
    // Logic to create a new API key would go here
    console.log("Creating new API key:", newKeyName)
    setIsDialogOpen(false)
    setNewKeyName("")
  }

  return (
    <Card className="bg-white shadow-md border border-[#07BEB8]/20">
      <CardHeader>
        <CardTitle className="text-[#013364]">API Keys</CardTitle>
        <CardDescription>Manage your API keys for secure access to Carbn services.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button
            onClick={() => setIsDialogOpen(true)}
            className="bg-button-gradient text-white hover:opacity-90 transition-opacity duration-200"
          >
            <Key className="mr-2 h-4 w-4" /> Create New API Key
          </Button>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Key</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Used</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apiKeys.map((key) => (
                <TableRow key={key.id}>
                  <TableCell>{key.name}</TableCell>
                  <TableCell>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      {key.key.slice(0, 10)}...{key.key.slice(-4)}
                    </code>
                  </TableCell>
                  <TableCell>{key.created}</TableCell>
                  <TableCell>{key.lastUsed}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(key.key)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New API Key</DialogTitle>
            <DialogDescription>Enter a name for your new API key.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleCreateKey} className="bg-button-gradient text-white hover:opacity-90">
              Create Key
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

