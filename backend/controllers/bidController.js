const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Bid = require("../Models/bidModel");

exports.createBid = catchAsyncErrors(async (req, res, next) => {
  const { buyer_id, date, amount, product_id } = req.body;
  const bid = await Bid.create({
    buyer_id,
    date,
    amount,
    product_id,
  });

  res.status(201).json({
    success: true,
    bid,
  });
});

exports.getBidsForAnAd = catchAsyncErrors(async (req, res, next) => {
  // Get id from paramenter
  // let id = req.body.params.id;
  let id;

  const allBids = await Product.find({ advertisement_id: id });

  res.status(200).json({
    success: true,
    product,
  });
});
