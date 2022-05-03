const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },

    recycler: {
      type: mongoose.Schema.ObjectId,
      ref: "Recycler",
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
      default: "Processing",
    },
  },
  {
    collection: "orders",
  }
);

module.exports = mongoose.model("Orders", orderSchema);
