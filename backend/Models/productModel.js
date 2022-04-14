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
    image: [
        {
            public_id:{
                type: String,
                required:true,
            },
            url:{
                type: String,
                required:true,   
            }
        }
    ],
    description: {
        type: String,
        required: [true, "Please enter product Description"]
    },
    date_of_purchase: {
        type: Date,
        required:[true, "Please enter the Date of Purchase"]
    },
    purchase_price: {
        type: Number,
        required: [true, "Please enter product Price"],
        maxlength: [8, "Price cannot exceed 8 characters"]
    },

    created_at: {
        type: Date,
        default: Date.now
    }
})