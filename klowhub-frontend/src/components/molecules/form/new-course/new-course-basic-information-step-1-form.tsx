'use client'
import { Button, Input } from '@/components'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { basicInformationCourseSchema, BasicInformationCourseSchema } from '@/schemas/courses.schema'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { StepCourse } from '@/context'
import { useNewCourses } from '@/hooks/use-new-courses'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon, Loader2Icon } from 'lucide-react'
import { useForm } from 'react-hook-form'

function NewCourseBasicInformationStep1Form() {
  const { setContent, content, setStep } = useNewCourses()
  const form = useForm<BasicInformationCourseSchema>({
    resolver: zodResolver(basicInformationCourseSchema),
    defaultValues: {
      title: content?.basicInformation?.title ?? '',
      Description: content?.basicInformation?.Description ?? '',
      typeOfLearning: content?.basicInformation?.typeOfLearning ?? '',
      lenguage: content?.basicInformation?.lenguage ?? '',
      level: content?.basicInformation?.level ?? '',
      category: content?.basicInformation?.category ?? '',
      toolOrPlatform: content?.basicInformation?.toolOrPlatform ?? '',
      price: content?.basicInformation?.price ?? ''
    }
  })
  const { isSubmitting } = form.formState

  const onSubmit = async (data: BasicInformationCourseSchema) => {
    setContent({
      basicInformation: {
        category: data.category,
        Description: data.Description,
        level: data.level,
        lenguage: data.lenguage,
        price: data.price,
        title: data.title,
        toolOrPlatform: data.toolOrPlatform,
        typeOfLearning: data.typeOfLearning
      },
      details: content?.details ?? null
    })

    setStep(StepCourse.Details)
  }

  return (
    <Form {...form}>
      <form className='gap-4 grid md:grid-cols-2' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem className='col-span-full'>
              <FormLabel>Titulo</FormLabel>
              <FormControl>
                <Input placeholder='Titulo del curso' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='Description'
          render={({ field }) => (
            <FormItem className='col-span-full'>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder='Escribe aquí la descripción del curso' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='typeOfLearning'
          render={({ field }) => (
            <FormItem className='col-span-full'>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className='text-black'>
                    <SelectTrigger>
                      <SelectValue placeholder='Tipo de aprendizaje' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='m@example.com'>Ejemplo</SelectItem>
                    <SelectItem value='m@google.com'>Ejemplo</SelectItem>
                    <SelectItem value='m@support.com'>Ejemplo</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='lenguage'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Idioma</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Escribe aquí el idioma del curso' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='level'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nivel</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Escribe aquí el nivel del curso' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='category'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoría</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Escribe aquí la categoría del curso' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='toolOrPlatform'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Herramienta o plataforma</FormLabel>
              <FormControl>
                <Input placeholder='Escribe aquí la herramienta o plataforma del curso' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='price'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Precio</FormLabel>
              <FormControl>
                <Input placeholder='Precio del curso' {...field} />
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

export { NewCourseBasicInformationStep1Form }
