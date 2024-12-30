import { Card, CardContent, CardTitle } from '@/components/ui/card'
import React, { ReactNode } from 'react'

interface Props {
    title: string;
    icon: ReactNode;
  }

const LearnDashboardCard = ({title, icon}: Props) => {
  return (
    <Card
    className="flex items-center justify-center w-full h-full min-h-[206px] !shadow-custom-2 overflow-hidden bg-primary_500 text-white border-4 border-accent_500 rounded-xl hover:bg-hov_500 active:bg-hov_500 transition-transform duration-200 active:!shadow-custom-3"
    >
      <CardContent className="flex items-center justify-center p-4 h-full max-md:flex-col">
        <span className="justify-center flex-shrink-0 m-2">{icon}</span>
        <CardTitle className='text-heading_1 font-semibold'>{title}</CardTitle>
      </CardContent>
    </Card>
  )
}

export {LearnDashboardCard}