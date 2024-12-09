'use client'
import { Button, NewCourseDetailStep2Form, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/'
import { NewCourseBasicInformationStep1Form } from '@/components/molecules/form/new-course/new-course-basic-information-step-1-form'
import { StepCourse } from '@/context'
import { useNewCourses } from '@/hooks/use-new-courses'
function NewCourseTab() {
  const { step, setStep } = useNewCourses()
  return (
    <section className='flex flex-col w-full max-w-5xl justify-center items-center p-5 rounded-[50px] gap-4 home_bg'>
      <Tabs className='w-full gap-y-7 max-w-3xl' value={step} onValueChange={(value) => setStep(value as StepCourse)}>
        <TabsList className='w-full flex-col  bg-transparent gap-x-4'>
          <TabsTrigger className='hover:!border-none' asChild value={StepCourse.GeneralInformation}>
            <Button variant='link' className='w-full'>
              Información general
            </Button>
          </TabsTrigger>
          <TabsTrigger className='hover:!border-none' asChild value={StepCourse.Details}>
            <Button variant='link' className='w-full'>
              Detalles
            </Button>
          </TabsTrigger>
          <TabsTrigger className='hover:!border-none' asChild value={StepCourse.ModulesLessons}>
            <Button variant='link' className='w-full'>
              Módulos / lecciones
            </Button>
          </TabsTrigger>
        </TabsList>
        <TabsContent value='general information'>
          <NewCourseBasicInformationStep1Form />
        </TabsContent>
        <TabsContent value='details'>
          <NewCourseDetailStep2Form />
        </TabsContent>
        <TabsContent value='Modules/lessons'>Change your password here.</TabsContent>
      </Tabs>
    </section>
  )
}

export { NewCourseTab }
