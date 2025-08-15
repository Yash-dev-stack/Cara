import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";

const OrderDetails = () => {
  const [order, setOrder] = useState([]);
  const { backendUrl, userId, setUserId } = useContext(ShopContext);

  useEffect(() => {
    if (userId) {
      fetchOrderData(userId);
    } else {
      console.log("User ID not found");
    }
  }, [userId]);

  const fetchOrderData = async (id) => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/order/order-details/${id}`
      );
      if (response.data.success) {
        setOrder(response.data.orders);
      }
    } catch (error) {
      console.log("Error in order Data in frontend", error);
    }
  };

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
            <div key={item._id}>{/* display order details here */}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
