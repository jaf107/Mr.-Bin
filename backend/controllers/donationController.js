const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Donation = require("../Models/donationModel");

// Place an order
exports.placeDonation = catchAsyncErrors(async (req, res, next) => {
    req.body.user = req.user.id
    const donation = await Donation.create(req.body);
     await Product.updateOne(
      { _id: req.body.product },
      { $set: { product_type : req.body.orderType } }
    );
    res.status(200).json({
      success: true,
      donation,
    });
  });
  
  exports.updateStatus = catchAsyncErrors(async (req, res, next) => {
     await Donation.updateOne(
      { _id: req.params.id },
      { $set: { status : req.params.status } }
    );
    res.status(200).json({
      success: true,
    });
  });
  
  //Get User specific Donations
  exports.getUserDonation = catchAsyncErrors(async (req, res, next) => {
    
    const donation = await Donation.find({ user: req.user._id });
  
    res.status(200).json({
      success: true,
      donation,
    });
  });
  
  //Get all Orders
  exports.getDonations = catchAsyncErrors(async (req, res, next) => {
    const donation = await Donation.find();
  
    res.status(200).json({
      success: true,
      donation,
    });
  });
  