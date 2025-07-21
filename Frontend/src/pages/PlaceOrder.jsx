import React,{useState} from 'react'
import CartTotal from '../components/CartTotal.jsx'
import {assets} from '../assets/assets.js'

const PlaceOrder = () => {
  
  const [method, setMethod] = useState('cod')
  
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-4 sm:pt-14 min-h-[80vh] border-t p-7'>
    
    <div className='flex flex-col gap-4 w-full sm:max-w-[480px]' >
    <h2 className='text-3xl font-medium' >Delivery Information</h2>
    
    <div className='flex gap-3' >
    <input type='text' placeholder='First Name' className='border border-gray-300 py-1.5 px-3.5 w-full rounded ' />
    <input type='text' placeholder='Last Name' className='border border-gray-300 py-1.5 px-3.5 w-full rounded ' />
   </div>
    
    <input type='email' placeholder='Email Address' className='border border-gray-300 py-1.5 px-3.5 w-full rounded ' />
    <input type='text' placeholder='Street' className='border border-gray-300 py-1.5 px-3.5 w-full rounded ' />
    
    
    <div className='flex gap-3' >
    <input type='text' placeholder='City ' className='border border-gray-300 py-1.5 px-3.5 w-full rounded ' />
    <input type='text' placeholder='State' className='border border-gray-300 py-1.5 px-3.5 w-full rounded ' />
   </div>

    <div className='flex gap-3' >
    <input type='number' placeholder='Zip code' className='border border-gray-300 py-1.5 px-3.5 w-full rounded ' />
    <input type='text' placeholder='Country' className='border border-gray-300 py-1.5 px-3.5 w-full rounded ' />
   </div>
    <input type='number' placeholder='Phone' className='border border-gray-300 py-1.5 px-3.5 w-full rounded ' />

    </div>
     
    <div className='mt-8'>
    <div className='mt-8 min-w-80'>
     <CartTotal/>
    </div>
    
    <div className='mt-8 min-w-80'>
 <p className='text-2xl font-medium text-black mb-6'>Payment methods</p>
 
    <div onClick={() => setMethod('razorpay')} className='border px-2 py-4 border-gray-500 flex items-center flex-row rounded mb-3 '>
     <p className={`w-4 h-4 border mr-12 rounded-full ${method === 'razorpay' ? 'bg-tertiary' : ''} `}></p>
     <img src={assets.razorpay} className="w-40" />
    </div>
    
    <div onClick={() => setMethod('stripe')} className='border px-2 py-4 border-gray-500 flex items-center flex-row rounded mb-3 '>
     <p className={`w-4 h-4 border mr-12 rounded-full ${method === 'stripe' ? 'bg-tertiary' : ''} `} ></p>
     <img src={assets.stripe} className="" />
    </div>
    
    <div onClick={() => setMethod('cod')} className='border px-2 py-4 border-gray-500 flex items-center flex-row rounded '>
     <p className={`w-4 h-4 border mr-12 rounded-full ${method === 'cod' ? 'bg-tertiary' : ''} `}></p>
     <p className='text-2xl text-gray-800 font-medium' >Cash on delivery</p>
    </div>
    
    <button className=' mt-5 w-50 text-center cursor-pointer text-2xl ml-12 bg-tertiary text-white px-8 py-5 rounded-xl font-medium ' >Order now</button>
     
    </div>
    
    
    
    </div>
    </div>
  )
}

export default PlaceOrder