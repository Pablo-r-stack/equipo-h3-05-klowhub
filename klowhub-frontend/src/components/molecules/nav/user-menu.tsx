'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  CreditCard,
  LifeBuoy,
  LogOut,
  MessageSquare,
  Settings,
  User,
} from "lucide-react"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import UserAvatar from "@/components/atoms/user-avatar"
import { useAuth } from "@/context/AuthContext"

const UserMenu = () => {
  const {logOut, user} = useAuth();
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild className="active:border-transparent">
      <Button variant="ghost" className="hover:bg-transparent active:bg-transparent active:outline-none active:border-transparent">
        <UserAvatar avatarUrl={user?.avatarUrl} name={user?.name} />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User />
          <span>Perfil</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard />
          <span>Suscripciones</span>
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LifeBuoy />
        <span>Soporte</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
          <Settings />
          <span>Configuración</span>
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={()=>logOut()}>
        <LogOut />
        <span>Cerrar Sesión</span>
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export { UserMenu }