import productimage from '../assets/productimage.jpg'
import Announcement from '../components/Announcement'
import NavBar from '../components/NavBar'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { publicRequest } from '../../requestMethod'
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';

function Product() {

    const location = useLocation();
    const id =location.pathname.split('/')[2];
    const [product,setProduct]=useState({});
    const [size,setSize] = useState('');
    const [color,setColor] = useState('');
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const getProduct =async ()=>{
            try{
                const res = await publicRequest.get('/products/find/'+id);
                setProduct(res.data);

            }catch(err){

            }
        }

    },[id]);
    

    const [count,setCount]=useState(1);
    const handlClick = () => {
        if(count==1){
            setCount(count)
        }
        else{
            setCount(count-1)
        }
    }

    const handleClick = ()=>{
        dispatch(addProduct({...product,size,color,quantity}));
    }

  return (
    <div>
        
        <Announcement/>
        <NavBar/>
        <div className='flex flex-col md:flex-row pt-8 px-8 '>
            <div className='flex-1'>
            <img src={product.img}  className='w-100 h-[60%] mx-auto' />
            </div>
            
            <div className='flex-1 '>
                <h1 className='font-normal text-[50px] mb-5'>{product.title}</h1>
                <p className=' tracking-wider font-light text-lg mb-5'>
                    {product.desc}
                </p>
                <span className='font-light tracking-wider text-[40px] '>$ {product.price}</span>
                <div className='flex items-center mt-5'>
                    <div className='mr-9 flex items-center'>
                        <span className='font-light text-lg mr-3'>
                            Color
                        </span>
                       {product.color?.map(c=>(
                        <div className={`bg-${c}-600 h-6 w-6 rounded-full cursor-pointer mr-3`} key={c} onClick={()=>setColor(c)}></div>
                       ))}
                      
                     
                        
                    </div>
                    <div>
                    <span className='font-light text-lg mr-3'>
                        Size
                    </span>
                        <select className='bg-gray-200 rounded-md p-1 font-medium' onChange={(e)=>setSize(e.target.value)} >
                            <option value="" disabled >Size</option>
                           {product.size?.map(s=>(
                                   <option key={s}>{s}</option>
                           )
                            
                            )}
                        </select>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:items-center  mt-8'>
                    <div className='flex items-center mr-8'>
                        <div 
                        onClick={handlClick}
                        className=' text-[40px] font-semibold mr-3 cursor-pointer'>-</div>
                        <div className=' text-[20px] font-light mr-3 border-2 border-gray-500 px-4 rounded-lg mt-2'>{count}</div>
                        <div 
                        onClick={()=>(setCount(count+1))}
                        className='text-[40px] font-semibold mr-3 cursor-pointer'>
                            +
                        </div>
                    </div>
                    <div>
                        <button className=' bg-transparent border-2 p-2 rounded-md shadow-md font-light border-gray-300 hover:bg-gray-200 hover:border-none ' onClick={handleClick}>ADD TO CART</button>
                    </div>

                </div>
            </div>
        </div>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Product