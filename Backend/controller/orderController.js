// Controller for handle a order
const createOrder = async (request, response) => {
  const orderData = request.body;
  try {
    const newOrder = new orderModel(orderData);
    await newOrder.save();
    response
      .status(201)
      .json({
        success: true,
        msg: "Order created successfully",
        order: newOrder,
      });
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .json({
        success: false,
        msg: "Failed to create order",
        error: error.message,
      });
  }
};
