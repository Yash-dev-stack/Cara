import React, {useContext} from 'react';
import {ShopContext} from '../context/ShopContext.jsx'

const CartTotal = ({ subtotal = 0, shipping = 20 }) => {
  
  const {currency} = useContext(ShopContext)
  
  const total = subtotal + shipping;

  return (
    <section className="border-2 p-4 rounded w-full">
      <h2 className="text-xl font-bold mb-4">Cart Total</h2>
      <div className="border-2 flex items-center justify-between px-3 py-2 mb-4">
        <h3 className="font-medium">Cart Subtotal</h3>
        <p>{currency}{subtotal}</p>
      </div>
      <div className="border-2 flex items-center justify-between px-3 py-2 mb-4">
        <h3 className="font-medium">Shipping Fees</h3>
        <p>{currency}{shipping}</p>
      </div>
      <div className="border-2 flex items-center justify-between px-3 py-2 mb-4">
        <b>Total</b>
        <b>{currency}{total}</b>
      </div>
   
    </section>
  );
};

export default CartTotal;
