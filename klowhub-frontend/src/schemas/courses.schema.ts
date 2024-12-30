import { MAX_TITLE_CHARACTERS } from '@/const'
import { z } from 'zod'

const basicInformationCourseSchema = z.object({
  title: z
    .string()
    .min(1, 'El titulo es obligatorio.')
    .max(MAX_TITLE_CHARACTERS, { message: 'El titulo es demasiado largo.' }),
  Description: z
    .string()
    .min(1, 'La descripcion es obligatoria.')
    .max(MAX_TITLE_CHARACTERS, { message: 'La descripcion es demasiado largo.' }),
  typeOfLearning: z
    .string()
    .min(1, 'El tipo de aprendizaje es obligatorio.')
    .max(MAX_TITLE_CHARACTERS, { message: 'El tipo de aprendizaje es demasiado largo.' }),
  lenguage: z
    .string()
    .min(1, 'El lenguaje es obligatorio.')
    .max(MAX_TITLE_CHARACTERS, { message: 'El lenguaje es demasiado largo.' }),
  level: z
    .string()
    .min(1, 'El nivel es obligatorio.')
    .max(MAX_TITLE_CHARACTERS, { message: 'El nivel es demasiado largo.' }),
  category: z
    .string()
    .min(1, 'La categoria es obligatoria.')
    .max(MAX_TITLE_CHARACTERS, { message: 'La categoria es demasiado largo.' }),
  toolOrPlatform: z
    .string()
    .min(1, 'La herramienta o plataforma es obligatoria.')
    .max(MAX_TITLE_CHARACTERS, { message: 'La herramienta o plataforma es demasiado largo.' }),
  price: z
    .string()
    .min(1, 'El precio es obligatorio.')
    .max(MAX_TITLE_CHARACTERS, { message: 'El precio es demasiado largo.' })
    .regex(/^\d+$/, 'Solo se permiten números')
})

const detailsInformationCourseSchema = z.object({
  learningStudents: z
    .string()
    .min(1, { message: 'El número de estudiantes es obligatorio.' })
    .max(MAX_TITLE_CHARACTERS, { message: 'El número de estudiantes es demasiado largo.' }),
  PrerequisitesForYourCourse: z
    .string()
    .min(1, { message: 'Los requisitos para tu curso es obligatorio.' })
    .max(MAX_TITLE_CHARACTERS, { message: 'Los requisitos para tu curso es demasiado largo.' }),
  shutterCouersefile: z.any()
})

const moduleInformationCourseSchema = z.object({
  title: z
    .string()
    .min(1, 'El titulo es obligatorio.')
    .max(MAX_TITLE_CHARACTERS, { message: 'El titulo es demasiado largo.' }),
  presentation: z
    .string()
    .min(1, 'La presentación es obligatoria.')
    .max(MAX_TITLE_CHARACTERS, { message: 'La presentación es demasiado larga.' }),
  lesson: z.object({
    title: z.string().min(1, 'El título es obligatorio.'),
    SupportingMaterial: z.string().min(1, 'La presentación es obligatoria.'),
    lessonFile: z.any(),
    lessonDescription: z.string().min(1, 'La presentación es obligatoria.')
  })
})

export type BasicInformationCourseSchema = z.infer<typeof basicInformationCourseSchema>
export type SecondStepBasicInformationCourseSchema = z.infer<typeof detailsInformationCourseSchema>
export type ModuleInformationCourseSchema = z.infer<typeof moduleInformationCourseSchema>

export { basicInformationCourseSchema, detailsInformationCourseSchema, moduleInformationCourseSchema }
