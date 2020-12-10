
const express = require("express")

var app = express()

app.get("/", function (req, res) {
	res.send("Holaa")
})


app.listen(500)
