const express = require("express");
const { addProduct, getProducts, getUserProducts, getSingleProduct } = require("../controllers/productController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/product/new").post(isAuthenticatedUser, addProduct);
router.route("/product").get(getProducts);
router.route("/me/products").get(isAuthenticatedUser, getUserProducts);
router.route("/product/:id").get(getSingleProduct);


module.exports = router;
