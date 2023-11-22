import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../components/Chart'
import { productData } from '../data/data'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

export default function Product() {
    const inputStyle = "mt-1 border  border-y-2 border-x-0 border-t-0 border-gray-400 p-1";
    return (
        <div className='w-[82%] p-8'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold'>Product</h1>
                <Link className='cursor-pointer bg-green-600 hover:bg-green-700 p-1 px-2 text-white font-semibold rounded-md' to={'/newproduct'}>Create</Link>
            </div>
            <div className='flex items-center gap-6  w-full'>
                <div className='w-[60%]'><Chart data={productData} dataKey="Sales" title='Sales Performance' /></div>

                <div className='p-6 rounded-md shadow-xl w-[40%]'>
                    <div className='flex items-center gap-5 '>
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='h-[35px] w-[35px] rounded-full' alt="" />
                        <span className='font-semibold text-lg' >Apple Airpods</span>
                    </div>
                    <div className='grid grid-cols-2 gap-4 mt-4'>
                        <span className='font-semibold'>id:</span>
                        <p>12</p>
                        <span className='font-semibold'>sales:</span>
                        <p>12</p>
                        <span className='font-semibold'>active:</span>
                        <p>Yes</p>
                        <span className='font-semibold'>in stock:</span>
                        <p>No</p>
                    </div>
                </div>
            </div>
            <div className='p-4 rounded-md shadow-xl mt-10'>
                <form action="#" method="post" className=' flex gap-4 p-8' >
                    <div className='w-[80%]'>
                        <div className='mt-2' >
                            <label for="productname">Product name</label><br />
                            <input className={inputStyle} type="text" id="productname" name="productname" placeholder='Apple Airpods' required />
                        </div>
                        
                        <div className='mt-4'>
                            <label for="stock">In Stock</label><br />
                            <select id="stock" name="stock" required className={inputStyle}>
                                <option value="instock">Yes</option>
                                <option value="notinstock">No</option>
                            </select>
                        </div>
                        <div className='mt-4'>
                            <label for="status">Active</label><br />
                            <select id="status" name="status" required className={inputStyle}>
                                <option value="active">Yes</option>
                                <option value="notActive">No</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-[20%] flex flex-col justify-between mt-[80px]'>
                        <div>
                            <label htmlFor="file" >
                                <FileUploadOutlinedIcon className='cursor-pointer' />
                            </label>
                            <input id='file' type="file" className='hidden' />
                        </div>
                        <button type="submit" className='bg-blue-700 hover:bg-blue-800 p-1 rounded-md text-white font-semibold'>Update</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
