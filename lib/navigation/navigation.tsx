"use client"

import { useRouter, usePathname } from "next/navigation"
import { useCallback } from "react"
import { routes } from "./route"

export function useNavigation() {
    const router = useRouter()
    const pathname = usePathname()

    const navigateTo = useCallback(
        (path: string) => {
            router.push(path)
        },
        [router],
    )

    const isActive = useCallback(
        (path: string) => {
            return pathname === path
        },
        [pathname],
    )

    return {
        navigateTo,
        isActive,
        routes,
        router,
        pathname,
    }
}
