const express = require("express")
const router = express.Router()

const connection = require("../connection/connection.js")

router.get("/api", (req, res) => {
    connection.query("SELECT * FROM characters", (err, result) => {
        if (err) throw err

        res.json(result)
    })
}) 

module.exports = router