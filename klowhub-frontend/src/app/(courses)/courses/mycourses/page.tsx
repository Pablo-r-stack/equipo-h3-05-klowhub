import { buttonVariants } from '@/components'
import CourseTable from '@/components/molecules/course-table/course-table'
import { Route } from '@/const'
import { cn } from '@/lib/utils'
import Link from 'next/link'

function MyCourses() {
  const courses = true;
  return (
    <main className='flex flex-col relative text-white gap-4 lg:gap-8'>
      {/* See courses info */}
      <CourseTable />
      {/* To-Do -> improve styling in this message */}
      {!courses &&
      <h1>Usted no tiene cursos...</h1>
      }
      {/* To-Do-> improve style for this btn */}
      <Link href={Route.NewCourse} className={cn(buttonVariants({ variant: 'primary' }), 'w-32 self-center')}>
        Crear un curso
      </Link>
    </main>
  )
}

export default MyCourses
