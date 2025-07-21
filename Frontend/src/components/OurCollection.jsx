import React,{useState, useEffect, useContext} from 'react'
import Products from './Products.jsx'
import {ShopContext} from '../context/ShopContext'



const OurCollection = () => {
  
const {products, headingStyle, paragraphStyle} = useContext(ShopContext)
  const [productItem, setProductItem] = useState([])
  
  useEffect(() => {
    try {
    if (products && products.length > 0) {
      setProductItem(products.slice(0,8))
      }else {
        <p>Products are not available</p>
      }
      
    } catch (error) {
      console.log("Error in loading products:" + error)
    }
  },[products])
  
  
  return  (
    <div className='mt-10'>
    <div className='text-center m-auto gap-4 '>
  <h2 className={headingStyle} >Our Collections</h2>
    <p className={paragraphStyle}>We have latest collection across the market</p>
    </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 pt-10 flex-wrap pt-[10px] pl-[10px] pr-[10px] pb-[10px] flex justify-between items-center'>
       {
         productItem.map((elem, index) => (
           <div key={elem._id}>
           <Products  id={elem._id} name={elem.name} price={elem.price} image={elem.image} />
           </div>
           ))
       }
    </div>
    </div>
  ) 
}

export default OurCollection