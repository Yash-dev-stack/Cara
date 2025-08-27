import React from "react";
import { assets } from "./../assets/assets";

const Banner = () => {
  return (
    <div
      className=" mt-[21px] sm:mt-[40px] mb-[21px] sm:mb-[40px] flex items-center justify-center  w-full h-[27vh] sm:h-[40vh] p-[15px] bg-cover bg-center flex-col"
      style={{
        backgroundImage: `url(${assets.b2})`,
      }}
    >
      <h4 className="text-[16px] text-white ">Repair Services</h4>
      <h2 className="text-[18px] sm:text-[30px] text-white pt-[10px] pb-[10px] font-[600]">
        Up to <span className="text-bannerColor">70% Off</span> - All t-Shirts &
        Accessories
      </h2>
      <button className="text-[15px] mt-6 font-[600] pt-[10px] sm:pt-[15px] pb-[10px] sm:pb-[15px] pr-[20px] sm:pl-[30px] pl-[20px] sm:pr-[30px] bg-white text-black border-none outline-none rounded-[5px] cursor-pointer transition-all hover:text-white hover:bg-tertiary">
        Explore More
      </button>
    </div>
  );
};

export default Banner;
