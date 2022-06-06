const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Order = require("../models/orderModel.js");
const Product = require("../models/productModel");

// Place an order
exports.placeOrder = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id
  const order = await Order.create(req.body);
   await Product.updateOne(
    { _id: req.body.product },
    { $set: { product_type : req.body.orderType } }
  );
  res.status(200).json({
    success: true,
    order,
  });
});

exports.updateStatus = catchAsyncErrors(async (req, res, next) => {
   await Order.updateOne(
    { _id: req.params.id },
    { $set: { status : req.params.status } }
  );
  res.status(200).json({
    success: true,
  });
});

//Get User specific Orders
exports.getUserOrder = catchAsyncErrors(async (req, res, next) => {
  
  const order = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    order,
  });
});

//Get all Orders
exports.getOrders = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.find();

  res.status(200).json({
    success: true,
    order,
  });
});
