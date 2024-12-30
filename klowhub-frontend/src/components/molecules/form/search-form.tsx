import { Input } from '@/components/ui/input'
import clsx from 'clsx'
import { Search } from 'lucide-react'
import Form from 'next/form'

interface SearchFormProps {
  /**
   * The className prop is used to extend the styling of the component.
   */
  className?: string
  /**
   * The query prop is used to pass the search query to the component.
   */
  query?: string
}

const SearchForm = ({ query, className }: SearchFormProps) => {
  // To-Do -> Complete search query function
  return (
    <Form action='#' scroll={false} className={clsx('relative', className)}>
      <Input
        name='query'
        defaultValue={query}
        className='w-full md:min-w-[300px] pl-4 md:pl-8'
        placeholder='¿Que te gustaría aprender?'
      />
      <button className='absolute right-2 top-1/2 h4 w-4 -translate-y-1/2 transform text-muted-foreground'>
        <Search className='size-5' />
      </button>
    </Form>
  )
}

export { SearchForm }
