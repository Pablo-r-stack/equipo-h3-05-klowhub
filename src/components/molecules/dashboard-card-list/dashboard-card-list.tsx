import { DashboardCard } from '@/components'
import AgentIcon from '@/components/atoms/icons/agent-icon'
import { Heart, LibraryBig, Mail } from 'lucide-react'
import Link from 'next/link'

const DashboardCardList = () => {
  return (
    <div className='container self-center flex-wrap flex items-center justify-around gap-[30px]'>
      <Link href='#' className='w-[303px]'>
        <DashboardCard title='Mis Cursos' icon={<LibraryBig size={36} />} />
      </Link>
      <Link href='#' className='w-[303px]'>
        <DashboardCard title='Favoritos' icon={<Heart size={36} />} />
      </Link>
      <Link href='#' className='w-[303px]'>
        <DashboardCard title='Mensajes' icon={<Mail size={36} />} />
      </Link>
      <Link href='#' className='w-[303px]'>
        <DashboardCard title='Contacto' icon={<AgentIcon size={36} />} />
      </Link>
    </div>
  )
}

export { DashboardCardList }
