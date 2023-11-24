import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


function Product({ item }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className='flex-1 bg-teal-50 m-2 h-[350px] flex items-center rounded-xl relative'
      onMouseEnter={() => { setIsShown(true) }}
      onMouseLeave={() => { setIsShown(false) }}
    >
      <div>
        <img src={item.img} alt={item.title} />
      </div>
      {isShown && (
        <div className='h-full w-full absolute top-0 left-0 flex items-center justify-center gap-4 bg-slate-400 bg-opacity-60'>
          <div className='text-gray-500 bg-white p-1 rounded-full cursor-pointer transform transition-transform delay-75 ease hover:scale-125'>
            <AddShoppingCartIcon />
          </div>
          <div className='text-gray-500 bg-white p-1 rounded-full cursor-pointer transform transition-transform delay-75 ease hover:scale-125'>
            <Link to={`/product/${item._id}`}>
           < SearchIcon />
           </Link>
          </div>
          <div className='text-gray-500 bg-white p-1 rounded-full cursor-pointer transform transition-transform delay-75 ease hover:scale-125'>
            
            <FavoriteBorderIcon />
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
