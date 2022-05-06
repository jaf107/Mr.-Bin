const express = require("express");
const { addProduct, getProducts, getUserProducts, getSingleProduct, createBid, getBid } = require("../controllers/productController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/product/new").post(isAuthenticatedUser, addProduct);
router.route("/product").get(getProducts);
router.route("/me/products").get(isAuthenticatedUser, getUserProducts);
router.route("/product/:id").get(getSingleProduct);
router.route("/product/:id/bid/new").post(isAuthenticatedUser, createBid);
router.route("/product/:id/bid").get(getBid);



module.exports = router;
