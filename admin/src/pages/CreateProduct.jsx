import React from 'react'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

export default function CreateProduct() {
    const inputStyle = "mt-1 border w-[30%]  border-y-2 border-x-0 border-t-0 border-gray-400 p-1";
    return (
        <div className='p-8 w-[82%]'>
            <h1 className='text-3xl font-bold mb-6'>New Product</h1>
            <form action="" >
                <div>
                    <label htmlFor="file" className='p-6'>
                        <span className='font-semibold'>Image</span> <br />  <FileUploadOutlinedIcon className='cursor-pointer' />
                    </label>
                    <input id='file' type="file" className='hidden' />
                </div>
                <div className='mt-4' >
                    <label for="productname" className='font-semibold'>Product name</label><br />
                    <input className={inputStyle} type="text" id="productname" name="productname" placeholder='Apple Airpods' required />
                </div>

                <div className='mt-4'>
                    <label for="stock" className='font-semibold'>In Stock</label><br />
                    <input type="number" min={0}  value={2003} id='stock' className={inputStyle}/>
                </div>
                <div className='mt-4'>
                    <label for="status" className='font-semibold'>Active</label><br />
                    <select id="status" name="status" required className={inputStyle}>
                        <option value="active">Yes</option>
                        <option value="notActive">No</option>
                    </select>
                </div>
                <button type='submit' className='bg-blue-700 hover:bg-blue-800 px-2 py-1 text-white font-semibold mt-8 rounded-md'>Create</button>
            </form>
        </div>
    )
}
