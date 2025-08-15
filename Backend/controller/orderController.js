import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Controller for handle a order
const createOrder = async (request, response) => {
  const orderData = request.body;
  console.log(orderData);

  const userId = orderData.userId;
  if (!userId) {
    return response.status(400).json({
      success: false,
      msg: "User ID is required",
    });
  }
  // Extract cart data from the userId

  const user = await userModel.findById(userId);
  if (!user) {
    return response.status(404).json({
      success: false,
      msg: "User is not registered",
    });
  }
  const cartData = user.cartData;

  if (!cartData || cartData.length === 0) {
    return response.status(400).json({
      success: false,
      msg: "Cart is empty",
    });
  }

  try {
    orderData.cartData = cartData;
    const newOrder = new orderModel(orderData);
    await newOrder.save();
    response.status(201).json({
      success: true,
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      success: false,
      message: "Failed to create order",
      error: error.message,
    });
  }
};

// controller for fetching user order
const fetchOrders = async (request, response) => {
  try {
    const userId = request.params.id;
    console.log(userId);
    const orderData = await orderModel.find({ userId });
    console.log(orderData);
    return response.status(200).json({
      success: true,
      orders: orderData,
    });
  } catch (error) {
    console.log("error while fetch user orders in backend", error);
    response.status(500).json({
      success: false,
      message: "Failed to load orders.",
      error: error.message,
    });
  }
};

export { createOrder, fetchOrders };
