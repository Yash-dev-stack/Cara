import React, { useState } from "react";

const OrderDetails = () => {
  const [order, setOrder] = useState([]);

  return (
    <div className="mt-9 flex flex-col items-center justify-center text-center w-full">
      <h2 className="text-2xl font-semibold text-center mb-6">Your Orders</h2>

      <div>
        <div className="hidden sm:flex my-10 border-t-2 border-b-2 md:gap-20 lg:gap-36 flex-row items-center justify-between px-12 py-3">
          <p className="font-medium">Image</p>
          <p className="font-medium">Product name</p>
          <p className="font-medium">Payment Method</p>
          <p className="font-medium">Order Status</p>
          <p className="font-medium">Order date</p>
        </div>
        {/* order information */}
        <div>
          {order.map((item) => (
            <div></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
