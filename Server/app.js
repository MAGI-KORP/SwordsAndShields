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
let status = ""
let playerCount = 0
let playerOne = {};
let playerTwo = {};
let players = []
let sockets = []


function initialize(socket) {
  playerCount++
  var playerName = "Player " + playerCount
  sockets.push(socket)
  players.push(playerName)
  console.log(players)
  var slot = players.length
  socket.emit("initialize", slot)
  io.emit("response", {status: status, players: players })
}

function issueSlot(socket, index){
  socket.emit("initialize", (index + 1)) 
}

function disconnect(slot) {
  var index = slot - 1
  players.splice(index, 1)
  sockets.splice(index, 1)
  sockets.map(issueSlot)
  console.log(players)
}

io.on("connection", socket => {
  console.log("New client connected")
  initialize(socket)

  socket.on("disconnect", socket => {
    console.log("Client disconnected")
  });
});


server.listen(port, () => console.log(`Listening on port ${port}`));