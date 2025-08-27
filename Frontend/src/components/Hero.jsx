import React from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-full flex items-start flex-col justify-center bg-cover">
        <div className="">
          <img src={assets.hero} alt="hero-img" />
        </div>

        <div className="absolute  sm:top-45% left-[30px] sm:left-[80px]">
          <h4 className="text-xl sm:text-md md:text-quaternary pb-[15px]  font-medium">
            Trade-in-offer
          </h4>
          <h2 className="text-xl md:text-5xl text-quaternary  sm:leading-[54px] font-medium  md:font-[600]">
            Super value deals
          </h2>
          <h1 className=" text-[27px] sm:text-[50px]  leading-10 md:leading-[64px] text-tertiary font-bold">
            On all products
          </h1>
          <p className="text-para text-[11px] md:text-[16px] mt-[18px] md:mt-[15px] mb-[20px]">
            Save more with coupons & upto 70% off
          </p>

          <Link to="/shop">
            <button
              className="pt-[9px] sm:pt-[14px] pr-[80px] pb-[14px] pl-[65px] border-0 text-tertiary cursor-pointer font-bold text-[15px]"
              style={{
                backgroundImage: `url(${assets.button})`, // ✅ wrap inside url()
                backgroundRepeat: "no-repeat",
                backgroundColor: "transparent",
              }}
            >
              Shop now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
