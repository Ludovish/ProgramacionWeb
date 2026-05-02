//Frontend 
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
});