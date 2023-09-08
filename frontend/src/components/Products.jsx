import React from 'react'
import { popularProducts } from '../data/data'
import Product from './Product'
function Products() {
  return (
    <>
      <div className='flex justify-center items-center my-5 mb-6'>
        <div className='bg-gray-500 w-[80px] h-1 '></div>
        <h1 className=" text-xl font-medium mx-8">BEST SELLING</h1>
        <div className='bg-gray-500 w-[80px] h-1'></div>
      </div>

      <div className='flex justify-between  items-center flex-wrap'>
        {popularProducts.map(item => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </>
  )
}

export default Products