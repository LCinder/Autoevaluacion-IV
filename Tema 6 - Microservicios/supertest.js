
const supertest = require("supertest")
const app = require("./express.js")

describe("GET /", function () {
	it("Deberia devolver string Funciona", function (done) {
		supertest(app).get("/").expect(200).expect("Funciona Express!").end((err) => {
			if(err)
				return done(err)
				done()
		});
	});
});


describe("PUT /saludo/V", function () {
	it("Deberia devolver saludo con nombre", function (done) {
		supertest(app).put("/saludo/V").expect(200).expect("Que pasa V").end((err) => {
			if(err)
				return done(err)
				done()
		});
	});
});
