import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { ShopContext } from "../context/ShopContext.jsx";
import { toast } from "react-toastify";
import { IoReorderThree } from "react-icons/io5";

const Navbar = () => {
  const {
    setShowSearch,
    getCartCount,
    navigate,
    setTextShuffle,
    textShuffle,
    userId,
    setUserId,
  } = useContext(ShopContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const logOut = async () => {
    try {
      if (!localStorage.getItem("caraToken")) return;
      await localStorage.removeItem("caraToken");
      toast.success("logged out successfully");
      setTextShuffle(true);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const onProfileClick = () => {
    if (!localStorage.getItem("caraToken")) {
      navigate("/login");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex items-center relative justify-between bg-primary shadow-shadow1 sticky top-0 right-0 z-50 px-6 sm:px-20 py-4">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" />
      </Link>

      {/* Mobile Menu Icon */}
      <div className="flex absolute right-32 sm:right-52 items-end md:hidden justify-end ">
        <IoReorderThree
          className="text-3xl text-secondary cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <ul className="flex items-center">
          {[
            { name: "Home", path: "/" },
            { name: "Shop", path: "/shop" },
            { name: "Blog", path: "/blog" },
            { name: "About", path: "/about" },
          ].map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `px-5 text-[16px] ${
                    isActive ? "text-tertiary" : "text-secondary"
                  } font-semibold hover:text-tertiary`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Icons */}
      <div className="flex flex-row gap-4 items-center">
        {/* Profile Dropdown */}
        <div className="relative group">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            onClick={() => onProfileClick()}
          />
          <div className="hover:block dropdown-menu group-hover:block absolute right-0 pt-4 hidden">
            <div className="flex flex-col w-36 px-3 py-5 gap-2 rounded bg-primary shadow-hoverShadow">
              <Link
                to={`/order-details/${userId}`}
                className="text-gray-700 cursor-pointer hover:text-black"
              >
                My Orders
              </Link>
              <p
                onClick={logOut}
                className="text-gray-700 cursor-pointer hover:text-black"
              >
                {textShuffle ? "Login" : "Log out"}
              </p>
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" />
          <span className="rounded-full bg-black text-white absolute right-[-5px] bottom-[-5px] text-center leading-4 aspect-square text-[8px] w-4">
            {getCartCount()}
          </span>
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] right-0 w-1/3 bg-primary shadow-lg rounded-md lg:hidden z-40">
          <ul className="flex flex-col">
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              { name: "Blog", path: "/blog" },
              { name: "About", path: "/about" },
            ].map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-5 py-3 text-[16px] ${
                      isActive ? "text-tertiary" : "text-secondary"
                    } font-semibold hover:text-tertiary`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
