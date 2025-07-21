import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { ShopContext } from "../context/ShopContext.jsx";
import { toast } from "react-toastify";
import Profile from "../pages/Profile.jsx";

const Navbar = () => {
  const { setShowSearch, getCartCount, naviagte } = useContext(ShopContext);

  const logOut = async () => {
    try {
      if (!localStorage.getItem("token")) return;
      await localStorage.removeItem("token");
      toast.success("logged out successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-between p-16 sticky bg-primary shadow-shadow1 top-0 right-0 z-50 pt-[20px] pb-[20px] pl-[80px] pr-[80px] w-full ">
      <Link to="/">
        <img src={assets.logo} alt="Logo" />
      </Link>

      <div>
        <ul className="flex items-center justify-between">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `pl-[20px] pr-[20px] text-[16px] ${
                  isActive ? "text-tertiary" : "text-secondary"
                } font-semibold hover:text-tertiary`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `pl-[20px] pr-[20px] text-[16px] ${
                  isActive ? "text-tertiary" : "text-secondary"
                } font-semibold hover:text-tertiary`
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `pl-[20px] pr-[20px] text-[16px] ${
                  isActive ? "text-tertiary" : "text-secondary"
                } font-semibold hover:text-tertiary`
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `pl-[20px] pr-[20px] text-[16px] ${
                  isActive ? "text-tertiary" : "text-secondary"
                } font-semibold hover:text-tertiary`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `pl-[20px] pr-[20px] text-[16px] ${
                  isActive ? "text-tertiary" : "text-secondary"
                } font-semibold hover:text-tertiary`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex flex-row gap-4 items-center justify-center ">
        <div>
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5"
          />
        </div>
        <div className="relative group">
          <Link to="/login">
            <img src={assets.profile_icon} className="w-5" />
          </Link>
          <div className="hover:block dropdown-menu group-hover:block absolute right-0 pt-4 hidden">
            <div className="flex flex-col w-36 px-3 py-5 gap-2 rounded bg-primary shadow-hoverShadow">
              <p className="text-gray-700 cursor-pointer hover:textblack">
                My Orders
              </p>
              <Link to="/profile">
                <p className="text-gray-700 cursor-pointer hover:textblack">
                  My Profile
                </p>
              </Link>
              <p
                onClick={logOut}
                className="text-gray-700 cursor-pointer hover:textblack"
              >
                Log Out
              </p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" />
          <span className=" rounded-full bg-black text-white  absolute right-[-5px] bottom-[-5px] text-center leading-4 aspect-square text-[8px] w-4">
            {getCartCount()}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
