import productimage from '../assets/productimage.jpg'
import Announcement from '../components/Announcement'
import NavBar from '../components/NavBar'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { useState } from 'react'


function Product() {

    const [count,setCount]=useState(0);



  return (
    <div>
        
        <Announcement/>
        <NavBar/>
        <div className='flex pt-8 px-8 '>
            <div className='flex-1'>
            <img src={productimage}  className='w-100 h-[60%] mx-auto' />
            </div>
            
            <div className='flex-1 '>
                <h1 className='font-normal text-[50px] mb-5'>Jean's Shirt</h1>
                <p className=' tracking-wider font-light text-lg mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <span className='font-light tracking-wider text-[40px] '>$ 50</span>
                <div className='flex items-center mt-5'>
                    <div className='mr-9 flex items-center'>
                        <span className='font-light text-lg mr-3'>
                            Color
                        </span>
                        <div className='bg-blue-900 h-6 w-6 rounded-full cursor-pointer mr-3'></div>
                        <div className='bg-gray-600 h-6 w-6 rounded-full cursor-pointer mr-3'></div>
                        <div className='bg-gray-200 h-6 w-6 rounded-full cursor-pointer mr-3'></div>
                        
                    </div>
                    <div>
                    <span className='font-light text-lg mr-3'>
                        Size
                    </span>
                        <select className='bg-gray-200 rounded-md p-1 font-medium' >
                            <option value="" disabled selected>Size</option>
                            <option value="">XS</option>
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                        </select>
                    </div>
                </div>
                <div className='flex  items-center mt-8'>
                    <div className='flex items-center mr-8'>
                        <div 
                        onClick={()=>(setCount(count-1))}
                        className=' text-[40px] font-semibold mr-3 cursor-pointer'>-</div>
                        <div className=' text-[20px] font-light mr-3 border-2 border-gray-500 px-4 rounded-lg mt-2'>{count}</div>
                        <div 
                        onClick={()=>(setCount(count+1))}
                        className='text-[40px] font-semibold mr-3 cursor-pointer'>
                            +
                        </div>
                    </div>
                    <div>
                        <button className=' bg-transparent border-2 p-2 rounded-md shadow-md font-light border-gray-300 hover:bg-gray-200 hover:border-none '>ADD TO CART</button>
                    </div>

                </div>
            </div>
        </div>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Product