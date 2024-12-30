import { NewCourseTab } from '@/components'
import { NewCoursesProvider } from '@/context'

function NewCourse() {
  return (
    <main className='py-10 flex flex-col relative text-white gap-4 lg:gap-8 items-center justify-center'>
      <h1 className='text-display_2 self-start'>Comparte tus conocimientos </h1>
      <NewCoursesProvider>
        <NewCourseTab />
      </NewCoursesProvider>
    </main>
  )
}

export default NewCourse
