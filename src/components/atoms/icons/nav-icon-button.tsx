"use client"
import { Button } from '@/components/ui/button'
import { LucideIcon } from 'lucide-react'
import React from 'react'

interface NavIconButtonProps{
    icon: LucideIcon,
    label: string,
    onClick?: ()=> void
}

const NavIconButton = ({icon: Icon, label, onClick}: NavIconButtonProps) => {
  return (
    <Button
    variant="ghost"
    size="icon"
    className='text-white hover:bg-purple-700'
    onClick={onClick}
    aria-label={label}>
        <Icon className='h-5 w-5' />
    </Button>
  )
}

export default NavIconButton