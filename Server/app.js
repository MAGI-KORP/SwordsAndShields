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
  players.push(playerName)
  sockets.push(socket)
  console.log(players)
  io.emit("response", {status: status, players: players, playerName: playerName })
}

function issueSlot(socket, index){
  socket.emit("initialize", (index + 1)) 
}

function disconnect(socket) {
  var index = sockets.findIndex(function(element){
    return element === socket
  })
  players.splice(index, 1)
  sockets.splice(index,1)
  io.emit("response", {players: players})
  
}

io.on("connection", socket => {
  var thisSocket = socket
  console.log("New client connected")
  initialize(thisSocket)

  socket.on("bye", function() {
    console.log("bye")
    disconnect(thisSocket)
    setTimeout(function(){
      socket.disconnect()
    },2000)
  })

  socket.on("disconnect", function() {
    console.log("Client disconnected")
    disconnect(thisSocket)
  });
});




server.listen(port, () => console.log(`Listening on port ${port}`));