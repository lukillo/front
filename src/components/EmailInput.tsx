'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from "@/hooks/use-toast"

function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

export function EmailInput() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isValidInput, setIsValidInput] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setIsValidInput(isValidEmail(email));
  }, [email]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidInput) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
      })
      return
    }
    
    setIsLoading(true)
    //const result = await sendSingleEmail(email)
    setIsLoading(false)

    toast({
      title: "Success",
      description: "Email added successfully!",
    })
    setEmail('')
  }

  const buttonClass = `whitespace-nowrap transition-colors ${
    isValidEmail(email)
      ? "bg-accent hover:bg-accent-dark text-white"
      : "bg-accent/50 hover:bg-accent/60 text-white cursor-not-allowed"
  }`

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
          disabled={isLoading}
        />
        <Button 
          type="submit" 
          className={buttonClass}
          disabled={isLoading || !isValidEmail(email)}
        >
          {isLoading ? 'Adding...' : 'Add Email'}
        </Button>
      </div>
    </form>
  )
}

