import React, { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { LiaUserSolid } from "react-icons/lia";
import logo from '../assets/logo.jpg'
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { dataContext } from '../pages/Context';
import { productsData } from '../pages/productsData';
import { useSelector } from 'react-redux';

function Navbar() {
      let data =useSelector((state)=>state.products)
      
      
  const [showUser,setShowUser]=useState(false)

  let {cate,setCete,input,setInput}=useContext(dataContext)

  useEffect(
    ()=>{
          let newList=productsData.filter((items)=>items.name.includes(input) || items.name.toLocaleLowerCase().includes(input))
          setCete(newList)
    },[input]
  )

  const onHandle= ()=>(
    setShowUser(!showUser)
  )
  return (
    <>
    <header className='bg-white w-full h-[70px] mb-6 shadow-md flex items-center justify-between lg:px-[140px]'>
     
     <div className=''>

     <ul className='flex justify-center items-center gap-5 font-semibold '>
      
      <li>
        <Link to='/'>Home</Link>
      </li>

      <li>
        <Link to='/aboutus'>About</Link>
      </li>

      <li>
        <Link to='/'>F&Q</Link>
      </li>

      <li>
        <Link to='/contactus'>Contact</Link>
      </li>
      
    </ul>
     </div>

     <div className='bg-slate-400 relative  flex justify-center items-center size-[50px] rounded-sm cursor-pointer'onClick={onHandle}>
     <LiaUserSolid className='size-[25px]  transition-all duration-200'  />
     </div>

      { showUser &&
     <div className='flex flex-col absolute right-1/9 top-14 z-10 my-2 w-[80px] h-[80px] justify-center items-center gap-2'>
      <p className='hover:bg-gray-300 w-full flex justify-center '><Link to='/'>Sign in</Link></p>
      <p className='hover:bg-gray-300 w-full flex justify-center '><Link to='/'>Register</Link></p>
     </div>
      }
   
    </header>


    <nav className=' w-full flex justify-between md:justify-around items-center bg-slate-50 shadow-xl'>
       
       <div className="">
        <Link to='/'>
        <img src={logo} alt="" className='object-contain w-[130px] h-[130px]'/>
        </Link>
       </div>

       <form className='bg-white md:w-[500px] lg:w-[700px] w-[200px] h-[50px] shadow-sm rounded-xl flex items-center justify-center'>
        <input placeholder='search products'value={input} onChange={(e)=>setInput(e.target.value)} className='w-full px-5 py-1 outline-none text-xl' type="text" />
       </form>


       <div className='bg-slate-400 flex justify-center items-center rounded-full size-[50px] cursor-pointer relative'>
      <Link to={`/cart`}><PiShoppingCartSimpleBold className='size-[25px]' /> </Link> 

      <div className='absolute z-10 bottom-9 right-8 bg-blue-600 rounded-full size-5 flex justify-center items-center text-white'>
        <span>{data.length}</span>
      </div>
       </div>

    </nav>
    
    </>
  )
}

export default Navbar
