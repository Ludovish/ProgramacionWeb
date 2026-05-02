const express = require('express');
const path = require('path');
const solicitudController = require('./src/negocio/controllers/solicitudController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'src/presentacion/public')));

app.post('/api/solicitudes', solicitudController.crearSolicitud);
app.get('/api/solicitudes', solicitudController.listarSolicitudes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});