//holamundo.js
var express = require("express");
var app = express();
app.get("/", function(request, response) {
  response.send("¡Hola mundo Express !");
});


app.get("/home", function(request, response) {
  response.send("<h1>Home de hola mundo </h1>");
});



app.listen(3000, function() {
  console.log("Servidor express iniciado, en el puerto 3000.");
});


app.post("/prueba", (req, res)=>{
	res.send("Se solicitò una prueba..POST");
});
