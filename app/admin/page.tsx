"use client"

import { AlertTriangle, Wrench, Shield, Users, Calendar } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold text-foreground">Dashboard</h2>
        <p className="text-muted-foreground">Operational overview and real-time status</p>
      </div>

      {/* Kart Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Under Maintenance */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-yellow-500" />
            </div>
            <span className="text-3xl font-bold text-foreground">3</span>
          </div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Under Maintenance</h3>
          <p className="text-xs text-muted-foreground">Karts currently being serviced</p>
        </div>

        {/* Repair Required */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-orange-500" />
            </div>
            <span className="text-3xl font-bold text-foreground">2</span>
          </div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Repair Required</h3>
          <p className="text-xs text-muted-foreground">Karts needing immediate attention</p>
        </div>

        {/* High Risk */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-red-500" />
            </div>
            <span className="text-3xl font-bold text-foreground">1</span>
          </div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">High Risk</h3>
          <p className="text-xs text-muted-foreground">Critical safety concerns</p>
        </div>
      </div>

      {/* Operations Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Staff on Duty */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Staff on Duty</h3>
              <p className="text-xs text-muted-foreground">Current shift breakdown</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Marshals</span>
              <span className="text-lg font-bold text-foreground">4</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Moderators</span>
              <span className="text-lg font-bold text-foreground">2</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-muted-foreground">Admins</span>
              <span className="text-lg font-bold text-foreground">1</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Total Staff</span>
              <span className="text-2xl font-bold text-primary">7</span>
            </div>
          </div>
        </div>

        {/* Today's Performance */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Today's Performance</h3>
              <p className="text-xs text-muted-foreground">Real-time metrics</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Total Bookings</span>
                <span className="text-3xl font-bold text-foreground">24</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "75%" }} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">75% of daily capacity</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Total Revenue</span>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">RM 3,840</div>
                  <p className="text-xs text-muted-foreground">+12% vs yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { time: "14:32", event: "Kart #12 completed maintenance", status: "success" },
            { time: "13:15", event: "New booking confirmed for 18:00", status: "info" },
            { time: "12:48", event: "Kart #7 flagged for repair", status: "warning" },
            { time: "11:20", event: "Staff shift change completed", status: "info" },
          ].map((activity, i) => (
            <div key={i} className="flex items-center gap-4 py-2 border-b border-border last:border-0">
              <span className="text-xs text-muted-foreground font-mono w-12">{activity.time}</span>
              <span className="text-sm text-foreground flex-1">{activity.event}</span>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  activity.status === "success"
                    ? "bg-green-500/20 text-green-500"
                    : activity.status === "warning"
                      ? "bg-yellow-500/20 text-yellow-500"
                      : "bg-blue-500/20 text-blue-500"
                }`}
              >
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
