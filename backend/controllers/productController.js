const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/productModel");
const cloudinary = require("cloudinary");
const Recycler = require("../models/recyclerModel.js");
const ErrorHander = require("../utils/errorhander");

exports.addProduct = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }
  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "products/" + req.user.id,
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  req.body.user = req.user.id;
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.find();

  res.status(200).json({
    success: true,
    product,
  });
});

//Get Products of a Specific User
exports.getUserProducts = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.find({ user: req.user.id });
  res.status(200).json({
    success: true,
    product,
  });
});

// Get Single Product Details
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});


//create a bid by user
exports.createBid = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  product.bids.push(req.body);
  await product.save();
  res.status(201).json({
    success: true,
  });
});


//Get all the bids on a product
exports.getBid = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  const bid = product.bids;

  res.status(200).json({
    success: true,
    bid,
  });
});


//add a comment by user
exports.addComment = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  product.comments.push(req.body);
  await product.save();
  res.status(201).json({
    success: true,
  });
});


//Get all the comments on a product
exports.getComment = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  const comment = product.comments;

  res.status(200).json({
    success: true,
    comment,
  });
});

