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
let sockets = []
let playerName = 0
let status = ""

function initialize(socket) {
  sockets.push(socket)
  var slot = sockets.length
  socket.emit("initialize", { slot: slot })
  
  var message = "Player " + slot +  " has entered the arena!"
  io.emit("response", { message: message, status: status, players: players })
  playerName++
  players.push(playerName)

  if(players.length === 2){
    status = "Player: " + players[0] + " and " + "Player: " + players[1] + " are currently dueling!"
    //begin combat logic
  }
}

function reissueSlot(socket, index){
  socket.emit("initialize", (index + 1))
}

function disconnect(data) {
  var index = sockets.indexOf(data.socket)
  var message = "Player: " + players[index] + " has left the arena"
  players.splice(index, 1)
  sockets.splice(index, 1)
  sockets.map(reissueSlot)
  io.emit("response", {message: message})
}

io.on("connection", socket => {
  console.log("New client connected")
  initialize(socket)

  socket.on("disconnect", function(socket) {
    console.log("Client disconnected")
    disconnect({socket: socket})
  });
});

io.on("choice", socket => {
  
})

server.listen(port, () => console.log(`Listening on port ${port}`));