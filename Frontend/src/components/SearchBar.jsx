import React,{useState, useEffect, useContext} from 'react'
import {ShopContext} from '../context/ShopContext.jsx'
import {assets} from '../assets/assets.js'

const SearchBar = () => {
  
  const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)
  const [visible, setVisible] = useState(false)
  
  
  return showSearch ? (
    <div className='duration-300 transition ease-out border-t border-b border-gray-200 text-center'>
    <div className='inline-flex items-center justify-center px-5 py-2 mx-5 my-3 w-3/4 sm:w-1/2 rounded-full border border-black border-1 shadow-gray-400 shadow-md shadow '>
    <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none  text-md ' />
    <img className='w-4 font-medium' src={assets.search_icon} />
    </div>
    <img onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer font-medium font-black' src={assets.cross_icon} />
    </div>
  ) : null
}

export default SearchBar