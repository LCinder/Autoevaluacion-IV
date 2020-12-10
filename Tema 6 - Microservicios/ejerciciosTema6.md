## Ejercicios Tema 6 - Microservicios



---


### Ejercicio 1.- Instalar etcd3, averiguar qué bibliotecas funcionan bien con el lenguaje que estemos escribiendo el proyecto (u otro lenguaje), y hacer un pequeño ejemplo de almacenamiento y recuperación de una clave; hacer el almacenamiento desde la línea de órdenes (con etcdctl) y la recuperación desde el mini-programa que hagáis.

Primero antes de nada instalamos `etcdctl` desde la terminal y `etc3` con `npm i etc3.`
Una vez instalados ejecutamos `etcdctl put key dontYouSeeMe` para guardar como clave en *key* el valor que aparece detrás. Ahora seguimos los pasos indicados en la [documentación del módulo etc3](https://www.npmjs.com/package/etcd3) en donde viene un ejemplo que usaremos en el archivo [etc3.js](https://github.com/LCinder/Autoevaluacion-IV/blob/master/Tema%206%20-%20Microservicios/etcd3.js) en donde tenemos:

~~~
const { Etcd3 } = require('etcd3');
const client = new Etcd3();

(async () => {
  const key = await client.get('key').string();
  console.log("Key: ", key);

  await client.delete().all();
})();
~~~

Que básicamente obtiene la clave anteriormente asignada y la mostramos por pantalla, obteniendo

![etcd3](https://github.com/LCinder/Autoevaluacion-IV/blob/master/Tema%206%20-%20Microservicios/img/etcd3.PNG)







### Ejercicio 2.- Realizar una aplicación básica que use express para devolver alguna estructura de datos del modelo que se viene usando en el curso.

Ésto se explicará mejor en el hito correspondiente ya que se realizarán las funciones y rutas específicas para el proyecto de la asignatura, pero básicamente en este ejemplo realizamos una petición para saber los pedidos de una mesa específica pasada por argumento, y como no existe persistencia de datos, la creamos en el momento que se realiza la petición, obteniendo una estructura de datos que en este caso es un objeto de tipo *mesa* que contiene todos los pedidos de la misma.


~~~
const express = require("express")
const app = express()
const port = 5000

app.get("/mesa/:numero_mesa", (req, res) => {
	let m = "Mesa " + req.params.numero_mesa + " no existe";
	for (let i=0; i < datos.mesas.length; i++) {
			if (datos.mesas[i].mesaN == req.params.numero_mesa) {
					m = datos.mesas[i];
					let mesa = new mesaClass.Mesa(m.mesaN, m.personas, m.cuenta, m.ocupada)
					for (let i=0; i < m.pedidos.length; i++)
							mesa.incluirPedidoFromJSON(m.pedidos[i])

					return await "Los pedidos para la mesa: " + mesa.getMesa() + " son: \n"
					+ mesa.mostrarPedidos();
			}
	}
	return await m; //JSON.stringify(m); // JSON.stringify(req.params)
});

app.listen(port, () => {
	console.log("Escuchando en puerto " + port + "...")
})

module.exports = app
~~~

Además, como resultado a hacer la petición obtenemos:

![mesa](https://github.com/LCinder/Autoevaluacion-IV/blob/master/Tema%206%20-%20Microservicios/img/mesa.PNG)


### Ejercicio 3.- Programar un microservicio en express (o el lenguaje y marco elegido) que incluya variables como en el caso anterior.


Primero instalamos *express* con `npm i express` y luego creamos una app muy sencilla pero que permite entender cómo funciona y qué nos aporta *express.*

- Con la función *get* realizamos una petición al servidor (en este caso local) y enviamos como respuesta un *string* que indique que funciona.

![funcionaExpress](https://github.com/LCinder/Autoevaluacion-IV/blob/master/Tema%206%20-%20Microservicios/img/funcionaExpress.PNG)

- Con la función *put* indicamos una nueva ruta, en este caso para saludar, con un parámetro pasado en la url que será el nombre a saludar, obteniéndolo de la petición y podemos utilizarlo para devolver una respuesta.

![Put](https://github.com/LCinder/Autoevaluacion-IV/blob/master/Tema%206%20-%20Microservicios/img/put.PNG)

- Por último indicamos al servidor que escuche en un puerto indicado y lo exportamos para poder utilizarlo mas adelante, quedando el código del archivo [express.js](https://github.com/LCinder/Autoevaluacion-IV/blob/master/Tema%206%20-%20Microservicios/express.js) de la forma:


~~~
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
~~~



### Ejercicio 4.- Crear pruebas para las diferentes rutas de la aplicación.

Como *framework* de pruebas utilizaremos el del ejemplo del hito actual, *supertest* que a su vez utiliza *mocha,* que no he utilizado en prácticas y así me sirve para aprender otro *framework* de test diferente. Para ello isntalamos los 2 con `npm i mocha supertest` y pasamos a escribir 2 pruebas sencillas pero que nos sirven para hacernos una idea de cómo funcionan estos *frameworks* de testeo.

Creamos objetos tanto de `supertest` como de la aplicación realizada en el ejercicio anterior y vamos a realizar un test en el que vamos a hacer una petición al servidor a la ruta por defecto indicando que deberíamos obtener un string determinado y un código determinado (200 que idica que todo funciona). El código del archivo [supertest.js](https://github.com/LCinder/Autoevaluacion-IV/blob/master/Tema%206%20-%20Microservicios/supertest.js) queda de la forma:


~~~
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
~~~

Ahora realizamos lo mismo que antes pero con la ruta *saludo* haciendo *PUT* e indicando lo que deberíamos obtener y el código correspondiente de la forma:


~~~
describe("PUT /saludo/V", function () {
	it("Deberia devolver saludo con nombre", function (done) {
		supertest(app).put("/saludo/V").expect(200).expect("Que pasa V").end((err) => {
			if(err)
				return done(err)
				done()
		});
	});
});
~~~

Y ejecutamos los test con `mocha express.js`, con lo cuál obtenemos como salida:

![Salida test](https://github.com/LCinder/Autoevaluacion-IV/blob/master/Tema%206%20-%20Microservicios/img/test.PNG)

Inidando que todo ha ido perfecto y que no hay errores.



### Ejercicio 5.- Experimentar con diferentes gestores de procesos y servidores web front-end para un microservicio que se haya hecho con antelación, por ejemplo en la sección anterior. 	

En este ejemplo utilizamos el gestor de procesos **pm2** del hito actual ya que no lo había utilizado antes, lo instalamos con `npm i pm2`

Para ejecutarlo nos basamos en el hito y se realiza con `pm2 start express.js -i 2` arrancando 2 instancias del programa, como se ve en la imagen inferior donde nos realiza una mini-esquema de con el identificador de proceso, la CPU usada, memoria, etc.


![pm2 start](https://github.com/LCinder/Autoevaluacion-IV/blob/master/Tema%206%20-%20Microservicios/img/pm2Start.PNG)


Podemos obtener más datos con el comando `pm2 logs` donde, entre otros, nos aparecen los *console.log* indicando que está escuchando en un puerto determinado.

![pm2 Logs](https://github.com/LCinder/Autoevaluacion-IV/blob/master/Tema%206%20-%20Microservicios/img/pm2Logs.PNG)



### Ejercicio 6.- Usar rake, invoke o la herramienta equivalente en tu lenguaje de programación para programar diferentes tareas que se puedan lanzar fácilmente desde la línea de órdenes.


Ésto se puede incluir en *package.json* como una especie de atajo al igual que hicimos con los test en hitos anteriores, simplemente poniendo en *scripts* en comando a usar (precedido del gestor de módulos de *Node.js, npm* y la acción a realizar, de manera que usando `npm tests` ejecutamos en realidad `mocha express.js` quedando todos los atajos de la forma:

~~~
"scripts": {
	"tests": "mocha express.js",
	"moniTWOrize": "pm2 start express.js -i 2",
	"moniTWOrize stop": "pm2 stop all"
}

~~~
