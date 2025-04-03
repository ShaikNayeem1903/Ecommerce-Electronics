import React, { useContext } from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import { LuFacebook } from "react-icons/lu";
import { SlSocialTwitter } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";
import { dataContext } from '../pages/Context';
function Footer() {
    let { productTittles, filter } = useContext(dataContext)
    return (

        <Link to={`/`}>
            <footer className=''>

                <div className='bg-gray-900 shadow-2xl grid grid-cols-1 md:grid-cols-2 justify-items-center py-2 relative'>

                    <div>
                        <h1 className='text-white text-2xl font-semibold'>Subscribe our Newsletter</h1>
                    </div>

                    <div>

                        <form action="" className='bg-white px-2 w-[300px] h-[30px] flex items-center'>
                            <input type="text" placeholder='Enter Your Email' className=' outline-none'  />
                        </form>

                        <div className='absolute bottom-2.5  right-18 lg:top-3 lg:right-30 xl:right-50 md:right-15  px-5 z-10 bg-slate-50 cursor-pointer hover:scale-105 ease-in transition-all'>
                            <button className='cursor-pointer'>Submit Now</button>
                        </div>
                    </div>
                </div>



                <div className='bg-blue-950 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 items-center justify-items-normal px-4 py-4'>

                    <div className=' flex flex-col gap-5'>

                        <img src={logo} alt="" className='object-contain w-[130px]' />


                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quas quo excepturi sed atque voluptatem ipsa aut animi placeat esse! </p>

                        <div className='flex gap-4 w-full'>
                            <LuFacebook className='bg-white  w-[40px] md:w-[30px] h-[30px] p-1 rounded-md' />
                            <SlSocialTwitter className='bg-white w-[40px] md:w-[30px] h-[30px] p-1 rounded-md' />
                            <FaWhatsapp className='bg-white w-[40px] md:w-[30px] h-[30px] p-1 rounded-md' />
                            <IoLogoInstagram className='bg-white w-[40px] md:w-[30px] h-[30px] p-1 rounded-md' />
                        </div>

                    </div>

                    <div className='text-white flex flex-col gap-1 justify-self-end md:justify-self-center '>
                        <h1 className='font-bold text-xl mb-2'>Pages</h1>

                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/'>About</Link>
                            </li>
                            <li>
                                <Link to='/'>FAQS</Link>
                            </li>
                            <li>
                                <Link to='/'>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='text-white flex flex-col gap-1 mt-4 '>
                        <h1 className='font-bold text-xl mb-2'>Categories</h1>

                        <ul>
                            {
                                productTittles.map((items) => (
                                    <li key={items.id} className='cursor-pointer' onClick={() => filter(items)}>{items.name}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='text-white flex flex-col gap-1 justify-self-end md:justify-self-center'>
                        <h1 className='text-white flex flex-col gap-1 w-1/4'>Contack</h1>
                        <p>+12345 678 910</p>
                        <p>+12345 678 109</p>
                    </div>

                </div>

                <div className='w-full h-[40px] bg-gray-900 flex justify-end '>
                    <p className=' flex items-center  text-white mx-auto'>Copyright <span><FaRegCopyright /></span> <span>2022 OnlineTtuts</span></p>
                </div>
            </footer>
        </Link>
    )
}

export default Footer
