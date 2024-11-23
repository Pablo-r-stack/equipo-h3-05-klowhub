import { FacebookIcon, GithubIcon, GoogleIcon, Line } from '@/components'

interface AuthProvidersProps {
  title: string
}

function AuthProviders({ title }: AuthProvidersProps) {
  return (
    <div className='grid w-full flex-col gap-y-4 items-center justify-center'>
      <div className='flex  min-w-[300px] gap-x-2 items-center justify-center'>
        <Line className='w-[60%]' />
        <p className='w-full text-center'>{title}</p>
        <Line className='w-[60%]' />
      </div>
      <div className='flex gap-x-2 items-center justify-center'>
        <GithubIcon />
        <FacebookIcon />
        <GoogleIcon />
      </div>
    </div>
  )
}

export { AuthProviders }
