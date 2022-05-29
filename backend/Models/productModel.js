const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product Name"],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "Please enter Product Category"],
  },
  quantity: {
    type: Number,
    required: [true, "Please enter the Product Stock Quantity"],
  },
  condition: {
    type: String,
    required: [true, "Please enter the condition of your product"],
    default: "used",
  },
  images: [
    {
      public_id: {
        type: String,
        // required: true,
      },
      url: {
        type: String,
        //  required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  product_type: {
    type: String,
    default: "marketplace",
  },
  description: {
    type: String,
    //required: [true, "Please enter product Description"]
  },
  date_of_purchase: {
    type: String,
    // required:[true, "Please enter the Date of Purchase"]
  },
  purchase_price: {
    type: Number,
    // required: [true, "Please enter product Price"],
  },
  bids: [
    {
      buyer_id: {
        type: mongoose.Schema.ObjectId,
        // required: [true, "Please enter buyer id number"],
      },
      date: {
        type: Date,
        default: Date.now,
      },
      name: {
        type: String,
        trim: true,
      },
      address: {
        type: String,
      },
      amount: {
        type: Number,
        // required: [true, "Please enter the amount"],
      },
      exchange_product_id: {
        type: mongoose.Schema.ObjectId,
        // required: [true],
      },
    },
  ],
  comments: [
    {
      user_name: {
        type: String,
      },
      user_id: {
        type: mongoose.Schema.ObjectId,
      },
      comment_body: {
        type: String,
      },
      created_at: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
