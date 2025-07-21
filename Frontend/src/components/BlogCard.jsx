import React from 'react'


const BlogCard = ({img, text, date}) => {
  return (
      <div className='flex sm:flex-row relative flex-col items-center justify-between mb-28 ' >
    
    <div className='flex flex-col  mr-10 ' >
    <img src={img} className='shadow-gray-300 z-10 w-[460px] h-[300px] ' />
    </div>
    
    <div className='flex flex-col items-start justify-between w-[600px] ml-5 ' >
    <h3 className='text-gray-800 font-bold text-2xl mb-3' >The cotton jersey and Zip-Up Hoodie</h3>
    <p className='mb-3 font-normal text-gray-400' >{text}</p>
    <div className='flex flex-row  gap-4' >
    <p className='text-black font-medium mr-2' >Continue reading</p>
    <hr className='w-14 font-extrabold h-6 text-black' />
    </div>
    </div>
    <h1 className='text-7xl absolute left-0 top-[-54px] font-bold text-gray-400' >{date}</h1>
    </div>
  )
}

export default BlogCard