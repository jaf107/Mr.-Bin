const express = require("express");
const { addProduct, getProducts, getUserProducts, getSingleProduct, createBid, getBid, addComment, getComment, deleteProduct, updateProduct, RejectBid, AcceptBid } = require("../controllers/productController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/product/new").post(isAuthenticatedUser, addProduct);
router.route("/product").get(getProducts);
router.route("/me/product").get(isAuthenticatedUser, getUserProducts);

router.route("/product/:id").get(getSingleProduct);
router.route("/product/:id").delete(isAuthenticatedUser, deleteProduct);

router.route("/product/:id/bid/new").put(isAuthenticatedUser, createBid);
router.route("/product/:id/bid").get(isAuthenticatedUser,getBid);
router.route("/product/:id/bid/:bidId").delete(isAuthenticatedUser,RejectBid);
router.route("/product/:id/:buyerId").put(isAuthenticatedUser,AcceptBid);

router.route("/product/:id/comment/new").put(isAuthenticatedUser, addComment);
router.route("/product/:id/comment").get(isAuthenticatedUser, getComment);
router.route("/product/:id/edit").put(isAuthenticatedUser, updateProduct);


module.exports = router;
