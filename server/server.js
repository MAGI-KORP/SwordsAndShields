const express = require("express")
const bodyParser = require("body-parser")
const API = require("./routes/APIroutes")


// session and authentication requires

const cookieParser = require("cookie-parser")
const passport = require("passport")
const session = require("express-session")
const mySQLstore = require("express-mysql-session")(session)
const localStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")


const app = express()

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//session and  authentication
app.use(cookieParser())


let options = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "swords_and_shields_db"
}

const sessionStore = new MySQLstore(options)

app.use(session({
    secret: "inmmyuihwiuhdaiuscuiua",
    resave: false,
    store: sessionStore,
    saveUninitialized: false,
    // cookie: {secure: true}

}))

app.use(passport.initialize)
app.use(passport.session())

passport.use(new LocalStrategy(
    function(username, password, done) {
      const connection = require("./connection/connection.js")
  
      connection.query("SELECT id, password FROM users WHERE username = ?", [username], function (err, results, fields){
        if (err) {done(err)}
        
        if (results.length === 0) {
          done(null, false)
        } else {
            const hash = results[0].password.toString()
            bcrypt.compare(password, hash, function(err, response){
          
            if(response === true) {
            
              console.log("log in totally worked")
              return done(null, {user_id: results[0].id})
          
            } else {
            
              return done(null, false)
            }
          })
        }
      })
    }
))

const PORT = process.env.PORT || 8080

app.use(API)

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})