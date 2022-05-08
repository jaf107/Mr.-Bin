const express = require("express");
const { addProduct, getProducts, getUserProducts, getSingleProduct, createBid, getBid, addComment, getComment } = require("../controllers/productController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/product/new").post(isAuthenticatedUser, addProduct);
router.route("/product").get(getProducts);
router.route("/me/product").get(isAuthenticatedUser, getUserProducts);
router.route("/product/:id").get(getSingleProduct);
router.route("/product/:id/bid/new").put(isAuthenticatedUser, createBid);
router.route("/product/:id/bid").get(isAuthenticatedUser,getBid);
router.route("/product/:id/comment/new").put(isAuthenticatedUser, addComment);
router.route("/product/:id/comment").get(isAuthenticatedUser, getComment);


module.exports = router;
