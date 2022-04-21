const mongoose = require("mongoose");
const uri = "mongodb+srv://mrbin:mrbin@mrbin.tit5a.mongodb.net/mrbin?retryWrites=true&w=majority";
const connectDatabase = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;