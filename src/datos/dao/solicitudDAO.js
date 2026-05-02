const db = require('../db');

exports.insertar = (solicitud) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO solicitudes (nombre, correo, mensaje) VALUES (?, ?, ?)`;

        db.run(sql, [solicitud.nombre, solicitud.correo, solicitud.mensaje], function(err) {
            if (err) return reject(err);
            resolve({ id: this.lastID, ...solicitud });
        });
    });
};

exports.listar = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM solicitudes`, [], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
};

// new Promise se usa porque las operaciones de base de datos son asíncronas.
// db.run se utiliza para ejecutar una consulta SQL que no devuelve resultados (como INSERT, UPDATE, DELETE).
// db.all se utiliza para ejecutar una consulta SQL que devuelve múltiples filas (como SELECT).