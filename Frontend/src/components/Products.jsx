import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import {Link} from 'react-router-dom'

const Products = ({id, name, price, image}) => {
  
  const {currency} = useContext(ShopContext)
  
  return (
    <Link to={`/productDetail/${id}`} >
    <div className='w-[21%] min-w-[230px] pt-[10px] pb-[10px] pl-[20px] pr-[20px] border border-borderColor2 shadow-shadow2 rounded-[25px] relative mt-[15px] mb-[15px] transition-all hover:shadow-shadow3 '>
     <img src={image[0]} className='w-full rounded-[25px]  ' />
     <div className="text-start pt-[10px] pb-[10px]">
     <p className='text-[15px] pt-[7px] text-secondary font-[600]'>{name}</p>
     <p className='text-tertiary pt-[7px] font-bold text-[15px] '>{currency}{price}</p>
     </div>
    </div>
    </Link>
  )
}

export default Products