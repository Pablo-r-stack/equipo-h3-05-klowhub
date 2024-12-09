import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface NavLogoProps {
  className?: string
}

const NavLogo = ({ className }: NavLogoProps) => {
  return (
    <Link href='/' className={cn('flex items-center space-x-2 text-5xl font-bold ', className)}>
      <span className='text-primary_500 drop-shadow-lg'>KLOW</span>{' '}
      <span className='text-secondary_500 drop-shadow-lg'>HUB</span>
      <div className='relative h-[49px] w-[62px]'>
        <Image src='/assets/klowhub-logo.png' alt='logo' fill className='object-contain drop-shadow-sm' />
      </div>
    </Link>
  )
}

export { NavLogo }
