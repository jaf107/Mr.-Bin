const express = require("express");
const {
  placeOrder,
  getUserOrder,
  getOrders,
  updateStatus,
} = require("../controllers/orderController.js");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/me/order/new").post(isAuthenticatedUser, placeOrder);
router.route("/me/order").get( isAuthenticatedUser, getUserOrder);
router.route("/admin/recycle/order").get(isAuthenticatedUser, getOrders);
router.route("/admin/recycle/order/:id/:status").put(isAuthenticatedUser, updateStatus);



module.exports = router;
