const express = require('express')
const { addProduct, getProducts } = require('../controllers/productController');
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/product/new")
    .post(isAuthenticatedUser, addProduct)
router.route("/product")
    .get(getProducts)

module.exports = router;
