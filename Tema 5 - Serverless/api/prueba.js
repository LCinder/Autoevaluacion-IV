
module.exports = (req, res) => {
		const nombre = {nombre = "Desconocido"} = req.query
		req.status(200).send("Hola, " + nombre + "!")
}