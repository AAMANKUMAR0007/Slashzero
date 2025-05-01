"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function SplashPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Check if the popup has been shown before
    const hasShownPopup = localStorage.getItem("hasShownPopup")

    if (!hasShownPopup) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been registered for our free class!",
      })
      setIsOpen(false)
      localStorage.setItem("hasShownPopup", "true")
      setIsLoading(false)
    }, 1000)
  }

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("hasShownPopup", "true")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Join our free class!</DialogTitle>
          <DialogDescription>
            Experience a sneak peek into our IoT & Robotics world. Let's build the future – together.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="flex-1" disabled={isLoading}>
              {isLoading ? "Joining..." : "Join Now"}
            </Button>
            <Button type="button" variant="outline" onClick={handleClose} className="flex-1">
              No Thanks
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
