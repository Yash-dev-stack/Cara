import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext.jsx";

const CartTotal = ({ subtotal = 0, shipping = 20 }) => {
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
    <section className="border-2 p-4 rounded w-full">
      <h2 className="text-xl font-bold mb-4">Cart Total</h2>
      <div className="border-2 flex items-center justify-between px-3 py-2 mb-4">
        <h3 className="font-medium">Cart Subtotal</h3>
        <p>
          {currency}
          {totalSubtotal}
        </p>
      </div>
      <div className="border-2 flex items-center justify-between px-3 py-2 mb-4">
        <h3 className="font-medium">Shipping Fees</h3>
        <p>
          {currency}
          {shipping}
        </p>
      </div>
      <div className="border-2 flex items-center justify-between px-3 py-2 mb-4">
        <b>Total</b>
        <b>
          {currency}
          {totalSubtotal + shipping}
        </b>
      </div>
    </section>
  );
};

export default CartTotal;
