const express = require("express");
const { addProduct, getProducts, getUserProducts, getSingleProduct } = require("../controllers/productController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/product/new").post(isAuthenticatedUser, addProduct);
router.route("/products").get(getProducts);
router.route("/me/product").get(isAuthenticatedUser, getUserProducts);
router.route("/product/:id").get(getSingleProduct);


module.exports = router;
