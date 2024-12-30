import { LearnDashboardCard } from '@/components/molecules/learn-dashboard-card/learn-dashboard-card'
import { Route } from '@/const'
import { PenTool } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

{/* To-Do-> Change category routes once API is connected */}
const LearnDashboard = () => {
  return (
    <div className="grid gap-4 p-8 w-full justify-center grid-cols-3 grid-rows-2 
                max-lg:grid-cols-2 max-lg:grid-rows-3 
                max-sm:flex max-sm:flex-col max-sm:items-center">
      <Link href={`${Route.Courses}/diseno_grafico`} className="max-w-[423px] min-h-[206px]">
        <LearnDashboardCard title="Diseño Grafico" icon={<PenTool size={32} />} />
      </Link>      
      <Link href={`${Route.Courses}/marketing_digital`} className="max-w-[423px] min-h-[206px]">
        <LearnDashboardCard title="Marketing Digital" icon={<PenTool size={32} />} />
      </Link>      
      <Link href={`${Route.Courses}/productividad`} className="max-w-[423px] min-h-[206px]">
        <LearnDashboardCard title="Productividad" icon={<PenTool size={32} />} />
      </Link>      
      <Link href={`${Route.Courses}/software`} className="max-w-[423px] min-h-[206px]">
        <LearnDashboardCard title="Software" icon={<PenTool size={32} />} />
      </Link>      
      <Link href={`${Route.Courses}/aplicaciones_web`} className="max-w-[423px]">
        <LearnDashboardCard title="WebApps" icon={<PenTool size={32} />} />
      </Link>      
      <Link href={`#`} className="max-w-[423px] min-h-[206px]">
        <LearnDashboardCard title="Categoría 6" icon={<PenTool size={32} />} />
      </Link>      
    </div>

  )
}

export { LearnDashboard }