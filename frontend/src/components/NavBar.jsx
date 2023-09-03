import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

function NavBar() {
    return (
        <div className="h-[60px] px-[20px] py-[10px] flex justify-between items-center">
            <div className="flex-1 flex gap-2 items-center ">
                <span className="cursor-pointer font-medium">EN</span>
                <div className='relative '>
                    <SearchIcon className='absolute text-gray-400 ml-2 mt-1 w-5  ' />
                    <input
                        className='pl-8 rounded-xl pr-2 py-0.5 border-2 border-gray-400'
                        type="text"
                    />

                </div>
            </div>
            <div className="flex-1 font-bold text-center text-[25px]">Snow<span className='text-gray-400'>Shop</span></div>
            <div className="flex-1 flex items-center justify-end font-medium">
                <div className='ml-5 cursor-pointer'>Register</div>
                <div className='ml-5 cursor-pointer'>Sign In</div>
                <div className='ml-5 cursor-pointer'>
                    <Badge badgeContent={4} color="primary">
                        < LocalGroceryStoreOutlinedIcon />
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default NavBar