import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
function Slider() {
  return (
    <div className='h-screen w-[100%] bg-blue-300'>
       
            <div className='flex items-center top-1/2 left-0 absolute ml-2 bg-slate-50 rounded-full p-5 opacity-[50%] cursor-pointer hover:opacity-[100%]'>
                <ArrowBackIosNewOutlinedIcon/>
            </div>
            <div className='flex items-center top-1/2 right-0 absolute mr-2  bg-slate-50 rounded-full p-5 opacity-[50%] cursor-pointer hover:opacity-[100%]'>
                <ArrowForwardIosOutlinedIcon/>
            </div>
      
        
    </div>
  )
}

export default Slider