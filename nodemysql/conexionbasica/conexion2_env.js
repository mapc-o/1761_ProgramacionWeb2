const mysql  = require('mysql2'); // CommonJS
require ('dotenv').config();


/*
const connection = mysql.createConnection({
	host: '162.241.60.213',
	user : 'jesushe2_alumno',
	password: '+ARi8Ufa',
	database: 'jesushe2_progweb',
});
*/


//modulo dotenv --> recuperar credenciales
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,

});

console.log(process.env.DB_HOST);

connection.query('SELECT * FROM contactos', (err, res, estr)=>{
	try{
		for (elem of res){
			console.log('nombre: ' + elem.nombre);
		}
		console.log(estr);
	} catch (err){
		console.log(err);
	} finally {
		connection.end();
	}
});
