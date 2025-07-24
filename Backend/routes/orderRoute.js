import express from "express";
import authUser from "../middleware/authUser.js";
import { createOrder } from "../controller/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/create", authUser, createOrder);

export default orderRouter;
