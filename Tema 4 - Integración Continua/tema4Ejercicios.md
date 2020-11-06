## Ejercicios Tema 4 - Integración Continua

---

## Ejercicio 9.- Darse de alta en algún sistema de integración continua y posteriormente activar el repositorio en el que se vaya a aplicar la integración continua.



A continuación se indican los pasos seguidos para registrarnos en *TravisCI:*

- Primero nos registramos directamente con la cuenta de *GitHub* ahorrándonos bastantes pasos y autorizamos el acceso a nuestros repositorios

![Travis Registro](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/travisSignUp.PNG)

- Una vez registrados, en *Ajustes* activamos la *GitHub Apps Integration* para que *Travis* pueda ejecutarse usando nuestros repositorios y sincronizamos la cuenta en la misma página

![Travis Activación](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/travisActivar.PNG)

- Y seleccionamos el repositorio donde queremos que se instale la *GitHub App* aprobándolo e instalándolo

![Travis Instalar](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/travisInstalar.PNG)

- Una vez con todo esto realizado, simplemente nos queda cear en el repositorio un archivo de configuración con la estructura `.travis.yml` y automáticamente en el sistema *Travis* se detectará el mismo y pasará a ejecutarse lo indicado en el archivo, pero eso lo dejamos para la ejecución.

---

## Ejercicio 10.- Configurar integración continua para nuestra aplicación usando Travis o algún otro sitio.

Una vez ya instalado todo lo necesario y preparado el repositorio, podemos ejecutar *Travis,* no sin antes ver qué contiene el archivo [.travis.yml](https://github.com/LCinder/Order-n-Go/blob/master/.travis.yml)

 - En el apartado `language` indicamos el lenguaje de programación que vamos a usar, en este caso *Node.js*

- Como vamos a ejecutar el contenedor desarrollado en el hito anterior, indicamos que suaremos como servicios o `services` *docker*

- Indicamos las versiones de *Node.js* que queremos testear con *Travis* lo cuál nos ahorra mucho tiempo probando una y otra hasta ver cuál es la que funciona, ya que como veremos luego nos realiza una descripción de con cuál versión ha funcionado y con cuál no

- En el apartado `before_install` indicamos todo lo necesario antes de realizar la ejecución del contenedor y finalmente en `script` establecemos la ejecución del mismo

---

En cuanto realizamos cualquier cambio en el repositorio empezará a ejecutarse lo establecido en el archivo *.travis.yml* y podemos ver cómo los test se pasan satisfactoriamente.


![Travis Funciona](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/travisBuildFunciona.PNG)
