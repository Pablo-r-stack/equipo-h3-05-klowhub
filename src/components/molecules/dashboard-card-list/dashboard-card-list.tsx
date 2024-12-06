import Link from 'next/link'
import React from 'react'
import { DashboardCard } from '@/components';
import { Heart, LibraryBig, Mail } from 'lucide-react';
import AgentIcon from '@/components/atoms/icons/agent-icon';

const DashboardCardList = () => {
  return (
    <div className="container self-center flex items-center justify-around gap-[30px]">
        <Link href="#" className="w-[303px]">
          <DashboardCard title="Mis Cursos" icon={<LibraryBig size={36} />} />
        </Link>
        <Link href="#" className="w-[303px]">
          <DashboardCard title="Favoritos" icon={<Heart size={36} />} />
        </Link>
        <Link href="#" className="w-[303px]">
          <DashboardCard title="Mensajes" icon={<Mail size={36} />} />
        </Link>
        <Link href="#" className="w-[303px]">
          <DashboardCard title="Contacto" icon={<AgentIcon size={36} />} />
        </Link>
      </div>
  )
}

export {DashboardCardList}