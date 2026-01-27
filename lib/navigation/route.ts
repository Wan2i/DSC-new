import { Users } from "lucide-react"

export const routes = {
    home: "/",
    user: {
        records: "/user/records",
        booking: "/user/booking",
    },
    admin: {
        dashboard: "/admin",
        drivers: "/admin/drivers",
        karts: "/admin/karts",
        users: "/admin/users",
    }, 
    login: "/login",
} as const

export type Route = typeof routes