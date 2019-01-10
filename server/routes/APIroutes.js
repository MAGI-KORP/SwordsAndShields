// const express = require("express")
// const router = express.Router()

// const connection = require("../connection/connection.js")

// router.get("/api/:id", (req, res) => {
//     connection.query("SELECT id, name FROM characters WHERE ?", {
//         id: req.params.id
//      }, (err, result) => {
//         if (err) throw err

//         res.json(result)
//     })
// })

// module.exports = router