const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/productModel");
const cloudinary = require("cloudinary");

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
