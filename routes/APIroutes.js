const express = require("express")
const router = express.Router()
// const orm = require("../db/orm.js")
const mongoose = require("mongoose")
const passport = require("passport")

// ...Add configure ExpressJS
// const app = express();
// app.use ("/", router);
// app.use(express.json ());
// app.use(express.urlencoded({ extended: true }));

// .get("/api/:id", (req, res) =>
// {
//     connection.query("SELECT id, name FROM characters WHERE ?", {
//         id: req.params.id
//      }, (err, result) => {
//         if (err) throw err

//         res.json(result)
//     })
// })
// .get("/getRankings", (req, res) =>
// {
// console.log ("/api/getRankings");
//     orm.getRankings ()
//     .then (function (data)
//     {
//         res.status(200).send(data)
//     })
//     .catch (function (err)
//     {
//         res.status(500).send(err)
//     })
// })
const CreateCharacter = require("../db/models/createCharacter")


router.post("/", (req, res) => {
  console.log(req)
  const newCharacter = new CreateCharacter({
    username: req.session.passport.user._id,
    firstName: req.body.firstName,
    surname: req.body.surname,
    strength: req.body.strength,
    defense: req.body.defense,
    evasion: req.body.evasion,
    backstory: req.body.backstory
  }).save((err, savedChar) => {
    if (err) res.json(err)
    console.log(savedChar)
    res.json(savedChar)
  })
})

router.get("/please", (req, res) => {
  CreateCharacter.findOne( {username: req.session.passport.user._id }, (err, characterInfo) => {
    res.json(characterInfo)
  }) 
})


module.exports = router