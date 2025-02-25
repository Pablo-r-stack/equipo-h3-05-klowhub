"use client"
import { buttonVariants } from '@/components'
import CourseTable from '@/components/molecules/course-table/course-table'
import { Route } from '@/const'
import { cn } from '@/lib/utils'
import { getUserCourses } from '@/services/userService'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function MyCourses() {
  const [courses, setCourses] = useState([]);
  //fetch user courses data
  useEffect(() => {
    const getCourses = async()=>{
      const coursesList = await getUserCourses();
      if (coursesList && coursesList.length > 0){
        setCourses(coursesList);
      }
    }
    getCourses();
  },[])
  return (
    <main className='flex flex-col relative text-white gap-4 lg:gap-8'>      
      {/* To-Do -> improve styling in this message */}
      {courses && courses.length > 0 ? <CourseTable /> : <h1>Usted no tiene cursos...</h1>}
      {/* To-Do-> improve style for this btn */}
      <Link href={Route.NewCourse} className={cn(buttonVariants({ variant: 'primary' }), 'w-32 self-center')}>
        Crear un curso
      </Link>
    </main>
  )
}

export default MyCourses
