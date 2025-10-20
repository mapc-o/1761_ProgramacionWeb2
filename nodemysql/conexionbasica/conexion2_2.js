const mysql  = require('mysql2');

const connection = mysql.createConnection({
	host: '162.241.60.213',
	user : 'jesushe2_alumno',
	password: '+ARi8Ufa',
	database: 'jesushe2_progweb',
});

connection.query('SELECT * FROM contactos;', (err, res, estr)=>{
/*
	if(err) throw err;
	else {
		console.log(res);
		for (elem of res){
			console.log('nombre: ' + elem.nombre + '\tedad: ' + elem.edad);
		}
		connection.end();
	}

*/
	try {
		for(elem of res){
			console.log('nombre: ' + elem.nombre + '\tedad: ' + elem.edad);
		}
		console.log("--------------------------");
		console.log(estr);

	} catch(err){
		console.log(err);

	} finally{
		connection.end();

	}

});

