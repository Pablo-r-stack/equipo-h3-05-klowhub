interface AuthLayoutProps {
  children: React.ReactNode
}

function authLayout({ children }: AuthLayoutProps) {
  return <div>{children}</div>
}

export default authLayout
