const express = require("express")
const router = express.Router()

const connection = require("../connection/connection.js")
const bcrypt = require("bcrypt")
const saltRounds = 10
const cookieParser = require("cookie-parser")
const passport = require("passport")

const { check, validationResult } = require("express-validator/check")
const { sanitizeBody } = require("express-validator/filter")

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.post("/", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    bcrypt.hash(password, saltRounds, function(err, hash) {
        connection.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hash], function(err, results, fields) {
            if (err) throw err
            connection.query("SELECT LAST_INSERT_ID() as user_id", function(error, results, fields){
                if (error) throw error
                const user_id = results[0]

                req.login(user_id, function(err) {
                    res.send(JSON.stringify(results))
                })
            })
            // res.send(JSON.stringify(results))
        })
    })
    
})

passport.serializeUser((user_id, done) => {
    done(null, user_id);
  });
  
passport.deserializeUser((user_id, done) => {
    done(null, user_id);
});

function authenticationMiddleware () {  
    return (req, res, next) => {
        console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

        if (req.isAuthenticated()) return next();
        console.log("authenticated")
    }
}

module.exports = router