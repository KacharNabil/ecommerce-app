import NavBar from "../components/NavBar"
import Announcement from "../components/Announcement"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import { useSelector } from 'react-redux/es/hooks/useSelector';




function Cart() {
    const cart = useSelector(state=>state.cart);
    const products =cart.product;

    return (
     
        <div>
            <Announcement />
            <NavBar />

            <h1 className='text-center font-light text-[30px] '>YOUR PANEL</h1>
            <div className="flex flex-col gap-4 md:flex-row md:gap-0 justify-between items-center mt-2 p-5">
                <button className="border-2 border-gray-500 py-1 px-2.5 rounded-lg shadow-md hover:text-white hover:bg-teal-500 hover:border-none hover:scale-105 hover:ease-linear hover:duration-300 font-normal">CONTINUE SHOPPING</button>
                <div>
                    <span className="mr-2 underline underline-offset-auto">Shopping Bag(2)</span>
                    <span className="mr-2 underline underline-offset-auto" >Your Whishlist(0)</span>
                </div>
                <button className="bg-black text-white py-1 px-2.5 rounded-lg shadow-md font-normal">CHECKOUT NOW</button>
            </div>
            <div className="flex flex-col md:flex-row  ">
            <div className=" flex flex-wrap  w-[100%] md:w-[75%] overflow-x-hidden ">

                {products.map(product=>(
                    
                    
                    <div className="flex flex-col w-full md:flex-row items-center justify-center border-b-2 border-gray-200 pb-2">
                        <div className="w-[30%] flex-auto p-4 mr-10">
                            <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" className=" rounded-full shadow-lg mr-4 " />
                        </div>

                        <div className="flex flex-col gap-4 flex-auto w-[60%]">
                            <span><b>Product:</b> HAKURA T-SHIRT</span>
                            <span><b>ID:</b> 562WH2175</span>
                            <div className="h-[25px] w-[25px] rounded-full bg-gray-600"></div>
                            <span><b>SIZE:</b> S</span>
                        </div>
                        <div className="flex flex-col flex-auto w-[20%] justify-center">
                            <div className="flex items-center font-semibold text-[25px] justify-center">
                                <div className="mr-2 ">+</div>
                                <div className="mr-2">2</div>
                                <div className="mr-2 ">-</div>
                            </div>
                            <span className="text-center font-light text-[30px] ">$ 30</span>
                        </div>
                    

                </div>
                
                ))
                    
                }
                </div>

                <div className="flex-auto w-[100%] md:w-[25%] flex flex-col gap-3 border-2 p-5 sticky top-2  h-fit  border-gray-200 rounded-md shadow-xl">
                    <h1 className="text-center text-[30px] font-light mb-3">ORDER SUMMARY</h1>
                    <div className="flex justify-start">
                        <span className="flex-auto w-[80%]">SubTotal:</span>
                        <span className="flex-auto w-[20%]">$ 80</span>
                    </div>
                    <div className="flex justify-start">
                        <span className="flex-auto w-[80%]">Shipping Fees:</span>
                        <span className="flex-auto w-[20%]">$ 5.90</span>
                    </div>
                    <div className="flex justify-start">
                        <span className="flex-auto w-[80%]">Shipping dicount:</span>
                        <span className="flex-auto w-[20%]">-$ 5.90</span>
                    </div>
                    <div className="flex justify-start font-bold text-lg">
                        <span className="flex-auto w-[80%] ">TOTAL:</span>
                        <span className="flex-auto w-[20%]">$ 80</span>
                    </div>
                    <button className="text-white bg-black rounded-md py-1.5 px-3 w-[90%] mx-auto">CHECKOUT NOW</button>
                </div>
            </div>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Cart