const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
      },
  
      organization: {
        type: mongoose.Schema.ObjectId,
        ref: "Organization",
      },
      pickupDate: {
        type: String,
      },
      address: {
        type: String,
      },
      orderType: {
        type: String,
      },
      status: {
        type: String,
        default: "Initiated",
      },
    },
    {
      collection: "donations",
    }
  );
  
  module.exports = mongoose.model("Donation", donationSchema);
  