
const express = require("express")
const app = express()
const port = 5000

app.get("/", (req, res) => {
	res.send("Funciona Express!")
});

app.put("/saludo/:nombre", (req, res) => {
	res.send("Que pasa " + req.params.nombre)
});

app.listen(port, () => {
	console.log("Escuchando en puerto " + port + "...")
})

module.exports = app
