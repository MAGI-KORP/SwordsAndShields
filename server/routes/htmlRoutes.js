const express = require("express")
const router = express.Router()

const connection = require("../connection/connection.js")
const bcrypt = require("bcrypt")
const saltRounds = 10
const cookieParser = require("cookie-parser")
const passport = require("passport")

const { check, validationResult } = require("express-validator/check")
const { sanitizeBody } = require("express-validator/filter")

router.post("/", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    connection.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], function(err, results, fields) {
        if (err) throw err

        res.send(JSON.stringify(results))
    })
})

// passport.serializeUser((user_id, done) => {
//     done(null, user_id);
//   });
  
// passport.deserializeUser((user_id, done) => {
//     done(null, user_id);
// });

// function authenticationMiddleware () {  
//     return (req, res, next) => {
//         console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

//         if (req.isAuthenticated()) return next();
//         return
//     }
// }

module.exports = router