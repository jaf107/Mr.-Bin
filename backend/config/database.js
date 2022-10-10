const mongoose = require("mongoose");
const uri = "mongodb://mrbin:mrbin@mrbin-shard-00-00.tit5a.mongodb.net:27017,mrbin-shard-00-01.tit5a.mongodb.net:27017,mrbin-shard-00-02.tit5a.mongodb.net:27017/?ssl=true&replicaSet=atlas-118ekp-shard-0&authSource=admin&retryWrites=true&w=majority";
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