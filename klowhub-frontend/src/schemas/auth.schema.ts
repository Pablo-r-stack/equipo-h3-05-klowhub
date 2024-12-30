import { MAX_TITLE_CHARACTERS } from '@/const'
import { z } from 'zod'

const signInSchema = z.object({
  email: z
    .string()
    .email({ message: 'El correo electrónico no es valido.' })
    .max(MAX_TITLE_CHARACTERS, { message: 'El correo electrónico es demasiado largo.' }),
  password: z.string().min(1, { message: 'Este campo es obligatorio.' })
})

const signUpSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Este campo es obligatorio.' })
      .max(MAX_TITLE_CHARACTERS, { message: 'El nombre es demasiado largo.' }),
    email: z
      .string()
      .email({ message: 'El correo electrónico no es valido.' })
      .max(MAX_TITLE_CHARACTERS, { message: 'El correo electrónico es demasiado largo.' }),
    password: z.string().min(1, { message: 'Este campo es obligatorio.' }),
    confirmPassword: z.string().min(1, { message: 'Este campo es obligatorio.' })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden.',
    path: ['confirmPassword']
  })

export type SignInSchema = z.infer<typeof signInSchema>
export type SignUpSchema = z.infer<typeof signUpSchema>

export { signInSchema, signUpSchema }
