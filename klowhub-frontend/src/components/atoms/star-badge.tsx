import { Star } from 'lucide-react'
import React from 'react'

interface Props{
    rating: string
}

const StarBadge = ({rating}: Props) => {
  return (
    <span className='flex items-center gap-2'>
        {rating}
        <Star className='size-5 text-yellow-400' />
    </span>
  )
}

export {StarBadge}