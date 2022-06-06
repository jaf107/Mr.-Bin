const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    location: {
      type: String,
    },
    avatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    phone: {
      type: String,
    },
  },
  {
    collection: "organizations",
  }
);

module.exports = mongoose.model("Organizations", organizationSchema);
