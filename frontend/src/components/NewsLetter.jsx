import React from 'react'
import SendIcon from '@mui/icons-material/Send';

function NewsLetter() {
  return (
    <div className='flex flex-col items-center  bg-slate-200 mt-2 py-10 '>
        <h1 className='font-bold text-[60px] '>Newsletter</h1>
        <p className='mt-2 font-normal tracking-wider'>Get timely updates from your favorite products.</p>
        <div className='flex justify-center items-center border-s-white mt-5 w-[40%] h-[40px]'>
            <div className='border-none flex-1 w-[60%] '>
            <input type="email"
                placeholder='Enter your e-mail'
                className='  p-2 px-3  border-none flex-9 rounded-full rounded-br-none rounded-tr-none w-[100%]'
             />
             </div>
             <button className='text-white bg-teal-600 rounded-full p-2 rounded-bl-none rounded-tl-none flex-none '>
            <SendIcon />
            </button>
        </div>
    </div>
  )
}

export default NewsLetter