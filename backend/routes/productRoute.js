const express = require('express')
const { addProduct, getProducts } = require('../controllers/productController');

const router = express.Router();

router.route("/add-product")
    .post(addProduct)
router.route("/get-product")
    .get(getProducts)

module.exports = router;
