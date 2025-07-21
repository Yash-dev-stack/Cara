import React from 'react'

const Banner = () => {
  return (
    <div className="mt-[40px] mb-[40px] flex items-center justify-center bg-banner w-full h-[40vh] p-[15px] bg-cover bg-center flex-col">
     <h4 className="text-[16px] text-white ">Repair Services</h4>
    <h2 className="text-[30px] text-white pt-[10px] pb-[10px] font-[600]">Up to <span className="text-bannerColor">70% Off</span> - All t-Shirts & Accessories</h2>
    <button className="text-[15px] font-[600] pt-[15px] pb-[15px] pl-[30px] pr-[30px] bg-white text-black border-none outline-none rounded-[5px] cursor-pointer transition-all hover:text-white hover:bg-tertiary" >Explore More</button>
    </div>
  )
}

export default Banner