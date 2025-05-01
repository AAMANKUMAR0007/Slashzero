"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      })
      setEmail("")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Want Updates on Our Programs?</h4>
      <p className="text-xs text-muted-foreground">
        Join our monthly newsletter and get free resources, class invites, and early updates.
      </p>
      <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-2">
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-9"
        />
        <Button type="submit" size="sm" disabled={isLoading} className="w-full">
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  )
}
