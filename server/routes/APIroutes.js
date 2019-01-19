const express = require("express")
const router = express.Router()
const CreateCharacter = require("../db/models/createCharacter")
const mongoose = require("mongoose")

router.post("/", (req, res) => {
  const newCharacter = new CreateCharacter({
    username: req.body.username,
    firstName: req.body.firstName,
    surname: req.body.surname,
    strength: req.body.strength,
    defense: req.body.defense,
    evasion: req.body.evasion
  }).save((err, savedChar) => {
    if (err) res.json(err)
    res.json(savedChar)
  })
})

module.exports = router