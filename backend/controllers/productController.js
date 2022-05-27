const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/productModel");
const cloudinary = require("cloudinary");
const Recycler = require("../models/recyclerModel.js");
const User = require("../models/userModel.js");
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
  const user = await User.findById(req.user.id);
  req.body.name = user.name;
  req.body.address = user.address;
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

//Accept Reject bid on a product
exports.RejectBid = catchAsyncErrors(async (req, res, next) => {
  const product =  await Product.updateOne(
      { _id: req.params.id },
      { $pull: { bids: { _id: req.params.bidId } } }, 
    );
  res.status(200).json({
    success: true,
    product
  });
});

// exports.AcceptBid = catchAsyncErrors(async (req, res, next) => {
//   await Product.updateOne(
//      { _id: req.params.id },
//      { $pull: { bids: { id: req.params.bidId } } }, 
//    );
//  res.status(200).json({
//    success: true,
//  });
// });

//add a comment by user
exports.addComment = catchAsyncErrors(async (req, res, next) => {
  req.body.user_name = req.user.name;
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

// Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  // Deleting Images From Cloudinary
  for (let i = 0; i < product.images.length; i++) {
    await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
});

// Update Product -- Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  // Images Start Here
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.v2.uploader.destroy(product.images[i].public_id);
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
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});
