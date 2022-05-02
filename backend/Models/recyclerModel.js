const mongoose = require('mongoose')

const recyclerSchema = new mongoose.Schema({
    name: { 
        type:String,
    },
    company: {
        type: String
    },
    location: {
        type: String,
    },
    orders:{
        product:{
             type: mongoose.Schema.ObjectId,
            ref: "Product"
        },
        status:{
            type:"String"
        }
    },
    avatar: {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
      orders:{
        type: String,
    }
},
    {
        collection: "recyclers"
    }
)

module.exports = mongoose.model("Recyclers", recyclerSchema);