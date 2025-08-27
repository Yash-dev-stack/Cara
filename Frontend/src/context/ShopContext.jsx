import { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const backendUrl = "https://cara-backend-qhh7.onrender.com";
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});
  const [token, setToken] = useState("");


  const [user, setUser] = useState(null);
  const [textShuffle, setTextShuffle] = useState(false);

  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("caraUser");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && parsedUser._id) {
          setUserId(parsedUser._id);
        }
      } catch (err) {
        console.error("Failed to parse user from localStorage", err);
      }
    }
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem("caraUser");

    setUser(userData ? userData : null);
  }, []);

  const headingStyle =
    "sm:text-[46px] text-[33px] font-bold leading-[54px] text-quaternary";
  const paragraphStyle =
    "sm:text-[16px] text-[12px] text-para mt-[12px] sm:mt-[15px] mb-[20px]";

  const addToCart = async (elemId, size) => {
    let cartData = structuredClone(cartItem);
    if (!size) {
      toast.error("Please select the size");
      return;
    }
    if (cartData[elemId]) {
      if (cartData[elemId][size]) {
        cartData[elemId][size] += 1;
        toast.success("Poduct is add to cart");
      } else {
        cartData[elemId][size] = 1;
      }
    } else {
      cartData[elemId] = {};
      cartData[elemId][size] = 1;
      toast.success("Poduct is add to cart");
    }
    setCartItem(cartData);
    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/add`,
          { elemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

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

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/update`,
          { elemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const element in cartItem) {
      for (const elem in cartItem[element]) {
        try {
          if (cartItem[element][elem] > 0) {
            totalCount += cartItem[element][elem];
          }
        } catch (error) {
          console.log("Error in getCartCount function: ", error);
        }
      }
    }
    return totalCount;
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/cart/get`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItem(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Function for clearing the cart
  const clearCart = async () => {
    setCartItem({});
    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/clear`,
          {},
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
  }, [token]);

  const value = {
    currency,
    headingStyle,
    paragraphStyle,
    products,
    userId,
    setUserId,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    updateCart,
    textShuffle,
    setTextShuffle,
    addToCart,
    setUser,
    user,
    getCartCount,
    token,
    setToken,
    backendUrl,
    navigate,
    clearCart,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
