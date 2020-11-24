## Ejercicios Tema 5 - Serverless

---

## Ejercicio 1.- Darse de alta en Vercel y Firebase, y descargarse los SDKs para poder trabajar con ellos localmente.


### Vercel

Para registrarnos en *Vercel,* seguimos los sencillos pasos que se nos indican en la página principal. Lo mejor es vincular la cueta de *GitHub* permitiendo el acceso en la misma de *Vercel* para que se puedapermitir el **despliegue continuo** posteriormente, es decir que al hacer *push* al repositorio se auto-despliegue el nuevo proyecto en *Vercel.*

![Vercel Registro](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/vercelSignUp.PNG)


Incluímos el repositorio que queremos, en este caso el del proyecto general de la asignatura y le damos a continuar.

![Vercel Import](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/vercelImport.PNG)


Veremos cómo empieza a construirse el mismo clonando nuestro repositorio de *GitHub.*

![Vercel Deploy](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/vercelDeploy.PNG)


Y por último nos muestra un mensaje de que va todo bien.

![Vercel Congrats](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/vercelCongrats.PNG)


**Descargar SDK's**

Para descargar el *SDK* en la página oficial se nos muestra cómo hacerlo, es simplemente descargando el paquete *vercel* como global e instalándolo con el comando `npm i -g vercel `


### Firebase

El registro en *Firebase de Google* es más sencillo todavía, ya que como cualquier cosa de Google sólo se necesita acceder a nuestra cuenta y ya es´ta, ni registros ni nada, ya tenemos acceso a un montón de opciones de *Firebase.*


![Firebase Registro](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/firebaseSignUp.PNG)

**Descargar SDK's**

Como se indica en [la página oficial de Firebase](https://firebase.google.com/docs/web/setup?authuser=2#add-sdks-initialize) para descargar el *SDK* es prácticamente de la misma forma que en *Vercel,* simplemente instalamos *firebase* con el comando `npm install --save firebase` aunque existen diferentes formas de instalarlo dependiendo del lenguaje, etc. pero generalemnte se realiza de esta forma.


## Ejercicio 2.- Tomar alguna de las funciones de prueba de Vercel, y hacer despliegues de prueba con el mismo.

Nos vamos a la página oficial de lenguajes soportados de vercel para poder realizar una prueba muy sencilla, en el caso de *Node.js* la prueba que se nos indica es que saluda a un desconocido, a no ser que en la url se indicque el nombre para realizar el saludo y lo muestra en pantalla.

~~~
module.exports = (req, res) => {
  const { name = 'World' } = req.query
  res.status(200).send(`Hello ${name}!`)
}
~~~

Desplegamos el proyecto, o como hemos dicho antes, subimos este archivo de prueba y haciendo *push* se autodespliega y nos ofrece un enlace para acceder a la API como vemos a continuación

![Vercel Funciona](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/vercelFunciona.PNG)


Accedemos al enlace donde se encuentra nuestro archivo en *api/prueba* y vemos que se realiza el saludo.

![Prueba Vercel Api](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/pruebaVercelApi.PNG)




## Ejercicio 3.- Tomar alguna de las funciones de prueba de Netlify, y hacer despliegues de prueba con el mismo.

Nos registramos en *Netlify,* que no en *Netflix,* y realizamos el mismo proceso que en *Vercel,* que no tiene mucho interés ya que es exactamente igual.

Cuando hayamos incluido nuestro repositorio nos aparece lo siguiente:

![Netlify Deploy](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/netlifyDeploy.PNG)


Y al igul que en *vercel* al hacer *push* se despliega el proyecto dándonos una url a la que acceder a la API, entre otras opciones como cambiar el dominio, etc.


![Netlify Creado](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/netlifyCreado.PNG)
