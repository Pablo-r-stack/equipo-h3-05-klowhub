'use client'
import { Button, CourseCard, Dashboard } from '@/components'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Route } from '@/const'
import { usePortal } from '@/context/PortalContext'
import Link from 'next/link'

function Home() {
  const {courses} = usePortal();
  const user = true
  return (
    <>
      {user && <Dashboard />}
      <section className='container self-center flex flex-col w-full gap-5'>
        <h2 className='text-display_2'>Cursos en tendencia</h2>
        <span className='flex w-full items-center justify-between'>
          <p>Estos son los cursos que están marcando tendencia en la comunidad:</p>
          <Button variant='outline_2' aria-label='courses'>
            <Link href={Route.Courses}>Ver más</Link>
          </Button>
        </span>
        <Carousel>
          <CarouselContent className='gap-x-2'>
            {courses && courses.length > 0 ? (
              courses.map((course) => (
                <CarouselItem key={course.id} className='md:basis-1/2 xl:basis-1/4'>
                  <CourseCard
                    course={course}
                  />
                </CarouselItem>
              ))
            ) : (
              <h2 className='text-heading_1'>Aún No hay cursos disponibles</h2>
            )}
          </CarouselContent>
        </Carousel>
      </section>
    </>
  )
}

export default Home
