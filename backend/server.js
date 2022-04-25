const app = require("./index.js");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/config.env" });
}
//Cloudinary Config
cloudinary.config({ 
  cloud_name: 'mr-bin', 
  api_key: '758227615992231', 
  api_secret: 'yOjbVwGc3q_OcGoLbldPNHnMvns' 
});

// Connecting to database
connectDatabase();

let port = process.env.port || 5000;
const server = app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});