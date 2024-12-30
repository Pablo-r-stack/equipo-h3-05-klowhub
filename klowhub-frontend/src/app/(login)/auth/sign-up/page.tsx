import { SignUpForm } from '@/components'

function SignUpPage() {
  return (
    <main className='grid min-h-screen text-white lg:grid-cols-2 gap-4 lg:gap-8'>
      <section className='p-2 flex flex-col gap-12 items-center justify-items-center h-full lg:col-start-2 lg:col-end-3 bg-gray-600/20 backdrop-blur-sm w-full'>
        <h1 className='text-center text-display_2 lg:text-display_1 font-bold text-shadow-title'>
          <span className='text-primary_500'>KLOW</span> <span className='text-secondary_500'>HUB</span>
        </h1>
        <h2 className='text-center text-heading_1 lg:text-display_2 font-bold'>Registro</h2>
        <SignUpForm />
      </section>
    </main>
  )
}

export default SignUpPage
