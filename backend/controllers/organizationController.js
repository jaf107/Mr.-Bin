const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Organization = require("../Models/organizationModel");
const cloudinary = require("cloudinary");

// Create a recycler
exports.createOrganization = catchAsyncErrors(async (req, res, next) => {

    // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
    //   folder: "avatars",
    //   width: 150,
    //   crop: "scale",
    // });
    const { name, type, location,phone } = req.body;
    console.log(name);
    const organization = await Organization.create({
      name,
      type,
      company,
      phone,
    //   avatar: {
    //     public_id: myCloud.public_id,
    //     url: myCloud.secure_url,
    //   },
    });
  
    res.status(200).json({
        success: true,
        organization,
      });
  });

//Get All Recyclers
  exports.getAllOrganization = catchAsyncErrors(async (req, res, next) => {
    const organization = await Organization.find();
  
    res.status(200).json({
      success: true,
      organization,
    });
  });


  // Get Single Recycler Details
exports.getSingleOrganization = catchAsyncErrors(async (req, res, next) => {
  const organization = await Organization.findById(req.params.id);
  if (!organization) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    organization,
  });
});
