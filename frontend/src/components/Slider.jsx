import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderData } from '../data/sliderData';
import { useState } from 'react';





function Slider() {

    const [cursor, setCursor] = useState(0);
    const handlClick = (direction) => {
        const totalSlides = sliderData.length;
        if (direction === 'left') {
            setCursor((prevCursor) => (prevCursor === 0 ? totalSlides - 1 : prevCursor - 1));
        } else {
            setCursor((prevCursor) => (prevCursor === totalSlides - 1 ? 0 : prevCursor + 1));
        }
    };
    

    return (
        <div className='h-screen w-[100%]  '>

            <div
                onClick={()=>handlClick('left')}
                className='flex items-center top-1/2 z-50 left-0 absolute ml-2 bg-slate-50 rounded-full p-5 opacity-[50%] cursor-pointer hover:opacity-[100%]'>
                <ArrowBackIosNewOutlinedIcon />
            </div>
            <div className='h-full flex overflow-x-hidden '>
                {
                     sliderData.map(item => (
                        <div className={`flex flex-shrink-0 items-center h-full w-full  ${item.bgColor}`} style={{ transform: `translateX(-${cursor * 100}%)`, transition: 'transform 1.5s ease' }}  key={item.key}>
                            <div className='flex-1 h-full w-full p-5 '>
                                <img src={item.img} alt="" className='h-[70%] mt-10 mx-auto' />
                            </div>
                            <div className='flex-1 p-[50px]'>
                                <h1 className='font-bold text-left text-[50px] '>{item.title}</h1>
                                <p className='text-left text-[30px] tracking-wider mt-[50px]'>{item.desc}</p>
                                <button className='border-2 border-gray-400 bg-transparent p-3 font-medium mt-[50px] shadow-md'>SHOW MORE</button>
                            </div>
                            
                        </div>
                        
                    ))
                }

            </div>
            <div
                onClick={()=>handlClick('right')}
                className='flex items-center top-1/2 right-0 absolute mr-2  bg-slate-50 rounded-full p-5 opacity-[50%] cursor-pointer hover:opacity-[100%]'>
                <ArrowForwardIosOutlinedIcon />
            </div>
        </div>
    )
}

export default Slider