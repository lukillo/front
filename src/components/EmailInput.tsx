'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/hooks/use-toast'

export function EmailInput() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter an email address.",
        variant: "destructive",
      })
      return
    }
    // Here you would typically send the email to your server
    console.log('Adding email:', email)
    toast({
      title: "Success",
      description: "Email added successfully!",
    })
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Label htmlFor="single-email">Add Single Email</Label>
      <div className="flex gap-2">
        <Input
          id="single-email"
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" className="bg-accent hover:bg-accent-dark text-white whitespace-nowrap">
          Add Email
        </Button>
      </div>
    </form>
  )
}

