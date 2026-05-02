const solicitudDAO = require('../../datos/dao/solicitudDAO');

exports.crear = async (data) => {
    const { nombre, correo, mensaje } = data;

    if (!nombre || !correo || !mensaje) {
        throw new Error('Todos los campos son obligatorios');
    }
    // Extrae la info del objeto "data" y verifica que no falte ningún campo. 
    // Si falta alguno, lanza un error.

    const solicitud = {
        nombre: nombre.trim(),
        correo: correo.toLowerCase(),
        mensaje: mensaje.trim()
    };
    // Más que nada, limpia los datos para evitar problemas de formato.

    return await solicitudDAO.insertar(solicitud);
};

exports.listar = async () => {
    return await solicitudDAO.listar();
};