import React from 'react'
import ItemList from './ItemList'
import { Loader } from 'lucide-react';

function CartItem({ chooseItem, hdlIncrease, hdlRemove }) {
  const price = chooseItem.reduce((a, c) => a + c.price * c.quantity, 0)
  const discount = chooseItem.reduce((a, c) => a + c.price * (c.discount / 100) * c.quantity, 0);
  const totalPrice = price - discount
  const tax = totalPrice * 0.07
  const netPrice = totalPrice + tax
  return (
    <div className='overflow-auto w-1/3 p-4'>
      <h1 className='mb-3 text-center text-2xl my-2 text-bold'>Cart Item</h1>
      <div className='flex flex-col gap-2'>
        {chooseItem.map((el) => (
          <ItemList key={el.id} item={el} hdlIncrease={hdlIncrease} hdlRemove={hdlRemove} />
        ))}
      </div>


      {chooseItem.length === 0 ? (
        <div className='flex flex-col mt-50 justify-center items-center'>
          <div className='flex gap-2'>
          <Loader className='animate-spin' />
          <p>EMPTY CART</p>
          </div>
          <p>Please, Select Your Product</p>
        </div>
          ) : (

        <div className='px-2 font-bold'>
          <div className='divider'>SUMMARY</div>
          <div className='flex justify-between'>
            <p>Total Price:</p>
            <p>${price.toFixed(2)}</p>
          </div>
          <div className='flex justify-between'>
            <p>Discount:</p>
            <p>${discount.toFixed(2)}</p>
          </div>
          <div className='flex justify-between'>
            <p>Total Price:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <div className='flex justify-between'>
            <p>TAX:</p>
            <p>${tax.toFixed(2)}</p>
          </div>
          <div className='flex justify-between'>
            <p>Net Price:</p>
            <p>${netPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartItem