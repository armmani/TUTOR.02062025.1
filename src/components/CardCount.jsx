import { BaggageClaim } from 'lucide-react'
import React from 'react'

function CardCount({ chooseItem }) {
  return (
    <div className='relative pr-2 pt-1.5'>
      <BaggageClaim size={40} />
      <div className='bg-red-500 rounded-xl w-6 h-6 flex justify-center items-center absolute top-0 right-0'>
        <p className='text-white'>{chooseItem.length}</p>
      </div>
    </div>
  )
}

export default CardCount