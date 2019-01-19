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

function sendLog() {
  if(log.length > 12){
    log = log.slice(-12)
  }
  io.emit("battleLog", {log: log})  
}

function newGame() {
  log = ["A fighter has left the arena...", ]
  if(players.length < 2){
    log.push("There is no one in the arena for you to fight, surely someone will come along soon.")
  }
  else{
    log.push("A new fight will begin as soon as " + players[0] + " and " + players[1] + " choose their moves!")
  }
  sendLog()
}

function initialize(socket) {
  sendLog() 
  playerCount++
  var playerName = "Player " + playerCount
  players.push(playerName)
  sockets.push(socket)
  console.log(players)
  io.emit("response", {status: status, players: players, playerName: playerName})
  if(sockets.length === 2){
    log.push("The battle between " + players[0] + " and " + players[1] + " will begin as soon as they make their first moves!")
    sendLog()
  }
}

function disconnect(socket) {
  var index = sockets.findIndex(function(element){
    return element === socket
  })
  players.splice(index, 1)
  sockets.splice(index,1)
  if(index = 0 || 1){
    newGame()
  }
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

  socket.on("choice", data => {
    var player = data.player
    var choice = data.choice
    log.push(player + " chose to " + choice)
    sendLog()
  })

  socket.on("disconnect", function() {
    console.log("Client disconnected")
    disconnect(thisSocket)
  });
});




server.listen(port, () => console.log(`Listening on port ${port}`));