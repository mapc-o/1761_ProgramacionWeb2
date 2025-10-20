const pool = require('./db');

async function pruebaConexion(){
	try {
		console.log("Probando conexiòn");
		const [registros] = await pool.query('SELECT * FROM contactos');
		console.log(registros);
	} catch(err) {
		console.log(err);
	} finally {
		await pool.end();
	}

};

pruebaConexion();
