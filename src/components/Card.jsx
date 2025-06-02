import React from 'react'

function Card({ item, hdlAddToCart }) {
  return (
    <div className='w-60 h-90 flex flex-col gap-2 items-center bg-white rounded-lg shadow-gray-500 shadow-lg text-center text-black'>
      <div className='h-1/3'>
        <img className='h-full' src={item.images[0]} alt={item.title} />
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-sm font-bold line-clamp-1'>{item.title}</p>
        <p className='bg-gray-200 px-2 rounded-2xl'>{item.category}</p>
        <p className='line-clamp-2 px-2 text-justify'>{item.description}</p>
      </div>
      <div className='flex justify-around w-full'>
        <p className='bg-black text-white px-2 rounded-md'>$ {item.price}</p>
        <p className='bg-black text-white px-2 rounded-md'>Rating: {item.rating}</p>
      </div>
      <div className='flex justify-center gap-3 w-full items-center'>
        <button onClick={ () => hdlAddToCart(item.id, item.title, item.price, item.discountPercentage)} className='btn btn-error'>Add To Cart</button>
      </div>
    </div>
  )
}

export default Card