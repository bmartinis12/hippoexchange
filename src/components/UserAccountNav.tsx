"use client"

import { User } from "@/payload-types"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"

const UserAccountNav = ({ user }: { user: User }) => {
    const { signOut } = useAuth();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="overflow-visible" asChild>
                <Button variant='ghost' size='sm' className="relative">My account</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white w-60" align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-0.5 leading-none">
                        <p className="text-sm font-medium text-black">{user.email.split('@')[0]}</p>
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href='/sell'>Seller Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOut} className="cursor-pointer" >
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserAccountNav