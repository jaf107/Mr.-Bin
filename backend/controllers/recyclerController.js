const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Recycler = require("../models/recyclerModel.js");
const cloudinary = require("cloudinary");

// Create a recycler
exports.createRecycler = catchAsyncErrors(async (req, res, next) => {

    // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
    //   folder: "avatars",
    //   width: 150,
    //   crop: "scale",
    // });
    const { name, company, location,phone } = req.body;
    console.log(name);
    const recycler = await Recycler.create({
      name,
      location,
      company,
      phone,
    //   avatar: {
    //     public_id: myCloud.public_id,
    //     url: myCloud.secure_url,
    //   },
    });
    const recyclers = await Recycler.find();
    res.status(200).json({
        success: true,
        recyclers,
      });
  });

//Get All Recyclers
  exports.getAllRecyclers = catchAsyncErrors(async (req, res, next) => {
    const recycler = await Recycler.find();
  
    res.status(200).json({
      success: true,
      recycler,
    });
  });


  // Get Single Recycler Details
exports.getSingleRecycler = catchAsyncErrors(async (req, res, next) => {
  const recycler = await Recycler.findById(req.params.id);
  if (!recycler) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    recycler,
  });
});

  // Get Single Recycler Details
  exports.deleteRecycler = catchAsyncErrors(async (req, res, next) => {
    const recycler = await Recycler.findById(req.params.id);
    recycler.remove();
    
    const recyclers = await  Recycler.findById(req.params.id) 
    res.status(200).json({
      success: true,
      recyclers,
    });
  });
  