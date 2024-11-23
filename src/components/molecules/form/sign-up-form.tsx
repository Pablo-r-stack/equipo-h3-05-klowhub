'use client'

import {
  AuthProviders,
  Button,
  Checkbox,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  Input
} from '@/components/'
import { Route } from '@/const'
import { signUpSchema, SignUpSchema } from '@/schemas/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

function SignUpForm() {
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  function onSubmit(values: SignUpSchema) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 grid max-w-[450px]'>
        <div className='grid gap-y-4'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className='h-14' placeholder='Nombre Completo' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className='h-14' placeholder='Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className='h-14' placeholder='Contraseña' type='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className='h-14' placeholder='Confirmar Contraseña' type='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <AuthProviders title='O registrate con' />
        <div className='flex w-full justify-center font-medium items-center gap-x-2'>
          <Checkbox className='!text-white h-4 w-4' />
          <span className='text-white'>Al registrarse aceptas nuestros </span>
          <Link href={Route.TermsOfUse} className='text-[#BCA2FF]'>
            Términos y Condiciones
          </Link>
        </div>
        <FormDescription className='text-center text-white'>
          ¿Ya tienes una cuenta?{' '}
          <Link className='text-[#BCA2FF]' href={Route.Login}>
            Iniciar sesión
          </Link>
        </FormDescription>
        <Button
          className='bg-primary_500 w-full text-heading_2 text-white px-20 py-4 font-semibold justify-self-center'
          type='submit'
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? <Loader2Icon size={20} className='animate-spin' /> : 'Registrarse'}
        </Button>
      </form>
    </Form>
  )
}
export { SignUpForm }
