import express from "express";
import authUser from "../middleware/authUser.js";
import { createOrder, fetchOrders } from "../controller/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/create", authUser, createOrder);
orderRouter.get("/order-details/:id", authUser, fetchOrders);

export default orderRouter;
