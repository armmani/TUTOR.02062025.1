import React from 'react'
import Card from './Card'

function ProductList({products, hdlAddToCart, arrCate, hdlClick}) {
  const newArrCate = arrCate.reduce((prev, curr) => {
    if(!prev.includes(curr.category)) {
      prev.push(curr.category);
    }
    return prev;
  }, [])
  console.log(newArrCate);

  return (
    <div className='py-4 px-6 w-2/3 overflow-auto'>
      <h1 className='text-3xl my-3 text-center font-bold'>Premium Product</h1>
      <div className='my-2 flex justify-around'>
        {newArrCate.map((el, index) => (
          <button 
          className='btn btn-warning' 
          key={index}
          onClick={() => hdlClick(el)}
          >
            {el}
          </button>
        ))}
          <button className='btn btn-warning' onClick = {() => hdlClick('ALL')}>ALL</button>
      </div>
      <div className='flex flex-wrap gap-4'>
      {products.map( (el) => (
        <Card key={el.id} item={el} hdlAddToCart={hdlAddToCart}/>
      ))}
      </div>
    </div>
  )
}

export default ProductList