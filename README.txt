Ir a CMD

	"cd lugar/de/la/carpeta "

y colocar los siguientes comandos:

1-	npm init -y
2-      npm install mysql2
3-      npm install ejs
4-      npm install express ejs mysql2 express-session
5-      node app.js

	localhost:3000


Explicación de relación de archivos:
Tenemos 3 carpetas:
	-Datos
	 Que tiene: solicitudDAO.js y db.js
	-Negocio
	  Con dos subcarpetas: 
		"controllers" -> solicitudController.js
		"services" -> solicitudService.js
	-Presentación
	 Que tiene: app.js - index.html - style.css

En el index.html nosotros le damos el formulario donde se ingresan los siguientes datos (nombre, correo (como email) y mensaje), una vez estos son validos y se apreta el botón 'app.js' los almacena dentro de un objeto llamado 'data', este objeto después es enviado al archivo que lo necesite.
En este caso van al app.js que esta fuera de la carpeta de presentación donde este instancia a 'solicitudController.js' donde se mete a la función 'crear solicitud' y recibe un requisito (req) y devuelve un respuesta (res).

'SolicitudService.js'Se encarga de verificar que los datos guardados vayan de acorde a lo que esta definido, si lo esta se le envia a 'solicitudDAO.js'

'solicitudDAO.js' crea la sentencia SQL para insertarlo en la base de datos en 'db.js'.

Una vez sale todo bien se devuelve a 'solicitudControlller.js' y se devuelve la respuesta, este manda el mensaje a 'app.js' y este escribe para el usuario "Solicitud Ingresada" o lo que tenga escrito.
