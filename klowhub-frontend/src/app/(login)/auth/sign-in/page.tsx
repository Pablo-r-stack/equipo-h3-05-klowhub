import { SignInForm } from '@/components/molecules/form/sign-in-form'

function signInPage() {
  return (
    <main className='grid min-h-screen text-white lg:grid-cols-2 gap-4 lg:gap-8'>
      <section className='p-2 flex flex-col gap-8 items-center justify-items-center h-full lg:col-start-2 lg:col-end-3 bg-gray-600/20 backdrop-blur-sm w-full'>
        <h1 className='text-center text-display_2 lg:text-display_1 font-bold text-shadow-title'>
          <span className='text-primary_500'>KLOW</span> <span className='text-secondary_500'>HUB</span>
        </h1>
        <h2 className='font-semibold text-center text-heading_1 lg:text-display_2  text-white'>Inicio de sesión</h2>
        <h3 className='font-light text-center text-white pb-8 text-heading_2 lg:text-heading_1'>¡Hola de nuevo!</h3>
        <SignInForm />
      </section>
    </main>
  )
}

export default signInPage
