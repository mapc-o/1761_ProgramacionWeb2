const mysql  = require('mysql2');

const connection = mysql.createConnection({
	host: '162.241.60.213',
	user : 'jesushe2_alumno',
	password: '+ARi8Ufa',
	database: 'jesushe2_progweb',
});

//modo retrollamada
connection.execute('SELECT * FROM contactos;', (err, resultado, estructura)=>{
	if(err) console.log("Error al ejecutar");
	else {
		console.log(resultado);
	}
});


