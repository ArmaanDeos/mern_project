import { Router } from "express";
const router = Router();
import { Router } from "express";

import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middlewares/verifytoken.middlewares.js";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getUserOrder,
  updateOrder,
} from "../controllers/order.controllers.js";

router.route("/").post(verifyTokenAndAuthorization, createOrder);

router.route("/:id").put(verifyTokenAndAdmin, updateOrder);

router.route("/:id").delete(verifyTokenAndAdmin, deleteOrder);

router.route("/find/:id").get(verifyTokenAndAuthorization, getUserOrder);

router.route("/:id").get(verifyTokenAndAdmin, getAllOrders);

export default router;
