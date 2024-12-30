import { buttonVariants } from '@/components'
import { Route } from '@/const'
import { cn } from '@/lib/utils'
import Link from 'next/link'

function MyCourses() {
  return (
    <main className='flex flex-col relative text-white gap-4 lg:gap-8'>
      <h1>Usted no tiene cursos...</h1>
      <Link href={Route.NewCourse} className={cn(buttonVariants({ variant: 'primary' }), 'w-32 self-center')}>
        Crear un curso
      </Link>
    </main>
  )
}

export default MyCourses
