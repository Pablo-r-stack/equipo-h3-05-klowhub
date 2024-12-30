'use client'

import {
  Button,
  buttonVariants,
  NavIconButton,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetNavMenu,
  SheetTitle,
  SheetTrigger
} from '@/components'
import { Route } from '@/const'
import { cn } from '@/lib/utils'
import { Bell, MenuIcon, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'

function SheetNav() {
  const session = false
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='xl:hidden' variant='outline' size='icon'>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>KlowHub</SheetTitle>
        </SheetHeader>
        <SheetNavMenu />

        <div className='absolute bottom-5  flex items-center justify-between gap-4'>
          {session ? (
            <>
              <NavIconButton className={cn(buttonVariants({ variant: 'outline' }))} icon={ShoppingCart} label='Cart' />
              <NavIconButton className={cn(buttonVariants({ variant: 'outline' }))} icon={Bell} label='Notifications' />
              <NavIconButton className={cn(buttonVariants({ variant: 'outline' }))} icon={User} label='Profile' />
            </>
          ) : (
            <>
              <Link href={Route.Login}>
                <Button
                  variant='outline'
                  className='hover:bg-purple-700 hover:text-white primary-btn'
                  aria-label='login'
                >
                  Iniciar Sesión
                </Button>
              </Link>
              <Link href={Route.Register}>
                <Button variant='primary' className='text-white' aria-label='login'>
                  Registrate
                </Button>
              </Link>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export { SheetNav }
