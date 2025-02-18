import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function APIDocs() {
  return (
    <Card className="bg-white shadow-md border border-[#07BEB8]/20">
      <CardHeader>
        <CardTitle className="text-[#013364]">API Documentation</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="authentication" className="space-y-4">
          <TabsList>
            <TabsTrigger value="authentication">Authentication</TabsTrigger>
            <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
            <TabsTrigger value="errors">Errors</TabsTrigger>
          </TabsList>
          <TabsContent value="authentication" className="space-y-4">
            <h3 className="text-lg font-semibold">Authentication</h3>
            <p>To authenticate requests, include your API key in the Authorization header:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              {`
Authorization: Bearer YOUR_API_KEY
              `.trim()}
            </pre>
          </TabsContent>
          <TabsContent value="endpoints" className="space-y-4">
            <h3 className="text-lg font-semibold">Endpoints</h3>
            <h4 className="font-medium">Create Transaction</h4>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              {`
POST https://api.carbn.com/v1/transactions

{
  "amount": 1000,
  "currency": "USD",
  "source": "tok_visa"
}
              `.trim()}
            </pre>
          </TabsContent>
          <TabsContent value="errors" className="space-y-4">
            <h3 className="text-lg font-semibold">Errors</h3>
            <p>Carbn uses conventional HTTP response codes to indicate the success or failure of an API request.</p>
            <ul className="list-disc pl-5">
              <li>2xx: Success</li>
              <li>4xx: Error that failed given the information provided</li>
              <li>5xx: Errors that are not your fault</li>
            </ul>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

