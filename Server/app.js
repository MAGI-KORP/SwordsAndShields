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

let log = [];
let playerOne = {};
let playerTwo = {};
let players = []

function initialize(socket) {
  players.push(socket)
  socket.emit("initialize", (players.length))
}

function issuePlayerSlot(socket, index){
  socket.emit("initialize", (index + 1))
}

function disconnect(socket) {
  var index = players.indexOf(socket)
  players.splice(index, 1)
  console.log(players.length)
  players.map(issuePlayerSlot)
}

io.on("connection", socket => {
  console.log("New client connected")
  initialize(socket)
  
  // socket.on("choice", function(player, choice) {
  //   log.push(player + " chose to " + choice)
  //   io.emit("response", log)
  // })
  socket.on("disconnect", function() {
    console.log("Client disconnected")
    disconnect(socket)
  });
});

io.on("choice", socket => {
  
})

server.listen(port, () => console.log(`Listening on port ${port}`));