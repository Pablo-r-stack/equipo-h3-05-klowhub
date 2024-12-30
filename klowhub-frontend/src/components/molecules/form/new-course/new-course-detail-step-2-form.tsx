'use client'
import { Button, Input } from '@/components'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { detailsInformationCourseSchema, SecondStepBasicInformationCourseSchema } from '@/schemas/courses.schema'

import { Textarea } from '@/components/ui/textarea'
import { StepCourse } from '@/context'
import { useNewCourses } from '@/hooks/use-new-courses'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon, Loader2Icon } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

function NewCourseDetailStep2Form() {
  const { content, setContent, setStep } = useNewCourses()
  const form = useForm<SecondStepBasicInformationCourseSchema>({
    resolver: zodResolver(detailsInformationCourseSchema),
    defaultValues: {
      learningStudents: content?.details?.learningStudents ?? '',
      PrerequisitesForYourCourse: content?.details?.PrerequisitesForYourCourse ?? '',
      shutterCouersefile: content?.details?.shutterCouersefile ?? null
    }
  })
  const { isSubmitting } = form.formState

  const onSubmit = (data: SecondStepBasicInformationCourseSchema) => {
    const file = data.shutterCouersefile
    setContent({
      basicInformation: content?.basicInformation ?? null,
      details: {
        learningStudents: data.learningStudents,
        PrerequisitesForYourCourse: data.PrerequisitesForYourCourse,
        shutterCouersefile: file && file.length > 0 ? file[0] : null
      }
    })

    setStep(StepCourse.ModulesLessons)
  }

  useEffect(() => {
    form.setValue('shutterCouersefile', content?.details?.shutterCouersefile)
  }, [])

  return (
    <Form {...form}>
      <form className='gap-4 grid md:grid-cols-2' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='learningStudents'
          render={({ field }) => (
            <FormItem className='col-span-full'>
              <FormLabel>¿Qué van a aprender tus estudiantes?</FormLabel>
              <FormControl>
                <Textarea placeholder='Escribe aquí qué van a aprender tus estudiantes' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='PrerequisitesForYourCourse'
          render={({ field }) => (
            <FormItem className='col-span-full'>
              <FormLabel>Requisitos previos para realizar tu curso.</FormLabel>
              <FormControl>
                <Input placeholder='Escribe aqui los requisitos previos' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='shutterCouersefile'
          render={({ field }) => (
            <FormItem className='col-span-full'>
              <FormLabel>Sube el archivo para tu curso</FormLabel>
              <FormControl>
                <Input
                  type='file'
                  onChange={(e) => field.onChange(e.target.files)}
                  ref={field.ref} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          variant='primary'
          className='md:col-start-2 md:col-end-3 justify-self-end self-end'
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2Icon className='animate-spin' />
          ) : (
            <>
              Continuar <ArrowRightIcon />
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}

export { NewCourseDetailStep2Form }
