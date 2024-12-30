interface PlatformLayout {
  children: React.ReactNode
}

function PlatformLayout({ children }: PlatformLayout) {
  return <div>{children}</div>
}

export default PlatformLayout
