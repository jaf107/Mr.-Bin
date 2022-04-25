const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/productModel");


exports.addProduct = catchAsyncErrors(async (req, res, next) => {
  
    const { 
        name, 
        category, 
        quantity, 
        condition,
        description, 
        date_of_purchase, 
        purchase_price 
    } = req.body;
    console.log(name);
    const product = await Product.create({ 
        name, 
        category, 
        quantity, 
        condition,
        description, 
        date_of_purchase, 
        purchase_price 
    });
  
    res.status(201).json({
        success: true,
        product,
      });
  });

exports.getProducts = catchAsyncErrors(async (req,res,next)=>{
    const product = await Product.find();

    res.status(200).json({
        success: true,
        product,
    });
})