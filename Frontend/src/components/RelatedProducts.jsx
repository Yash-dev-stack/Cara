import React,{useState, useEffect, useContext} from 'react'
import {ShopContext} from '../context/ShopContext'
import Products from './Products.jsx'

const RelatedProducts = ({category, subCategory}) => {
  
  const [related, setRelated] = useState([])
  const {products} = useContext(ShopContext)
  
  useEffect(() => {
    if(products.length > 0) {
      let productCopy = products.slice()
      productCopy = productCopy.filter((elem) => category === elem.category)
      productCopy = productCopy.filter((elem) => subCategory === elem.subCategory)
      setRelated(productCopy.slice(0,5))
    }
  },[products])
  
  return (
    <div className='my-20'>
    <div className='text-center text-3xl py-2 '>
    <h1>Related Products</h1>
    </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
    {
      related.map((elem, index) => (
        <Products key={elem._id || index} name={elem.name} price={elem.price} image={elem.image} id={elem._id} />
        ))
    }
    
    </div>
    </div>
  )
}

export default RelatedProducts