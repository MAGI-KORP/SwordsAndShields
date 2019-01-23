const express = require('express')
const bodyParser = require('body-parser')
require("dotenv").config()
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./db') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express()
const path = require("path")


const PORT = process.env.PORT || 8080
const socketPORT = process.env.PORT2 || 4001;

// Route requires
const user = require('./routes/htmlRoutes')
const api = require("./routes/APIroutes")
const indexRoutes = require("./routes/index")

//SocketIO
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const server = http.createServer(app);
const io = socketIo(server);

// Socket data
let log = [];
let status = ""
let playerCount = 0
let playerOne = {};
let playerOneMove = ""
let playerTwo = {};
let playerTwoMove = ""
let players = []
let sockets = []
let activeGame = false

// Socket Functions

function sendLog() {
  if(log.length > 12){
    log = log.slice(-12)
  }
  io.emit("battleLog", {log: log})  
}

function newGame() {
  log = []
  if(players.length < 2){
    log.push("There is no one in the arena for you to fight, surely someone will come along soon.")
    activeGame = false
  }
  else{
    log.push("A new fight will begin as soon as " + players[0] + " and " + players[1] + " choose their moves!")
    activeGame = true
  }
  sendLog()
  log = []
}

function handleChoice(player, move) {
  if(player === "Player 1"){
    playerOneMove = move
  }
  if(player === "Player 2"){
    playerTwoMove = move
  }
  if(playerOneMove && playerTwoMove) {
    log.push("Player 1 " + " chose to " + playerOneMove + ".")
    log.push("Player 2 " + " chose to " + playerTwoMove + ".")
    //calculate result
    var result = "Something happened!"
    log.push(result)
    sendLog()
    playerOneMove = ""
    playerTwoMove = ""
  }
}

function joinLobby(socket) {
  if(!players.length){
    log.push("There is no one in the arena for you to fight, surely someone will come along soon.")
  }
  sendLog() 
  playerCount++
  var playerName = "Player " + playerCount
  players.push(playerName)
  sockets.push(socket)
  console.log(players)
  io.emit("response", {status: status, players: players, playerName: playerName})
  if(sockets.length >= 2 && activeGame === false){
    newGame()
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
  console.log("bye")
  io.emit("response", {players: players})
}

io.on("connection", socket => {
  var thisSocket = socket
  console.log("New client connected")
  joinLobby(thisSocket)

  socket.on("choice", data => {
    if(players.length >= 2){
      handleChoice(data.player, data.choice)
    }
    else{
      log.push(data.player + " chose to " + data.choice + (players.length<2 ? " against nobody in particular, there is no longer anyone here...weird.":"."))
      sendLog()
    }
    
  })

  socket.on("disconnect", function() {
    console.log("Client disconnected")
    disconnect(thisSocket)
  });
});


// MIDDLEWARE
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: process.env.PW_SECRET || "i@#!}}jidannce}", //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use("/user", user)
app.use("/api", api)
// app.use("/", indexRoutes)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})

// SOCKET SERVER
server.listen(socketPORT, () => console.log(`Listening on port ${socketPORT}`));