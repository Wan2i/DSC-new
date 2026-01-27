"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Pencil, Trash2 } from "lucide-react"

export type Users = {
    id: string
    name: string
    role: "Marshal" | "Moderator" | "Admin"
    phone: string
    email: string
}

export const usersColumn: ColumnDef<Users>[] = [
    {
        accessorKey: "id",
        header: "User ID",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "role",
        header: "Role"
    },
    {
        accessorKey: "phone",
        header: "Phone"
    },
    {
        accessorKey: "email",
        header: "Email"
    },
    {
        accessorKey: "action",
        header: "Action",
        cell: ({row}) => {
            <div className="flex justify-between">
                <Pencil/>
                <Trash2/>
            </div>
        }
    },
]