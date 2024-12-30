'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface NavIconButtonProps {
  icon: LucideIcon
  label: string
  onClick?: () => void
  className?: string
}

const NavIconButton = ({ icon: Icon, label, onClick, className }: NavIconButtonProps) => {
  return (
    <Button
      variant='ghost'
      size='icon'
      className={cn('text-white hover:bg-purple-700', className)}
      onClick={onClick}
      aria-label={label}
    >
      <Icon className='h-5 w-5' />
    </Button>
  )
}

export { NavIconButton }
