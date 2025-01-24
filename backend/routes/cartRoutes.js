import express from "express";
import {
  addCart,
  listCartItem,
  removeCartItem,
  removeFromCart,
} from "../contollers/cartDataController.js";
import UserAuth from "../middleware/UserAuth.js";

const cartRouter = express.Router();

cartRouter.post("/add", UserAuth, addCart);
cartRouter.post("/remove", UserAuth, removeFromCart);
cartRouter.post("/listcart", UserAuth, listCartItem);
cartRouter.post("/delete", UserAuth, removeCartItem);

export default cartRouter;
