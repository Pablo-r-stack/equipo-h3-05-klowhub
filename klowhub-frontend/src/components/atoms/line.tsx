import { cn } from '@/lib/utils'

interface LineProps {
  className?: string
}

function Line({ className }: LineProps) {
  return <hr className={cn('border-neutral-200 w-full', className)} />
}

export { Line }
