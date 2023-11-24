import { useState } from "react"
import {Link} from "react-router-dom";


function CategoryItem({ item }) {

  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="flex-1 m-3 h-[70vh] justify-center relative  shadow-md"
      onMouseEnter={() => { setIsShown(true) }}
      onMouseLeave={() => { setIsShown(false) }}
    >
      <Link to={`/products/${item.cat}`}>
      <img className='object-cover h-full w-full rounded-md' src={item.img} />
      {isShown && <div className="absolute h-full w-full top-0 left-0 flex flex-col items-center justify-center mb-2 bg-slate-500 bg-opacity-30 hover: transition-transform ease-linear duration-100">
        <h1 className="text-white font-semibold text-[30px] opacity-hidden">{item.title}</h1>
        <button className="bg-white text-gray-500 p-2 rounded-md">SHOP NOW</button>
      </div>}
      </Link>
    </div>
  )
}

export default CategoryItem