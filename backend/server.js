const app = require("./index.js");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");
const { addUser, removeUser } = require("./user");

app.get("/getversion", (req, res) => {
  res.send("1.0");
});

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
  cloud_name: "mr-bin",
  api_key: "758227615992231",
  api_secret: "yOjbVwGc3q_OcGoLbldPNHnMvns",
});

// Connecting to database
connectDatabase();

//chatting socket
let port = process.env.port || 5000;
const server = app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callBack) => {
    const { user, error } = addUser({ id: socket.id, name, room });
    if (error) return callBack(error);

    socket.join(user.room);
    socket.emit("message", {
      user: "Admin",
      text: `Welocome to the product chat room`,
    });

    socket.broadcast
      .to(user.room)
      .emit("message", { user: "Admin", text: `${user.name} has joined!` });
    callBack(null);

    socket.on("sendMessage", ({ message }) => {
      io.to(user.room).emit("message", {
        user: user.name,
        text: message,
      });
    });
  });
  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    console.log(user);
    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} just left the room`,
      });
    }
    console.log("A disconnection has been made");
  });
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
