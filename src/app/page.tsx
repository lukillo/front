'use client'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Header } from '@/components/Header'
import { FileUpload } from '@/components/FileUpload'
import { EmailInput } from '@/components/EmailInput'
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { sendFiles } from '@/utils/api'

export default function AdminPage() {
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [csvFile, setCsvFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!imageFile || !csvFile) {
      toast({
        title: "Error",
        description: "Please upload both an image and a CSV file.",
      })
      return
    }

    setIsLoading(true)
    const result = await sendFiles(imageFile, csvFile)
    setIsLoading(false)

    if (result.success) {
      toast({
        title: "Success",
        description: result.message || "Files uploaded successfully!",
      })
      setImageFile(null)
      setCsvFile(null)
    } else {
      toast({
        title: "Error",
        description: result.message || "Failed to upload files. Please try again.",
        variant: "destructive",
      })
    }
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
                <FileUpload
                  accept=".pdf,.png"
                  label="Upload Image (PDF or PNG)"
                  onFileSelect={setImageFile}
                />
                <FileUpload
                  accept=".csv"
                  label="Upload CSV"
                  onFileSelect={setCsvFile}
                />
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

