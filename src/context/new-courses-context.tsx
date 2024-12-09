'use client'
import { BasicInformationCourseSchema, SecondStepBasicInformationCourseSchema } from '@/schemas/courses.schema'
import { createContext, useState } from 'react'
import { StepCourse } from './step-course'

interface TypeContent {
  basicInformation: BasicInformationCourseSchema | null
  details: SecondStepBasicInformationCourseSchema | null
}

export interface NewCoursesContextProps {
  step: StepCourse.GeneralInformation | StepCourse.Details | StepCourse.ModulesLessons
  setStep: (step: StepCourse.GeneralInformation | StepCourse.Details | StepCourse.ModulesLessons) => void
  content: TypeContent | null
  setContent: (content: TypeContent | null) => void
  setReload: (reload: boolean) => void
  reload: boolean
}

export const NewCoursesContext = createContext<NewCoursesContextProps | null>(null)

interface ContextProps {
  children: React.ReactNode
}

function NewCoursesProvider({ children }: ContextProps) {
  const [step, setStep] = useState<NewCoursesContextProps['step']>(StepCourse.GeneralInformation)
  const [content, setContent] = useState<TypeContent | null>(null)
  const [reload, setReload] = useState<boolean>(false)
  const values = {
    step,
    setStep,
    content,
    setContent,
    setReload,
    reload
  }

  return <NewCoursesContext.Provider value={values}>{children}</NewCoursesContext.Provider>
}

export { NewCoursesProvider }
