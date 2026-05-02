//Frontend 
//Primera función para la inserción de datos.
document.getElementById('formulario').addEventListener('submit', async (e) => { 
    e.preventDefault(); 
    // addEventListener esta atento a cuando se aprete el botón.
    // Cambia la forma en la que la página funciona de forma normal por conveninencia. (afecta en este caso solo al formulario)
    // async es para que espere a que se ejecute el "fetch".


    const data = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        mensaje: document.getElementById('mensaje').value
    };
    // Agarra los datos en un objeto llamado "data" y lo manda al backend.

    const res = await fetch('/api/solicitudes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    // fetch es para hacer una solicitud al backend. 
    // En este caso, se hace una solicitud POST a la ruta "/api/solicitudes" 
    // con el objeto "data" convertido a JSON en el cuerpo de la solicitud.

    const json = await res.json();

    document.getElementById('respuesta').innerText =
        json.ok ? 'Solicitud enviada correctamente' : json.error;
    //Espera respuesta del backend y muestra un mensaje 
    //dependiendo de si la solicitud fue exitosa o no.
    if(json.ok) {
        document.getElementById('formulario').reset();
    }
    // Si la solicitud fue exitosa, resetea el formulario para que quede vacío.
    
});

//Segunda función para mostrar la lista de
document.getElementById('btnListar').addEventListener('click', async () => {
    const contenedor = document.getElementById('listaSolicitudes'); 
    
    try {
        const res = await fetch('/api/solicitudes'); 
        const solicitudes = await res.json();

        contenedor.innerHTML = '';

        if (solicitudes.length === 0) {
            contenedor.innerHTML = '<p>No hay solicitudes registradas.</p>';
            return;
            // Lista vacia = mensaje para informar.
        }

        let tabla = `<table border="1" style="width:100%; margin-top:10px; border-collapse: collapse;">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Mensaje</th>
                </tr>
            </thead>
            <tbody>`;
        //Se declara una variable "tabla" que contiene el código HTML para crear una tabla con encabezados para ID, Nombre, Correo y Mensaje.


        solicitudes.forEach(s => {
            tabla += `<tr>
                <td>${s.id}</td>
                <td>${s.nombre}</td>
                <td>${s.correo}</td>
                <td>${s.mensaje}</td>
            </tr>`;
        });
        // Recorre cada solicitud en el array "solicitudes" y agrega una fila a la tabla con los datos de cada solicitud.


        tabla += `</tbody></table>`;
        contenedor.innerHTML = tabla;
        // Coloca etiquetas de cierra para la tabla para que sea valido.

    } catch (error) {
        console.error(error);
        contenedor.innerHTML = '<p style="color:red;">Error al cargar los datos.</p>';
    }
});