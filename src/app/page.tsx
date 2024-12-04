'use client'

import { Header } from '@/components/Header'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-secondary-light">
      <Header />
      <main className="container mx-auto mt-8 p-4">
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Email Campaign Management</CardTitle>
            </CardHeader>
        </Card>
      </main>
    </div>
  )
}

