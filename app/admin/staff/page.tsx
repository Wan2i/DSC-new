"use client"

import { useState } from "react"
import { Plus, Pencil, Trash2, X } from "lucide-react"

type Staff = {
  id: string
  name: string
  role: "Marshal" | "Moderator" | "Admin"
  phone: string
  email: string
  accountNumber?: string
}

export default function StaffManagementPage() {
  const [showForm, setShowForm] = useState(false)
  const [editingStaff, setEditingStaff] = useState<Staff | null>(null)
  const [staff, setStaff] = useState<Staff[]>([
    { id: "STF001", name: "Ahmad Razak", role: "Marshal", phone: "+60 12-345 6789", email: "ahmad@dsc.com" },
    { id: "STF002", name: "Sarah Lee", role: "Moderator", phone: "+60 12-345 6790", email: "sarah@dsc.com" },
    { id: "STF003", name: "John Tan", role: "Admin", phone: "+60 12-345 6791", email: "john@dsc.com" },
  ])

  const handleAddStaff = () => {
    setEditingStaff(null)
    setShowForm(true)
  }

  const handleEditStaff = (staff: Staff) => {
    setEditingStaff(staff)
    setShowForm(true)
  }

  const handleDeleteStaff = (id: string) => {
    if (confirm("Are you sure you want to delete this staff member?")) {
      setStaff(staff.filter((s) => s.id !== id))
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Staff Management</h2>
          <p className="text-muted-foreground">Manage team members and roles</p>
        </div>
        <button
          onClick={handleAddStaff}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Staff
        </button>
      </div>

      {/* Staff Table */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Staff ID</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Role</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Phone</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Email</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((member) => (
                <tr key={member.id} className="border-t border-border hover:bg-secondary/50">
                  <td className="py-4 px-6 text-sm font-mono text-muted-foreground">{member.id}</td>
                  <td className="py-4 px-6 text-sm font-medium text-foreground">{member.name}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        member.role === "Admin"
                          ? "bg-primary/20 text-primary"
                          : member.role === "Moderator"
                            ? "bg-blue-500/20 text-blue-500"
                            : "bg-green-500/20 text-green-500"
                      }`}
                    >
                      {member.role}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{member.phone}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{member.email}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEditStaff(member)}
                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                      >
                        <Pencil className="w-4 h-4 text-blue-500" />
                      </button>
                      <button
                        onClick={() => handleDeleteStaff(member.id)}
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

      {/* Add/Edit Staff Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card border border-border rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">{editingStaff ? "Edit Staff" : "Add New Staff"}</h3>
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
                  defaultValue={editingStaff?.name}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Role <span className="text-destructive">*</span>
                </label>
                <select
                  defaultValue={editingStaff?.role}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Marshal">Marshal</option>
                  <option value="Moderator">Moderator</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  defaultValue={editingStaff?.phone}
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
                  defaultValue={editingStaff?.email}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Account Number</label>
                <input
                  type="text"
                  defaultValue={editingStaff?.accountNumber}
                  placeholder="Optional"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                  {editingStaff ? "Update" : "Add"} Staff
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
