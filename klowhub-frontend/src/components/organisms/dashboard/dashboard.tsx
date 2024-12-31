'use client'
import { CurrentCourseCard, DashboardCardList } from '@/components'
import { useAuth } from '@/context/AuthContext'

const Dashboard = () => {
  const { user } = useAuth()  // Usamos el hook useAuth para obtener el usuario autenticado
  const course = {
    title: 'Arquitectura de información',
    image: 'https://res.cloudinary.com/dadpdkkq9/image/upload/v1733709289/home_wvnigx.png'
  }

  return (
    <>
      {user ? (
        <section className='container self-center flex flex-col w-full justify-center gap-5 pt-6'>
          <DashboardCardList />
          <div className='flex flex-col w-full'>
            <h1 className='text-display_2'>Hola {user.name} ¡Que bueno verte!</h1>
            <p className='text-heading_1'>Continua Aprendiendo</p>
            <CurrentCourseCard title={course.title} image={course.image} />
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  )
}

export { Dashboard }

