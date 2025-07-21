import React, {useState, useContext, useEffect} from 'react'
import {ShopContext} from '../context/ShopContext'
import Products from './Products.jsx'

const Bestseller = () => {
  
  const {products, headingStyle, paragraphStyle} = useContext(ShopContext)
  
  const [bestsellerProduct, setBestsellerProduct] = useState([])
  
  useEffect(() => {
    try {
   const bestSellerProduct = products.filter((elem) => elem.bestseller)
   setBestsellerProduct(bestSellerProduct.slice(0,8))
      
    } catch (error) {
    console.log("Error in loading bestseller",error)
    }
  },[products])
  
  return (  
    
    <div className='mt-10'>
    <div className='text-center m-auto gap-4 '>
  <h2 className={headingStyle} >Our Bestsellers</h2>
    <p className={paragraphStyle}>Our Bestseller collection across the market</p>
    </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 pt-10 flex-wrap pt-[10px] pl-[10px] pr-[10px] pb-[10px] flex justify-between items-center'>
       {
         bestsellerProduct.map((elem, index) => (
           <div key={elem._id}>
           <Products  id={elem._id} name={elem.name} price={elem.price} image={elem.image} />
           </div>
           ))
       }
    </div>
    </div>

  )
}

export default Bestseller