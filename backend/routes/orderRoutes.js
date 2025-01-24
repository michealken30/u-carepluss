import express from "express";
import UserAuth from "../middleware/UserAuth.js";
import {
  listOrders,
  placeOrder,
  updateStatus,
  userOrder,
  verifyOrder,
} from "../contollers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", UserAuth, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/myorders", UserAuth, userOrder);
orderRouter.get("/adminorders", listOrders);
orderRouter.post("/status", updateStatus);

export default orderRouter;
