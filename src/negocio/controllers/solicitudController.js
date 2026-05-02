const solicitudService = require('../services/solicitudService');

exports.crearSolicitud = async (req, res) => {
    try {
        const resultado = await solicitudService.crear(req.body);
        // req.body es el objeto que se envía desde el cliente, con los datos de la solicitud.

        res.json({ ok: true, data: resultado });
        // res.json() es un método de Express que envía una respuesta JSON al cliente. 
        // En este caso, se envía un objeto con dos propiedades: 
        // 1- ok, que indica si la operación fue exitosa
        // 2- data, que contiene el resultado de la creación de la solicitud.

    } catch (error) {
        res.status(400).json({ ok: false, error: error.message });
    }
};

exports.listarSolicitudes = async (req, res) => {
    const data = await solicitudService.listar();
    res.json(data);
    // En este caso, se envía directamente el resultado de la función listar() del servicio
    // sin envolverlo en un objeto con la propiedad ok.
};