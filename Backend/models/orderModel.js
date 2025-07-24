import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    cartData: { type: Array, required: true },
  },
  { timestamps: true }
);

const orderModel = new mongoose.model("order", orderSchema);

export default orderModel;
