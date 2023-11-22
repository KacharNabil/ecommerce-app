import NavBar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import NewLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

function ProductList() {
    return (
        <div>
          
            <Announcement />
            <NavBar />
            <div className='p-3'>
                <h1 className='font-bold text-[30px]'>Clothes</h1>
                <div className='flex justify-between items-center my-4 '>
                    <div>
                        <span className='font-medium text-[15px] mr-3'>Filter Products:</span>
                        <select className='bg-gray-200 rounded-md p-1 font-medium mr-2' >
                            <option value="" disabled selected>Color</option>
                            <option value="">White</option>
                            <option value="">Black</option>
                            <option value="">Blue</option>
                            <option value="">Red</option>
                            <option value="">Yellow</option>
                            <option value="">Green</option>
                        </select>
                        <select className='bg-gray-200 rounded-md p-1 font-medium' >
                            <option value="" disabled selected>Size</option>
                            <option value="">XS</option>
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                        </select>
                    </div>
                    <div>
                        <span  className='font-medium text-[15px] mr-3'>Sort Products:</span>
                        <select className='bg-gray-200 rounded-md p-1 font-medium mr-2'>
                            <option value="" selected>Newest</option>
                            <option value="">Price (asc)</option>
                            <option value="">Price (desc)</option>
                        </select>
                    </div>
                </div>
            </div>
            <Products />
            <NewLetter />
            <Footer />

        </div>
    )
}

export default ProductList