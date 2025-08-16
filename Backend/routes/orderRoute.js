import express from "express";
import authUser from "../middleware/authUser.js";
import {
  createOrder,
  deleteOrder,
  fetchOrders,
} from "../controller/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/create", authUser, createOrder);
orderRouter.get("/order-details/:id", authUser, fetchOrders);
orderRouter.delete("/order-details/:id", authUser, deleteOrder);

export default orderRouter;
