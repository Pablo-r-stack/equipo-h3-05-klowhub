import Image from 'next/image'

interface AuthLayoutProps {
  children: React.ReactNode
}

function authLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <Image className='object-cover -z-50' src='/assets/login_background.png' fill alt='login background' priority />
      {children}
    </>
  )
}

export default authLayout
