const express = require('express')
const { addProduct, getProduct }  = require('../controllers/productController');

const router = express.Router();

router.route("/product")
    .post(addProduct)
    .get(getProduct);

module.exports = router;
