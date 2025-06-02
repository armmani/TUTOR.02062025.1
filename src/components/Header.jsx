import React, { useState } from 'react'
import CardCount from './CardCount'
import { PawPrint } from 'lucide-react'

function Header({ chooseItem, hdlInput, input}) {

  return (
    <div className='flex h-1/9 justify-between items-center px-4 h-20'>
      <div className='flex items-center gap-2'>
        <PawPrint size={50} />
        <h1 className='text-2xl font-bold'>armmaniSHOPPING</h1>
      </div>
      <div className="flex gap-3 items-center">
        <legend className="fieldset-legend">Search : </legend>
        <div className="join">
          <input
            type="text"
            className="input join-item"
            placeholder="Product name"
            value={input}
            onChange={(e) => hdlInput(e)}
          />
        </div>
        <CardCount chooseItem={chooseItem} />
      </div>
    </div>
  );
}

export default Header