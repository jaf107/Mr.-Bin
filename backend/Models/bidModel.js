const mongoose = require('mongoose')

const bidSchema = new mongoose.Schema({
    buyer_id: { 
        type:String,
        required: [true, "Please enter buyer id number"],
    },
    date: {
        type: Date
    },
    amount: {
        type: Number,
        required: [true, "Please enter the amount"]
    },
    advertisement_id:{
        type: String,
        required: [true, ]
    }
},
    {
        collection: "bids"
    }
)

module.exports = mongoose.model("Bid", bidSchema);