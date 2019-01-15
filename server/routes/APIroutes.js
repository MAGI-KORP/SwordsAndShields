const express = require("express")
const router = express.Router()
const orm = require("../db/orm.js")

// ...Add configure ExpressJS
const app = express();
app.use ("/", router);
app.use(express.json ());
app.use(express.urlencoded({ extended: true }));

router
// .get("/api/:id", (req, res) =>
// {
//     connection.query("SELECT id, name FROM characters WHERE ?", {
//         id: req.params.id
//      }, (err, result) => {
//         if (err) throw err

//         res.json(result)
//     })
// })
.get("/getRankings", (req, res) =>
{
console.log ("/api/getRankings");
    orm.getRankings ()
    .then (function (data)
    {
        res.status(200).send(data)
    })
    .catch (function (err)
    {
        res.status(500).send(err)
    })
})

module.exports = router