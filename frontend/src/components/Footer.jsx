import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
  return (
    <div className='flex justify-between flex-col md:flex-row'>
        <div className='flex-1 p-5'>
            <h1 className='font-bold text-[30px]'>Snow<span className='text-gray-500'>Shop</span></h1>
            <p className='tracking-wider mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            <div className='flex justify-start items-center'>
                <div className=' text-white bg-[#3b5998] rounded-full p-1 mr-4 mt-3 cursor-pointer'><FacebookIcon/></div>
                <div className=' text-white bg-[#962fbf] rounded-full p-1 mr-4 mt-3 cursor-pointer'><InstagramIcon/></div>
                <div className=' text-white bg-[#E60023] rounded-full p-1 mr-4 mt-3 cursor-pointer'>< PinterestIcon/></div>
            </div>
        </div>
        <div className='flex-1 p-5'>
            <h1 className='font-bold text-lg'>Useful Links</h1>

        </div>
        <div className='md:flex-1 p-5'>
        <h1 className='font-bold text-lg md:mb-7'>Contact</h1>
        <div className='flex flex-col md:flex-row justify-start md:mb-4'>
            <div className='mr-4 '><LocationOnIcon/></div>
            <h3>Tangier,Morocco</h3>
        </div>
        <div className='flex flex-col md:flex-row justify-start md:mb-4'>
            <div className='mr-4 '><CallIcon/></div>
            <h3>+212 770378917</h3>
        </div>
        <div className='flex flex-col md:flex-row justify-start md:mb-4'>
            <div className='mr-4 '><MailOutlineIcon/></div>
            <h3>kacharnabil1@gmail.com</h3>
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
        </div>
    </div>
  )
}

export default Footer