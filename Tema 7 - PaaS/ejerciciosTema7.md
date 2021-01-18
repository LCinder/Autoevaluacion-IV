## Ejercicios Tema 7 - PaaS
---

## Ejercicio 1.- Darse de alta en algún servicio PaaS tal como Heroku o BlueMix o usar alguno de los PaaS de otros servicios cloud en los que ya se esté dado de alta.


Darse de alta es muy sencillo y sólo deberemos registrarnos en la página como en cualquier otra, y directamente entraremos en el *Dashboard* donde podremos crear *dynos* o aplicaciones.


![heroku](https://github.com/LCinder/Autoevaluacion-IV/blob/master/Tema%207%20-%20PaaS/img/heroku1.PNG)

---

## Ejercicio2.- Crear una aplicación en OpenShift o en algún otro PaaS en el que se haya dado uno de alta. Realizar un despliegue de prueba usando alguno de los ejemplos incluidos con el PaaS.

Primero crearemos una aplicación desde el *dashboard* y elegimos un nombre y la región.

Segundo nos logeamos en heroku ejecutando `heroku login` previamente teniendo instalado **Heroku CLI** de forma que tendremos el entorno de trabajo lista para crear la aplicación.

Si tenemos creado un repositorio en *GitHub* como es el caso entonces simplemente cuando tengamos lista la aplciación realizaremos `git push heroku master` y la aplicación estará desplegada y podremos acceder con la URL que se nos proporciona.

---

## Ejercicio 3.-Instalar y echar a andar tu primera aplicación en Heroku.
