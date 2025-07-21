import {createContext, useState, useEffect} from 'react'
import {products} from '../assets/assets.js'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios';

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
  
  const currency= '₹'
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [cartItem, setCartItem] = useState({})
  const [token, setToken] = useState('')
  const navigate = useNavigate();
  
  const headingStyle = "text-[46px] font-bold leading-[54px] text-quaternary"
  const paragraphStyle = "text-[16px] text-para mt-[15px] mb-[20px]"
  
  
  const addToCart = async (elemId, size) => {
    let cartData = structuredClone(cartItem)
    if(!size) {
      toast.error('Please select the size')
      return;
    }
    if(cartData[elemId]) {
      if(cartData[elemId][size]) {
        cartData[elemId][size] += 1
       toast.success("Poduct is add to cart")
      }else {
        cartData[elemId][size] = 1
       
      }
    } else {
      cartData[elemId] = {}
      cartData[elemId][size] = 1
      toast.success("Poduct is add to cart")
    }
    setCartItem(cartData)
    if(token) {
      try {
      await axios.post(`${backendUrl}/api/cart/add`, {elemId, size}, {headers:{token}})
      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
    }
  }
  
  const updateCart = async (elemId, size, quantity) => {
  const cartData = structuredClone(cartItem); // Deep clone the cart object

  if (quantity === 0) {
    // Remove the size entry
    delete cartData[elemId][size];
    
    // If no sizes remain for this item, remove the item
    if (Object.keys(cartData[elemId]).length === 0) {
      delete cartData[elemId];
    }
  } else {
    // Update quantity
    cartData[elemId][size] = quantity;
  }

  setCartItem(cartData); // Update state
  
  if(token) {
    try {
      await axios.post(`${backendUrl}/api/cart/update`, {elemId, size, quantity}, {headers: {token}})
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }
  
};


  
  const getCartCount = () => {
    let totalCount = 0 
    for(const element in cartItem){
      for(const elem in cartItem[element]) {
        try {
          if(cartItem[element][elem] > 0) {
            totalCount += cartItem[element][elem]
          }
        } catch (error) {
          console.log("Error in getCartCount function: ", error)
        }
      }
    }
    return totalCount
  }
  
  const getUserCart = async (token) => {
    try {
      const response = await axios.post(`${backendUrl}/api/cart/get`, {}, {headers: {token}});
      if(response.data.success) {
        setCartItem(response.data.cartData)
      } 
    } catch (error) {
      console.log(error)
        toast.error(error.message)
    }
  }
  
  
  
  
  useEffect(() => {
  if (!token && localStorage.getItem('token')) {
    setToken(localStorage.getItem('token'));
    getUserCart(localStorage.getItem('token'));
  }
}, [token]);

  
  
  
   const value = {currency, headingStyle, paragraphStyle, products, search, setSearch, showSearch ,setShowSearch, cartItem, updateCart, addToCart, getCartCount, token, setToken, backendUrl, navigate}
  
  return(
  <ShopContext.Provider value={value}>
  {props.children}
  </ShopContext.Provider>
    )
  
  
}

export default ShopContextProvider