const express = require("express")
const bodyParser = require("body-parser")
const API = require("./routes/APIroutes")

const app = express()
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 8080

app.use(API)

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})