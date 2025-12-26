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
        staff: "/admin/staff",
    }, 
    login: "/login",
} as const

export type Route = typeof routes