import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Blog from './pages/Blog.jsx'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail.jsx'
import SearchBar from './components/SearchBar.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Profile from './pages/Profile.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const  App = () => {

  return (
  <div >
  
  
    <ToastContainer/>
    <Navbar/>
    <SearchBar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/shop" element={<Shop/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/productDetail/:productId" element={<ProductDetail/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/place-order" element={<PlaceOrder/>} />
    </Routes>
    <Footer/>
    
    
    </div>
    )
}

export default App
