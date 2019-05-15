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

// Route requires
const user = require('./routes/htmlRoutes')
const api = require("./routes/APIroutes")
// const indexRoutes = require("./routes/index")


// MIDDLEWARE
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "Client", "build")))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: process.env.PW_SECRET,
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
  res.sendFile(path.join(__dirname, "Client", "build", "index.html"));
});

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})