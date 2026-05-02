const sqlite3 = require('sqlite3').verbose();
// verbose da info detallada de errores en consola

const db = new sqlite3.Database('./database.sqlite');
// abre el archivo databse.sqlite, y si no existe lo crea.

db.serialize(() => {
    //Hace el orden de ejecución asincrona, por defecto funcionan simultaneamente.
    db.run(`
        CREATE TABLE IF NOT EXISTS solicitudes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            correo TEXT,
            mensaje TEXT
        )
    `);
});

module.exports = db;
// Exporta el objeto db para que pueda ser utilizado en otros archivos.