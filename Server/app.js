const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);

const choice1 = "";
const choice2 = "";

io.on("connection", socket => {
  console.log("New client connected")
  socket.on("choice", choice => {
      console.log(choice)

    // if (!choice1) {
    //     choice1 = choice
    // }
    // else{
    //     choice2 = choice
    // }

    socket.emit("response", `You choose to ${choice}`)
  },
  socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));