const express = require("express");
const { addProduct, getProducts, getUserProducts } = require("../controllers/productController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/product/new").post(isAuthenticatedUser, addProduct);
router.route("/product").get(getProducts);
router.route("/me/product").get(isAuthenticatedUser, getUserProducts);


module.exports = router;
