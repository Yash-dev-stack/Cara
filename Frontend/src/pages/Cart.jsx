import React, { useState, useEffect, useContext } from "react";
import { assets } from "../assets/assets.js";
import { ShopContext } from "../context/ShopContext.jsx";
import CartTotal from "../components/CartTotal.jsx";

const Cart = () => {
  const { products, navigate, currency, updateCart, cartItem } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let tempData = [];
      for (const item in cartItem) {
        for (const elem in cartItem[item]) {
          if (cartItem[item][elem] > 0) {
            tempData.push({
              _id: item,
              size: elem,
              quantity: cartItem[item][elem],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItem, products]);

  const calculateTotalsubTotal = () => {
    return cartData.reduce((total, elem) => {
      const productData = products.find((item) => item._id === elem._id);
      if (productData) {
        return total + productData.price * elem.quantity;
      }
      return total;
    }, 0);
  };

  const totalSubtotal = calculateTotalsubTotal();

  return (
    <div>
      {/* Banner */}
      <div className="w-full h-[21vh] sm:h-[40vh] flex items-center flex-col justify-center text-center bg-cartBanner">
        <h1 className="sm:text-4xl text-3xl font-medium text-white">#Cart</h1>
        <p className="font-normal text-md text-gray-200">
          Add your coupon code and <span>SAVE</span> up to 70%
        </p>
      </div>

      {/* Cart Items */}
      <div>
        {cartData.length > 0 ? (
          <div>
            <div className="flex my-10 border-t-2 border-b-2 flex-row items-center justify-between px-3 sm:px-12 py-3">
              <h3 className="font-normal sm:font-medium">Remove</h3>
              <h3 className="font-normal sm:font-medium">Image</h3>
              <h3 className="font-normal sm:font-medium">Product</h3>
              <h3 className="font-normal sm:font-medium">Price</h3>
              <h3 className="font-normal sm:font-medium">Quantity</h3>
              <h3 className="font-normal sm:font-medium">Subtotal</h3>
            </div>

            <div className="max-h-[45vh] overflow-auto">
              {cartData.map((elem, index) => {
                const productData = products.find(
                  (product) => product._id === elem._id
                );

                const subTotal = productData.price * elem.quantity;

                return (
                  <div
                    key={index}
                    className="grid grid-cols-6 items-center border-t border-b py-4 gap-2 sm:gap-4 px-3 sm:px-6 text-gray-700"
                  >
                    {/* Remove Button */}
                    <div className="flex justify-center">
                      <img
                        className=" w-5 cursor-pointer"
                        src={assets.bin_icon}
                        onClick={() => updateCart(elem._id, elem.size, 0)}
                      />
                    </div>

                    {/* Product Image */}
                    <div className="flex justify-center">
                      <img
                        className="w-14 sm:w-20"
                        src={productData.image[0]}
                        alt={productData.name}
                      />
                    </div>

                    {/* Product Name */}
                    <p className="text-[9px]text-center">{productData.name}</p>

                    {/* Product Price */}
                    <p className="text-center">
                      {currency}
                      {productData.price}
                    </p>

                    {/* Quantity Input */}
                    <div className="flex justify-center">
                      <input
                        onChange={(e) =>
                          e.target.value === 0 || e.target.value === ""
                            ? null
                            : updateCart(
                                elem._id,
                                elem.size,
                                Number(e.target.value)
                              )
                        }
                        className="w-12 border-2 rounded text-center p-1"
                        type="number"
                        min="1"
                        defaultValue={elem.quantity}
                      />
                    </div>

                    {/* Subtotal */}
                    <p className="text-center">
                      {currency}
                      {subTotal}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center my-12 text-3xl text-black font-medium">
            Your cart is Empty
          </div>
        )}
      </div>

      {/* Apply Coupon & Cart Total */}
      <div className="mt-20 p-10 w-full flex flex-col lg:flex-row justify-between">
        {/* Apply Coupon */}
        <div className="w-full lg:w-[40%] mb-10 lg:mb-0">
          <h2 className="text-xl mb-4 font-medium">Apply Coupon</h2>
          <div className="flex items-center justify-between">
            <input
              type="text"
              className="px-5 py-4 border-2 rounded w-60"
              placeholder="Enter your coupon code"
            />
            <button className="bg-tertiary text-white font-medium hover:rounded-xl px-5 py-4 ml-2">
              Apply
            </button>
          </div>
        </div>

        {/* Cart Total */}
        <CartTotal subtotal={totalSubtotal} shipping={20} />

        <button
          onClick={() => navigate("/place-order")}
          disabled={cartData <= 0}
          className="bg-tertiary disabled:bg-red-200 text-white font-medium sm:px-8 py-3 rounded sm:w-60 mt-5"
          aria-label="Proceed to checkout with total"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
