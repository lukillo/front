'use client'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Header } from '@/components/Header'
import { EmailInput } from '@/components/EmailInput'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AdminPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()


    setIsLoading(true)
    setIsLoading(false)

  }

  return (
    <div className="min-h-screen bg-secondary-light">
      <Header />
      <main className="container mx-auto mt-8 p-4">
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Email Campaign Management</CardTitle>
            </CardHeader>
            <CardContent>
            <div className="space-y-6">
              <EmailInput />
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or Upload Files</span>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent-dark text-white"
                  disabled={isLoading}
                >
                  {isLoading ? 'Uploading...' : 'Submit Files'}
                </Button>
              </form>
            </div>
        </CardContent>
        </Card>
      </main>
    </div>
  )
}

