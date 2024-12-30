import { Button, CourseCard, Dashboard } from '@/components'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Route } from '@/const'
import Link from 'next/link'

//to-do -> replace mockcourses with api results, make async component & skeleton load
const courses = [
  {
    id: '1',
    title: 'Introducción a JavaScript',
    description: 'Aprende los conceptos básicos de JavaScript para el desarrollo web.',
    price: '5000',
    image: 'https://via.placeholder.com/416x231',
    category: 'Desarrollo Web',
    rating: '4.5',
    free: false
  },
  {
    id: '2',
    title: 'Diseño UX/UI',
    description: 'Domina las mejores prácticas de diseño de interfaces y experiencia de usuario.',
    price: '7500',
    image: 'https://via.placeholder.com/416x231',
    category: 'Diseño',
    rating: '4.8',
    free: false
  },
  {
    id: '3',
    title: 'Python para Principiantes',
    description: 'Conviértete en un programador Python con este curso para principiantes.',
    price: '6200',
    image: 'https://via.placeholder.com/416x231',
    category: 'Programación',
    rating: '4.6',
    free: false
  },
  {
    id: '4',
    title: 'Fundamentos de Machine Learning',
    description: 'Aprende los fundamentos del aprendizaje automático y sus aplicaciones.',
    price: '12000',
    image: 'https://via.placeholder.com/416x231',
    category: 'Inteligencia Artificial',
    rating: '4.9',
    free: false
  },
  {
    id: '5',
    title: 'Marketing Digital',
    description: 'Descubre cómo construir estrategias de marketing digital efectivas.',
    price: '4800',
    image: 'https://via.placeholder.com/416x231',
    category: 'Marketing',
    rating: '4.4',
    free: false
  },
  {
    id: '6',
    title: 'React Avanzado',
    description: 'Perfecciona tus habilidades de desarrollo con React y Redux.',
    price: '8500',
    image: 'https://via.placeholder.com/416x231',
    category: 'Desarrollo Web',
    rating: '4.7',
    free: false
  },
  {
    id: '7',
    title: 'Gestión de Proyectos Ágiles',
    description: 'Aprende a gestionar proyectos usando metodologías ágiles como Scrum.',
    price: '5700',
    image: 'https://via.placeholder.com/416x231',
    category: 'Gestión de Proyectos',
    rating: '4.3',
    free: false
  },
  {
    id: '8',
    title: 'Introducción al Blockchain',
    description: 'Conoce los conceptos básicos y las aplicaciones de la tecnología blockchain.',
    price: '9200',
    image: 'https://via.placeholder.com/416x231',
    category: 'Tecnología',
    rating: '4.6',
    free: false
  }
]

function Home() {
  //to-do: Change values with auth
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
              courses.map(({ id, title, description, price, image, category, rating, free }) => (
                <CarouselItem className='md:basis-1/2 xl:basis-1/4'>
                  <CourseCard
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    price={price}
                    image={image}
                    category={category}
                    rating={rating}
                    free={free}
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
