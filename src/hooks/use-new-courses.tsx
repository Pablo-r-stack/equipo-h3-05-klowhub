'use client'
import { NewCoursesContext } from '@/context'
import { useContext } from 'react'

function useNewCourses() {
  const context = useContext(NewCoursesContext)
  if (!context) throw new Error('NewCoursesContext must be used within a OrderProvider')
  return context
}

export { useNewCourses }
