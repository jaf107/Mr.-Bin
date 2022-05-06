const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Recycler = require("../models/recyclerModel.js");
const cloudinary = require("cloudinary");

// create an array of documents to insert
const recyclers = [
    { name: "Abdur Rahman", company: "Denton Plastics", location: "204, Nazimuddin Road, Dhaka" , phone :"01945004500"},
    { name: "Abdus Selim", company: "Selim Recycling", location: "201, Chawkbazar Road, Dhaka" , phone :"01745104510"},
    { name: "Abed Hossain", company: "Rematter", location: "13, New Elephant Road, Dhaka" , phone :"01945004500"},
    { name: "Hamid Khan", company: " Hamid Electronics", location: "204, Jashim Uddin Road, North Komolapur, Dhaka" , phone :"01945004500"},
    { name: "Abdur Rahman", company: "Denton Plastics", location: "204, Nazimuddin Road, Dhaka" , phone :"01945004500"},
 

  ];
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
  
    res.status(200).json({
        success: true,
        recycler,
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
