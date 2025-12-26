"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, UserCircle, Car, Bell, Settings, LogOut } from "lucide-react"
import { useNavigation } from "@/lib/navigation/navigation"

const navItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/staff", icon: Users, label: "Staff" },
  { href: "/admin/drivers", icon: UserCircle, label: "Drivers" },
  { href: "/admin/karts", icon: Car, label: "Karts" },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const { navigateTo, routes } = useNavigation()

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-20 bg-[#5A7863] flex flex-col items-center py-6">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <Car className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                  isActive ? "bg-white text-primary-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent"
                }`}
                title={item.label}
              >
                <item.icon className="w-5 h-5" />
              </Link>
            )
          })}
        </nav>

        {/* Settings & Logout */}
        <div className="flex flex-col gap-4">
          <button className="w-12 h-12 rounded-lg flex items-center justify-center text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button 
          className="w-12 h-12 rounded-lg flex items-center justify-center text-sidebar-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"
          onClick={() => navigateTo(routes.login)}
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-card">
          <div>
            <h1 className="text-xl font-bold text-foreground">DSC Karting Circuit</h1>
            <p className="text-sm text-muted-foreground">Race Control Center</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </button>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">Administrator</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}
