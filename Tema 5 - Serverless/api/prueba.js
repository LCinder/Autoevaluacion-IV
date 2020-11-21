//
// exports.handler = async (event) => {
// 	return {
// 		statusCode: 200,
// 		body: "Funcionaaaa"
// 	}
// }



module.exports = (req, res) => {
		const nombre = {nombre = "Desconocido"} = req.query
		req.status(200).send("Hola, " + nombre + "!")
}
