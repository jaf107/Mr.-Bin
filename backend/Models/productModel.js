const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { 
        type:String,
        required: [true, "Please enter product Name"],
        trim: true,
    },
    category: {
        type: String,
        required: [true, "Please enter Product Category"],
    },
    quantity: {
        type: Number,
        required: [true, "Please enter the Product Stock Quantity"]
    },
    condition: {
        type: String,
        required:[true, "Please enter the condition of your product"],
        default: "average"
    },
    images: [
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
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

    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Product", productSchema);