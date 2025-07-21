import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext.jsx'
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {

  const { token, setToken, navigate, backendUrl, cartItem } = useContext(ShopContext)
  const [currentState, setCurrentState] = useState("Sign-up");
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
   
  const validateForm = () => {
    if(currentState === 'Sign-up' && !name.trim()) {
      toast.error('Please enter your name');
      return false
    }
    else if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email')
      return false
    }
    else if (password.length < 8 ) {
      toast.error('Password length should be greater than 8')
      return false
    }
    return true;
  }
  
  const handleAuthRequest = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      if(response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token)
        toast.success(response.data.msg);
        navigate('/')
      } else {
        toast.error(response.data.msg)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if(!validateForm()) return
    try {
      setLoading(true)
      const url = currentState === 'Sign-up' ? 
      backendUrl + '/api/user/register' : 
      backendUrl + '/api/user/login';
      
      const data = currentState === 'Sign-up' ? 
      {name, email, password} : 
      {email, password}
      
      await handleAuthRequest(url, data);
    } 
     catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    if(localStorage.getItem('token') && token) {
      navigate('/');
    }
  }, [token, navigate, cartItem])

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center justify-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800  ' >
      <div className='inline-flex gap-2 mb-2 mt-10 items-center' >
        <p className='prata-regular text-3xl' >
          {currentState}
        </p>
      </div>
      {
        currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="name" className='w-full px-3 py-2 rounded border border-gray-700' />
      }
      <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email' className='w-full px-3 py-2 rounded border border-gray-700 ' />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' className='w-full px-3 py-2 rounded border border-gray-700 ' />

      <div className='mt-8 w-full flex justify-between text-sm' >
        {
          currentState === 'Sign-up' ? '' : <p className='cursor-pointer' >Forgot your password</p>
        }
        {
          currentState === 'Sign-up' ?
            <p onClick={() => setCurrentState("Login")} className='cursor-pointer' >Login</p>
            : <p onClick={() => setCurrentState("Sign-up")} className='cursor-pointer' >Create Account</p>
        }

      </div>

      <button type='submit' className='bg-tertiary text-white font-medium mt-4 px-8 py-2 rounded' >{
        loading ? 'Processing...' : currentState === 'Login' ? 'Sign-in' : 'Sign-up'
      }</button>

    </form>
  )
}

export default Login