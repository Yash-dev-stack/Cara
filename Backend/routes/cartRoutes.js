import express from "express";
import {
  addToCart,
  updateCart,
  getCartData,
  clearCart,
} from "../controller/cartController.js";
import authUser from "../middleware/authUser.js";

const cartRoutes = express.Router();

cartRoutes.post("/add", authUser, addToCart);
cartRoutes.post("/update", authUser, updateCart);
cartRoutes.post("/get", authUser, getCartData);
cartRoutes.post("/clear", authUser, clearCart);

export default cartRoutes;
