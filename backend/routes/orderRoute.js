const express = require("express");
const {
  placeOrder,
  getUserOrder,
} = require("../controllers/orderController.js");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/me/order/new").post(isAuthenticatedUser, placeOrder);
router.route("/me/order").get( isAuthenticatedUser, getUserOrder);

module.exports = router;
