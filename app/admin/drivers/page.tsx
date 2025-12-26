"use client"

import { useState } from "react"
import { Plus, Pencil, Trash2, X, Trophy } from "lucide-react"

type Driver = {
  id: string
  name: string
  phone: string
  email: string
  sessions: number
  fastestLap: string
}

export default function DriverManagementPage() {
  const [showForm, setShowForm] = useState(false)
  const [editingDriver, setEditingDriver] = useState<Driver | null>(null)
  const [drivers, setDrivers] = useState<Driver[]>([
    {
      id: "DRV001",
      name: "Alex Wong",
      phone: "+60 12-345 6789",
      email: "alex@example.com",
      sessions: 45,
      fastestLap: "00:42.125",
    },
    {
      id: "DRV002",
      name: "Maria Santos",
      phone: "+60 12-345 6790",
      email: "maria@example.com",
      sessions: 38,
      fastestLap: "00:43.890",
    },
    {
      id: "DRV003",
      name: "Raj Kumar",
      phone: "+60 12-345 6791",
      email: "raj@example.com",
      sessions: 52,
      fastestLap: "00:41.234",
    },
  ])

  const handleAddDriver = () => {
    setEditingDriver(null)
    setShowForm(true)
  }

  const handleEditDriver = (driver: Driver) => {
    setEditingDriver(driver)
    setShowForm(true)
  }

  const handleDeleteDriver = (id: string) => {
    if (confirm("Are you sure you want to delete this driver?")) {
      setDrivers(drivers.filter((d) => d.id !== id))
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Driver Management</h2>
          <p className="text-muted-foreground">Track membership and performance data</p>
        </div>
        <button
          onClick={handleAddDriver}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Driver
        </button>
      </div>

      {/* Drivers Table */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Driver ID</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Phone</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Email</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Sessions</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-primary" />
                    Fastest Lap
                  </div>
                </th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver) => (
                <tr key={driver.id} className="border-t border-border hover:bg-secondary/50">
                  <td className="py-4 px-6 text-sm font-mono text-muted-foreground">{driver.id}</td>
                  <td className="py-4 px-6 text-sm font-medium text-foreground">{driver.name}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{driver.phone}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{driver.email}</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-500">
                      {driver.sessions} sessions
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-mono text-primary font-bold">{driver.fastestLap}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEditDriver(driver)}
                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                      >
                        <Pencil className="w-4 h-4 text-blue-500" />
                      </button>
                      <button
                        onClick={() => handleDeleteDriver(driver.id)}
                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Driver Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card border border-border rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">{editingDriver ? "Edit Driver" : "Add New Driver"}</h3>
              <button
                onClick={() => setShowForm(false)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  defaultValue={editingDriver?.name}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  defaultValue={editingDriver?.phone}
                  placeholder="+60 12-345 6789"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  defaultValue={editingDriver?.email}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {editingDriver ? "Update" : "Add"} Driver
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
