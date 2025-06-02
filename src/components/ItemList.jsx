import React from 'react'

function ItemList( {item, hdlIncrease, hdlRemove}) {
  return (
    <div className='rounded-xl h-10 flex items-center p-4'>
      <div className='w-4/8'>
          <p>
            {item.name.split(" ")[0] + " "}
            {item.name.split(" ")[1] ? `${item.name.split(" ")[1]}...` : ""}
          </p>
      </div>
      <div className='flex gap-2'>
        <button className='btn btn-info h-6 w-5' onClick={()=>hdlRemove(item.id)}>-</button>
        <button className='btn btn-info h-6 w-5' onClick={()=>hdlIncrease(item.id, item.name, item.price, item.discount)}>+</button>
      </div>
      <div className='w-3/8 text-right'>
        <p>
          {item.quantity} x $ {item.price}
        </p>
      </div>
    </div>
  )
}

export default ItemList