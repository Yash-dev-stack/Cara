import React from "react";
import { assets } from "../assets/assets.js";

import { footerAbout } from "../assets/assets";
import { footerAccount } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="pt-[21px] sm:pt-[40px] pb-[21px] sm:pb-[40px] pl-[40px] pr-[40px] sm:pl-[80px] sm:pr-[80px] flex justify-between flex-wrap">
        <div className="flex items-start flex-col mb-[20px]">
          <img className="mb-[30px]" src={assets.logo} alt="footer_logo" />
          <h4 className="text-[14px] pb-[20px] text-quaternary font-[600]">
            Contact
          </h4>
          <p className="text-[12px] mb-[8px] text-para">
            <strong>Address: </strong>555 Shimla road 32, Jammu, INDIA
          </p>
          <p className="text-[12px] mb-[8px] text-para">
            <strong>Phone: </strong>+91 48849 3888 (968-89) 88363
          </p>
          <p className="text-[12px] mb-[8px] text-para">
            <strong>Hours: </strong>10:00 to 18:00 Mon-Sat
          </p>
        </div>

        <div className="flex items-start flex-col mb-[20px]">
          <h4 className="text-[14px] pb-[12px] sm:pb-[20px]  text-quaternary font-[600]">
            About
          </h4>
          {footerAbout && footerAbout.length > 0 ? (
            footerAbout.map((elem, index) => (
              <div className="text-[13px] mb-[10px] text-quaternary hover:text-tertiary">
                {elem.title}
              </div>
            ))
          ) : (
            <p>About list is not available</p>
          )}
        </div>

        <div className="flex items-start flex-col mb-[20px]">
          <h4 className="text-[14px] pb-[12px] sm:pb-[20px]   text-quaternary font-[600]">
            My Account
          </h4>
          {footerAccount && footerAccount.length > 0 ? (
            footerAccount.map((elem, index) => (
              <div className="text-[13px] mb-[10px] text-quaternary hover:text-tertiary">
                {elem.title}
              </div>
            ))
          ) : (
            <p>Account list is not available</p>
          )}
        </div>

        <div className="flex items-start flex-col mb-[20px]">
          <h4 className="text-[14px] pb-[10px] text-quaternary font-[600]">
            Install App
          </h4>
          <p className="text-[12px] mb-[8px] text-para">
            From App store or Google Play
          </p>
          <div className="flex items-center justify-between gap-1.5">
            <img
              className="border border-tertiary rounded-[6px]"
              src={assets.app}
              alt="install icom"
            />
            <img
              className="border border-tertiary rounded-[6px]"
              src={assets.play}
              alt="install icom"
            />
          </div>
          <p className="text-[12px] mb-[8px] text-para">
            Secured payment Gateways
          </p>
          <img className="mt-[10px] mb-[15px]" src={assets.pay} alt="pay" />
        </div>
      </div>

      <div className="w-full text-center">
        <p className="text-[9px] sm:text-[15px] mb-[18px] text-para">
          Cara E-commerce React website <strong>by-yash</strong> All @rights are
          reserved 2025
        </p>
      </div>
    </>
  );
};

export default Footer;
