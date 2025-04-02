import stars from '../assets/5stars.png'
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { productsData } from '../pages/productsData';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../pages/cartSlice';
import { toast } from 'react-toastify';

function ProductDetails() {

  let dispatch = useDispatch()
let cartItems =  useSelector((state)=>state.products)


  let {id} = useParams();

  let products = productsData.find( (p)=> p.id === Number(id));

  if(!products){
    return <h1>Product Not Found</h1>
  }

  return (
    <div>

      <Link to={`/`}>
        <div className='text-gray-800 font-semibold px-16 py-5 flex items-center gap-2 cursor-pointer'>
          <span><FaArrowLeftLong /></span>
          <p>Back to Products</p>

        </div>
      </Link>

      <div className='grid grid-cols-1 py-4 md:grid-cols-2 justify-between items-center px-16 mt-10'>
        <div className=''>
          <img src={products.image} alt="" />
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='text-black font-bold text-2xl'>{products.name}</h1>
          <p className='text-black font-bold text-2xl'>{products.price}</p>
           <img className='h-[60px] w-[110px] py-0' src={stars} alt="" />
          <div className='bg-zinc-200  flex items-center justify-evenly cursor-pointer hover:bg-zinc-300 w-[110px] py-1'>
            <span><PiShoppingCartSimpleBold /></span>
            <button className='cursor-pointer' onClick={()=>{
              dispatch(addToCart(products));
              toast.success("Added to Cart")
              }} > Add tocart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
