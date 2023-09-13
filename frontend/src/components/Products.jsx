import React from 'react'
import { popularProducts } from '../data/data'
import Product from './Product'
function Products() {
  return (
    <>
     

      <div className='flex justify-between flex-col md:flex-row items-center flex-wrap'>
        {popularProducts.map(item => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </>
  )
}

export default Products