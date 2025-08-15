import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

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
      const token = localStorage.getItem("caraToken");

      const response = await axios.get(
        `${backendUrl}/api/order/order-details/${id}`,
        {
          headers: {
            token: token,
          },
        }
      );
      if (response.data.success) {
        setOrder(response.data.orders);
        console.log("Order data fetched successfully", response.data.orders);
      }
    } catch (error) {
      console.log("Error in order Data in frontend", error);
    }
  };

  return (
    <div className="mt-9 flex flex-col items-center justify-center text-center w-full">
      <h2 className="text-2xl font-semibold text-center mb-6">Your Orders</h2>

      <div>
        <div className="flex my-5 sm:my-10 border-t-2 border-b-2 gap-6 md:gap-20 lg:gap-36 flex-row items-center justify-between px-6 sm:px-12 py-3">
          <p className="font-normal sm:font-medium">Image</p>
          <p className="font-normal sm:font-medium">Product name</p>
          <p className="font-normal sm:font-medium">Payment Method</p>
          <p className="font-normal sm:font-medium">Order Status</p>
          <p className="font-normal sm:font-medium">Order date</p>
        </div>

        {/* order information */}
        <div className="overflow-y-auto h-[calc(100vh-400px)]">
          {order.map((orderItem) => (
            <div key={orderItem._id}>
              {orderItem.cartData.map((product, index) => (
                <div
                  key={`${orderItem._id}-${index}`}
                  className="flex flex-row items-center justify-between px-12 py-3 border-b"
                >
                  {/* Image */}
                  <img
                    src={assets.parcel}
                    alt="parcel"
                    className="w-16 h-16 object-cover rounded"
                  />

                  {/* Product Name */}
                  <p>{`Order`}</p>

                  {/* Payment Method */}
                  <p>{orderItem.paymentMethod}</p>

                  {/* Order Status */}
                  <p>{product.status || "Pending"}</p>

                  {/* Order Date */}
                  <p>{new Date(orderItem.createdAt).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
