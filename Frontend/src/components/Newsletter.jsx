import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Newsletter = () => {
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between flex-wrap bg-newsletter bg-no-repeat bg-newsColor mt-[40px] mb-[40px] pt-[30px] sm:pt-[40px] pb-[30px] sm:pb-[40px] pl-[40px] sm:pl-[80px] pr-[40px] sm:pr-[80px]">
      <div>
        <h4 className="text-[22px] font-bold text-white ">
          Sign up for newsletter
        </h4>
        <p className="text-[12px] sm:text-[14px] font-[600] text-para2">
          Get E-mail updates about our latest deals &{" "}
          <span className="text-spanColor2">special offers</span>
        </p>
      </div>
      <div className="">
        <input
          type="email"
          className="text-[14px]  border border-transparent mt-9 outline-none rounded rounded-tr-[0] rounded-br-[0] pt-[10px] sm:pt-[15px] pb-[10px] sm:pb-[15px] pl-[10px] sm:pl-[30px] pr-[10px] sm:pr-[30px]"
          placeholder="enter your email "
        />
        <button
          onClick={() => navigate("/login")}
          className="text-white bg-tertiary rounded-tl-[0] rounded-bl-[0] whitespace-nowrap transition text-[15px] font-[600] pt-[15px] pb-[15px] pl-[30px] pr-[30px] border-none outline-none rounded-md cursor-pointer"
        >
          Sign-up
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
