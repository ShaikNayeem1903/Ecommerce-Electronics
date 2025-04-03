import React, { useContext } from 'react'
import stars from '../assets/5stars.png'
import { productsData } from '../pages/productsData';
import { dataContext } from '../pages/context';
import { Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../pages/cartSlice';
import { toast } from 'react-toastify';

function Products() {

        let dispatch = useDispatch();

       let data= useSelector(state=>state.products)
       console.log(data);
       
    

    let {cate,setCete,input,setInput,productTittles}=useContext(dataContext)
    

   



    return (
        <div>

            <div className=' w-full my-5 flex items-center md:justify-center lg:justify-normal flex-wrap px-5 lg:px-58 gap-4 '>

                {
                    productTittles.map((items) => (

                        <button key={items.id} className='px-2 rounded-sm py-1.5 bg-slate-300 hover:bg-slate-400 flex justify-center items-center cursor-pointer  hover:scale-110 shadow-sm md:text-base sm:text-sm whitespace-nowrap transition-all ease-in active:scale-110' onClick={()=>filter(items.name)}>{items.name}</button>
                    ))
                }

            </div>


            <div className='w-full grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8 justify-between  my-8'>

                {

                    cate.map(
                        (items) => (
                            
                           
                            <Link key={items.id} to={`/product/${items.id}`}>
                                

                            <div  className=' bg-white rounded-xl shadow-xl transition-all duration-700 flex flex-col justify-center items-center gap-4 p-4 h-[500px]'>

                                <div className=' px-5  flex items-center justify-center bg-white'>
                                    <img className=' ' src={items.image} alt="" />
                                </div>
                                

                                <div className='w-full flex-col flex justify-center bg-slate-50 '>
                                    <h1 className='font-semibold py-1  '>{items.name.substring(0,20)+'...'}
                                    <Link to={`product/${items.id}`} className='text-gray-400 hover:text-blue-500 transition-all duration-300 font-normal text-lg'>more</Link>
                                    </h1>
                                   

                                    <h1 className='font-semibold text-xl'>{items.price}</h1>
                                    <img className='h-[60px] w-[110px] py-0' src={stars} alt="" />

                                    <h3 className='font-semibold'>FREE delivery</h3>

                                    <div className='w-[100px] h-[30px] bg-yellow-400 hover:bg-yellow-300 transition-all duration-200 whitespace-nowrap flex justify-center items-center rounded-2xl mt-4 ' onClick={(e)=>{
                                        e.preventDefault();
                                        e.stopPropagation();
                                        toast.success('Added to Cart');
                                        dispatch(addToCart(items))
                                    }}>
                                        <button className=' font-semibold cursor-pointer '>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            </Link>
                           
                           
                        )
                    )

                }




            </div>

        </div>
    )
}

export default Products
