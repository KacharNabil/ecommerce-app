import NavBar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import NewLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

function ProductList() {
    const location = useLocation();
    const cat = location.pathname.split('/')[2];
    const [filter, setFilter] = useState({});
    const [sort,setSort]= useState('newest');
    const handleSelect = (e) => {
        const value = e.target.value;
        setFilter({
            ...filter,
            [e.target.name]: value
        }
        )
    }
    return (



        <div>

            <Announcement />
            <NavBar />
            <div className='p-3'>
                <h1 className='font-bold text-[30px]'>{cat}</h1>
                <div className='flex justify-between items-center my-4 '>
                    <div>
                        <span className='font-medium text-[15px] mr-3'>Filter Products:</span>
                        <select className='bg-gray-200 rounded-md p-1 font-medium mr-2' name='color' onChange={handleSelect} value={filter.color||''}>
                            <option  disabled >Color</option>
                            <option value="white">White</option>
                            <option value="black">Black</option>
                            <option value="blue">Blue</option>
                            <option value="red">Red</option>
                            <option value="yellow">Yellow</option>
                            <option value="green">Green</option>
                        </select>
                        <select className='bg-gray-200 rounded-md p-1 font-medium' name='size'  onChange={handleSelect} value={filter.size||''}>
                            <option disabled >Size</option>
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                        </select>
                    </div>
                    <div>
                        <span className='font-medium text-[15px] mr-3'>Sort Products:</span>
                        <select className='bg-gray-200 rounded-md p-1 font-medium mr-2' onChange={e=>{
                            setSort(e.target.value)
                        }}>
                            <option value="newest" >Newest</option>
                            <option value="asc">Price (asc)</option>
                            <option value="desc">Price (desc)</option>
                        </select>
                    </div>
                </div>
            </div>
            <Products cat={cat} filter={filter} sort={sort} />
            <NewLetter />
            <Footer />

        </div>
    )
}

export default ProductList