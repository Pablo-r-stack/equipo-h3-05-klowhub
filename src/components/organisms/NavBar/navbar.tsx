'use client'
import { Button, NavIconButton, NavLogo, NavMenu, SearchForm, SheetNav } from '@/components'
import { Route } from '@/const'
import { Bell, SearchIcon, ShoppingCart, User, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const NavBar = () => {
  const [openSearch, setOpenSearch] = useState(false)
  const session = true
  return (
    <header className='backdrop-blur-md sticky top-0 z-50 w-full h-[121px] bg-none border-b flex justify-between items-center px-8 py-5'>
      <NavLogo className='hidden sm:flex' />
      {!openSearch && (
        <Image src='/assets/klowhub-logo.png' alt='logo' width={80} height={40} className='flex sm:hidden' />
      )}

      <NavMenu />
      <div className='flex w-full sm:w-auto justify-end gap-4 pl-8 xl:border-l'>
        {openSearch && <SearchForm className='sm:hidden' />}
        <SearchForm className='hidden sm:flex' />
        <SheetNav />
        <Button variant='outline' size='icon' className='flex sm:hidden' onClick={() => setOpenSearch(!openSearch)}>
          {openSearch ? <XIcon /> : <SearchIcon />}
        </Button>
        <div className='hidden xl:flex items-center justify-center gap-4'>
          {session ? (
            <>
              <NavIconButton icon={Bell} label='Notifications' />
              <NavIconButton icon={ShoppingCart} label='Cart' />
              <NavIconButton icon={User} label='Profile' />
            </>
          ) : (
            <>
              <Link href={Route.Login}>
                <Button variant='ghost' className='hover:bg-purple-700 hover:text-white primary-btn' aria-label='login'>
                  Iniciar Sesión
                </Button>
              </Link>
              <Link href={Route.Register}>
                <Button variant='outline' className='text-white  outline-btn' aria-label='login'>
                  Registrate
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export { NavBar }
