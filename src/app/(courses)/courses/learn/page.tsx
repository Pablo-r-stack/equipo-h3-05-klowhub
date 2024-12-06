import { Button, CourseCard, LearnDashboard } from "@/components"
import Link from "next/link"

const freeCourses = [
  {
    "id": "1",
    "title": "Introducción a JavaScript",
    "description": "Aprende los conceptos básicos de JavaScript para el desarrollo web.",
    "price": "5000",
    "image": "https://via.placeholder.com/416x231",
    "category": "Desarrollo Web",
    "rating": "4.5",
    "free": true
  },
  {
    "id": "2",
    "title": "Diseño UX/UI",
    "description": "Domina las mejores prácticas de diseño de interfaces y experiencia de usuario.",
    "price": "7500",
    "image": "https://via.placeholder.com/416x231",
    "category": "Diseño",
    "rating": "4.8",
    "free": true
  },
  {
    "id": "3",
    "title": "Python para Principiantes",
    "description": "Conviértete en un programador Python con este curso para principiantes.",
    "price": "6200",
    "image": "https://via.placeholder.com/416x231",
    "category": "Programación",
    "rating": "4.6",
    "free": true
  },
  {
    "id": "4",
    "title": "Fundamentos de Machine Learning",
    "description": "Aprende los fundamentos del aprendizaje automático y sus aplicaciones.",
    "price": "12000",
    "image": "https://via.placeholder.com/416x231",
    "category": "Inteligencia Artificial",
    "rating": "4.9",
    "free": true
  },
  {
    "id": "5",
    "title": "Marketing Digital",
    "description": "Descubre cómo construir estrategias de marketing digital efectivas.",
    "price": "4800",
    "image": "https://via.placeholder.com/416x231",
    "category": "Marketing",
    "rating": "4.4",
    "free": true
  },
  {
    "id": "6",
    "title": "React Avanzado",
    "description": "Perfecciona tus habilidades de desarrollo con React y Redux.",
    "price": "8500",
    "image": "https://via.placeholder.com/416x231",
    "category": "Desarrollo Web",
    "rating": "4.7",
    "free": true
  },
  {
    "id": "7",
    "title": "Gestión de Proyectos Ágiles",
    "description": "Aprende a gestionar proyectos usando metodologías ágiles como Scrum.",
    "price": "5700",
    "image": "https://via.placeholder.com/416x231",
    "category": "Gestión de Proyectos",
    "rating": "4.3",
    "free": true
  },
  {
    "id": "8",
    "title": "Introducción al Blockchain",
    "description": "Conoce los conceptos básicos y las aplicaciones de la tecnología blockchain.",
    "price": "9200",
    "image": "https://via.placeholder.com/416x231",
    "category": "Tecnología",
    "rating": "4.6",
    "free": true
  }
];


function Learn() {
  return <>
    <section className="container self-center w-full flex flex-col items-center justify-center">
      <h1 className="text-display_2">Aprende con Nosotros</h1>
      <LearnDashboard />
    </section>
    <section className="container self-center w-full flex flex-col items-center justify-center">
      <span className="flex w-full items-center justify-between">
        <h2 className="text-display_2">Cursos gratis recomendados:</h2>
        <Button
          variant="outline_2"
          aria-label="courses">
          <Link href="#">Ver más</Link>
        </Button>
      </span>
      <div className="flex flex-nowrap w-full gap-8 overflow-x-auto py-4">
        <>
          {freeCourses && freeCourses.length > 0 ? freeCourses.map(({
            id,
            title,
            description,
            price,
            image,
            category,
            rating,
            free
          }) => (
            <CourseCard
              key={id}
              id={id}
              title={title}
              description={description}
              price={price}
              image={image}
              category={category}
              rating={rating}
              free={free} />
          )) :
            <h2 className="text-heading_1">Aún No hay cursos disponibles</h2>}
        </>
      </div>
    </section>
  </>
}

export default Learn
