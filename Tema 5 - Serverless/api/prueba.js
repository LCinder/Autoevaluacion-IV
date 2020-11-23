//
// exports.handler = async (event) => {
// 	return {
// 		statusCode: 200,
// 		body: "Funcionaaaa"
// 	}
// }



module.exports = (req, res) => {
//		const {nombre = "Desconocido"} = req.query
		res.send("Hola!");
};
