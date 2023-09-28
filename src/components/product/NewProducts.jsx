import React from 'react'
import Data from "../home/Data"
import MoreToLoveCard from '../home/MoreToLoveCard'

function NewProducts() {
    const {productItems} = Data
  return (
    <section className='mt-12 pb-28'>
      <div className='w-[84%] m-auto'>
        <h1 className='text-3xl font-bold mb-8'>What’s new in the Kan9ala range</h1>
        <h4 className='text-lg font-semibold'>See what’s new at Kan9ala</h4>
        <div className="grid grid-cols-5 gap-4 mt-4">
            {
            productItems.map((product, index)=>
                <MoreToLoveCard key={index} product={product}/>
            )
        }
        </div>
        
        
      </div>
    </section>
  )
}

export default NewProducts
