import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import { productsData } from './productsData'
import ProductDetails from '../Components/ProductDetails'
import Home from './Home'
import AboutUs from '../Components/AboutUs'
import ContactUs from '../Components/ContactUs'
import Cart from '../Components/Cart'


function Routing() {
  return (
    <div>
      

      <BrowserRouter>
       <Navbar/>
        
      
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default Routing
