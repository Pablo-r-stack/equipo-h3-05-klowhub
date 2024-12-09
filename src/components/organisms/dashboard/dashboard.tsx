import { CurrentCourseCard, DashboardCardList } from '@/components'

const Dashboard = () => {
  const name = 'Pedro'
  const course = {
    title: 'Arquitectura de información',
    image: 'https://res.cloudinary.com/dadpdkkq9/image/upload/v1733709289/home_wvnigx.png'
  }
  return (
    <section className='container self-center flex flex-col w-full justify-center gap-5 pt-6'>
      <DashboardCardList />
      <div className='flex flex-col w-full'>
        <h1 className='text-display_2'>Hola {name} ¡Que bueno verte!</h1>
        <p className='text-heading_1'>Continua Aprendiendo</p>
        <CurrentCourseCard title={course.title} image={course.image} />
      </div>
    </section>
  )
}

export { Dashboard }
