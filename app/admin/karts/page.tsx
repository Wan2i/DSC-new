"use client"

import { useState } from "react"
import { Plus, X, AlertTriangle, Wrench, CheckCircle } from "lucide-react"

type KartCategory = {
  name: string
  total: number
  available: number
  karts: Kart[]
}

type Kart = {
  number: number
  status: "available" | "maintenance" | "risky"
}

export default function KartManagementPage() {
  const [showIssueForm, setShowIssueForm] = useState(false)
  const [categories] = useState<KartCategory[]>([
    {
      name: "Category A",
      total: 8,
      available: 6,
      karts: [
        { number: 1, status: "available" },
        { number: 2, status: "available" },
        { number: 3, status: "maintenance" },
        { number: 4, status: "available" },
        { number: 5, status: "available" },
        { number: 6, status: "available" },
        { number: 7, status: "risky" },
        { number: 8, status: "available" },
      ],
    },
    {
      name: "Category B",
      total: 10,
      available: 8,
      karts: [
        { number: 9, status: "available" },
        { number: 10, status: "available" },
        { number: 11, status: "available" },
        { number: 12, status: "maintenance" },
        { number: 13, status: "available" },
        { number: 14, status: "available" },
        { number: 15, status: "available" },
        { number: 16, status: "available" },
        { number: 17, status: "maintenance" },
        { number: 18, status: "available" },
      ],
    },
    {
      name: "Category C",
      total: 6,
      available: 5,
      karts: [
        { number: 19, status: "available" },
        { number: 20, status: "available" },
        { number: 21, status: "available" },
        { number: 22, status: "available" },
        { number: 23, status: "maintenance" },
        { number: 24, status: "available" },
      ],
    },
  ])

  const getStatusIcon = (status: Kart["status"]) => {
    switch (status) {
      case "available":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "maintenance":
        return <Wrench className="w-5 h-5 text-yellow-500" />
      case "risky":
        return <AlertTriangle className="w-5 h-5 text-red-500" />
    }
  }

  const getStatusLabel = (status: Kart["status"]) => {
    switch (status) {
      case "available":
        return "Available"
      case "maintenance":
        return "Maintenance"
      case "risky":
        return "High Risk"
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Kart Management</h2>
          <p className="text-muted-foreground">Monitor fleet status and maintenance</p>
        </div>
        <button
          onClick={() => setShowIssueForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Issue
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.name} className="bg-card border border-border rounded-lg p-6">
            {/* Category Header */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">{category.name}</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Karts</p>
                  <p className="text-2xl font-bold text-foreground">{category.total}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Available</p>
                  <p className="text-2xl font-bold text-primary">{category.available}</p>
                </div>
              </div>
            </div>

            {/* Karts Grid */}
            <div className="space-y-2">
              {category.karts.map((kart) => (
                <div
                  key={kart.number}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                    kart.status === "available"
                      ? "bg-green-500/10 border-green-500/30"
                      : kart.status === "maintenance"
                        ? "bg-yellow-500/10 border-yellow-500/30"
                        : "bg-red-500/10 border-red-500/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {getStatusIcon(kart.status)}
                    <span className="font-mono font-bold text-foreground">Kart #{kart.number}</span>
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      kart.status === "available"
                        ? "text-green-500"
                        : kart.status === "maintenance"
                          ? "text-yellow-500"
                          : "text-red-500"
                    }`}
                  >
                    {getStatusLabel(kart.status)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add Issue Modal */}
      {showIssueForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card border border-border rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Report Kart Issue</h3>
              <button
                onClick={() => setShowIssueForm(false)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Kart Number <span className="text-destructive">*</span>
                </label>
                <select
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select Kart</option>
                  {categories.flatMap((cat) =>
                    cat.karts.map((kart) => (
                      <option key={kart.number} value={kart.number}>
                        Kart #{kart.number} ({cat.name})
                      </option>
                    )),
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Issue Title <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Engine misfire"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                <textarea
                  rows={4}
                  placeholder="Provide additional details about the issue..."
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowIssueForm(false)}
                  className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Report Issue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
