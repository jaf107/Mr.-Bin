const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Order = require("../models/orderModel.js");

// Place an order
exports.placeOrder = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id
  const order = await Order.create(req.body);
  res.status(200).json({
    success: true,
    order,
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
  const order = await Order.find({orderType:"recycle"});

  res.status(200).json({
    success: true,
    order,
  });
});
