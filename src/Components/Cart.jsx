import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { decrementQnt, incrementQnt, remove } from '../pages/cartSlice';
import { toast } from 'react-toastify';
import { TbShoppingCartOff } from "react-icons/tb";
import { Link } from 'react-router-dom';

function Cart() {
  let cartItems = useSelector((state) => state.products)


  let disptch = useDispatch()


  let subTotal = cartItems.reduce((total, item) => total + item.price, 0);
  let delivaryCharges = 250;
  let total = subTotal + delivaryCharges
  return (
    <div className=''>
      <div>
        <h1 className='font-bold text-2xl px-32 py-4'>Shopping Cart</h1>
      </div>

      {cartItems.length===0 ? (
        <div className='text-center text-gray-500 text-2xl font-bold mt-10'>
          Your Cart Is Empty
          <div className='flex justify-center text-6xl  items-center py-4'>
         <Link to={`/`}><TbShoppingCartOff /></Link> 
          </div>
          
          
        </div>
      ) : (<div className=' flex flex-col md:flex-row justify-around w-full '>
        <div className='flex flex-col gap-4 items-center justify-center rounded-2xl shadow-2xl w-full md:w-[70%]'>


          {
            cartItems.map((items) => (
              <div className='flex justify-between items-center px-4' key={items.id}>  {/*Outer duv*/}

                <div className='px-4 size-36 flex items-center justify-center'>
                  <img src={items.image} alt="" />
                </div>

                <div className='flex flex-col gap-2 px-2'>
                  <h1 className='font-bold'>{items.name}</h1>


                  <div className='flex items-center gap-2 font-bold'>
                    <div className='flex gap-3 text-xl'>
                      <button className='cursor-pointer ' onClick={() => items.qnt > 1 ? disptch(decrementQnt(items.id)) : 1}>-</button>
                      <span>{items.qnt}</span>
                      <button className='cursor-pointer' onClick={() => disptch(incrementQnt(items.id))}>+</button>
                    </div>
                    <RiDeleteBin6Line className='text-red-500 cursor-pointer' onClick={() => {
                      disptch(remove(items.id));
                      toast.error(`Removed From Cart`)
                    }} />
                  </div>
                </div>
                <div>
                  <p className='font-bold text-xl'>{items.price}</p>
                </div>


              </div>

            ))
          }

        </div>



        <div className='md:w-[25%] w-full h-[200px] px-4 py-1 rounded-2xl shadow-2xl mt-10 md:mt-0 bg-slate-100'>

          <h1 className='font-bold text-xl text-black '>Order Sumarry</h1>

          <div className='py-4'>
            <div className='flex items-center justify-between  '>
              <h4>Subtotal:</h4>
              <h4>{subTotal}</h4>
            </div>


            <div className='flex  items-center justify-between  border-b-1 border-gray-300 py-1'>
              <h4>Shipping:</h4>
              <h4>{delivaryCharges}</h4>
            </div>


            <div className='flex items-center justify-between  py-1'>
              <h4 className='font-bold text-black'>Total:</h4>
              <h4>{total}</h4>
            </div>
          </div>

        </div>


      </div>)}

      

    </div>
  )
}

export default Cart
