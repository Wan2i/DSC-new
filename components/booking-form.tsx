"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigation } from "@/lib/navigation/navigation"

const TIME_SLOTS = [
  "4:30pm",
  "5:00pm",
  "5:30pm",
  "6:00pm",
  "6:30pm",
  "7:00pm",
  "7:30pm",
  "8:00pm",
  "8:30pm",
  "9:00pm",
  "9:30pm",
  "10:00pm",
  "10:30pm",
  "11:00pm",
  "11:30pm",
]

const PACKAGES = [
  { value: "Rookie", label: "Rookie", description: "Perfect for beginners" },
  { value: "Amateur", label: "Amateur", description: "For regular racers" },
  { value: "Expert", label: "Expert", description: "Advanced racing experience" },
]

export function BookingForm() {
  const [phone, setPhone] = useState("+60 ")
  const [agreed, setAgreed] = useState(false)
  const { routes, navigateTo} = useNavigation()

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const prefix = "+60 "

    if (!value.startsWith(prefix)) {
      setPhone(prefix)
      return
    }

    const raw = value.replace(/^\+60\s?/, "").replace(/\D/g, "")

    let formatted = ""
    if (raw.length > 0) {
      formatted += raw.substring(0, 2)
    }
    if (raw.length >= 3) {
      formatted += "-" + raw.substring(2, 5)
    }
    if (raw.length >= 6) {
      formatted += " " + raw.substring(5, 9)
    }

    setPhone(prefix + formatted)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    alert("Booking submitted! Check console for details.")
    navigateTo(routes.admin.dashboard)
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">Booking Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                className="bg-secondary border-border text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                className="bg-secondary border-border text-foreground"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                required
                className="bg-secondary border-border text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date" className="text-foreground">
                Date
              </Label>
              <Input
                id="date"
                name="date"
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                className="bg-secondary border-border text-foreground"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="time" className="text-foreground">
                Time Slot
              </Label>
              <Select name="time" required>
                <SelectTrigger className="bg-secondary border-border text-foreground">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  {TIME_SLOTS.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="package" className="text-foreground">
                Package
              </Label>
              <Select name="package" required>
                <SelectTrigger className="bg-secondary border-border text-foreground">
                  <SelectValue placeholder="Select a package" />
                </SelectTrigger>
                <SelectContent>
                  {PACKAGES.map((pkg) => (
                    <SelectItem key={pkg.value} value={pkg.value}>
                      <div className="flex flex-col">
                        <span className="font-medium">{pkg.label}</span>
                        <span className="text-xs text-muted-foreground">{pkg.description}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-start space-x-3 bg-secondary/50 p-4 rounded-lg">
            <Checkbox
              id="terms"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked === true)}
              className="mt-1"
            />
            <div className="space-y-1 leading-none">
              <Label htmlFor="terms" className="text-sm font-normal text-foreground cursor-pointer">
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  terms and conditions
                </a>{" "}
                and acknowledge the safety requirements
              </Label>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full text-lg" disabled={!agreed}>
            Book Now
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
