const mongoose = require("mongoose");

const recyclerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    company: {
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
    collection: "recyclers",
  }
);

module.exports = mongoose.model("Recyclers", recyclerSchema);
