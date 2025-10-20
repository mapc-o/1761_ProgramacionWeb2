// con promesas

import mysql from 'mysql2/promise';
// const mysql =  require('mysql2/promise');

try {


/*
await debe esperar una respuesta
async funciòn sìncrona + await
*/
	const mysql  = require('mysql2');

	const connection = await mysql.createConnection({
		host: '162.241.60.213',
		user : 'jesushe2_alumno',
		password: '+ARi8Ufa',
		database: 'jesushe2_progweb',
	});

	const [res, estr] = await connection.execute('SELECT * FROM contactos;');
	console.log(res);

} catch(e){
	console.log(e);
} finally {

}


});
