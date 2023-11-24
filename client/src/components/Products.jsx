import React, { useEffect, useState } from 'react'
import { popularProducts } from '../data/data'
import Product from './Product'
import axios from 'axios'
function Products(props) {

  const { filter, cat, sort } = props;
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `http://localhost:5000/api/products?category={cat}` :
            "http://localhost:5000/api/products"
        );
        setProducts(res.data);
        console.log(res);
      } catch (err) { }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter((item) =>
        Object.entries(filter).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    )
  }


    , [products, cat, filter])

  useEffect(() => {
    if (sort == 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    } else if (sort == 'asc') {
      setFilteredProducts(
        (prev) =>
          [...prev].sort((a, b) => a.price - b.price)
      )
    }else {
      setFilteredProducts(
        (prev) =>
          [...prev].sort((a, b) => b.price - a.price)
      )
    }
  },
  )


  return (
    <>


      <div className='flex justify-between flex-col md:flex-row items-center flex-wrap'>
        {cat ? filteredProducts.map(item => (
          <Product item={item} key={item.id} />
        )):
        products.slice(0,8).map(item => (
          <Product item={item} key={item.id} />
        ))
        }
      </div>
    </>
  )
}

export default Products