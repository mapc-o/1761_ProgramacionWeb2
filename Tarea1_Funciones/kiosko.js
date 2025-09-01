// módulo para leer entrada del usuario
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

//            [0]       [1]
// código: [producto, precio]
const productos =
{
  '1': ["Papas Fritas", 17], 
  '2': ["Vaso de frutas", 25], 
  '3': ["Jugo de Naranja", 30], 
  '4': ["Agua de Jamaica", 15], 
  '5': ["Torta de Jamón", 25]
};

// da seguimiento a productos comprados
// codigo: cantidad
const adquisiciones = {};
let subtotal_f = 0;
const iva = 0.16;


function menu()
{
  console.log("******* KIOSKO FES ARAGÓN *******");
  console.log("(1) Papas Fritas..........$17");
  console.log("(2) Vaso de frutas........$25");
  console.log("(3) Jugo de Naranja.......$30");
  console.log("(4) Agua de Jamaica.......$15");
  console.log("(5) Torta de Jamón........$25");

  console.log("Modo de uso: código del producto, cantidad. Escribir 'fin' para concluir el proceso"); 
}

menu();


function calculo_subtotal(precio, cantidad, callback)
{
    return callback(precio, cantidad);
}


// reader.on maneja eventos, 
// line es un evento que sucede cuando el usuario ingresa algo y presiona Enter
// una función callback se ejecutará para reaccionar al evento line
// y el valor ingresado se pasa como el parámetro
reader.on("line", (callback) => {
  if (callback == 'fin') {
    let total = (subtotal_f * iva) + subtotal_f;
    console.log(`************ RESUMEN ************`);
    // itera por los productos adquiridos
    for (let i in adquisiciones)
    {
      //  "Papas Fritas", 17
      let [producto, precio] = productos[i];
      let cantidad = adquisiciones[i];
      let subtotal = precio * cantidad;
      console.log(`${producto} x ${cantidad} = $${subtotal}`);
      // finaliza el lector para poder salir correctamente del programa
      reader.close();
    }

    console.log("*********************************");
    console.log(`Subtotal......................$${subtotal_f}`);
    console.log(`IVA (16%)...................$${subtotal_f * iva}`);
    console.log(`TOTAL.......................$${total}`);
    console.log("*********************************");

    // finaliza el proceso
    process.exit(0);
  }

  else {

    //        1,2
    let [codigo, cantidad] = callback.split(",");
    codigo = parseInt(codigo);
    cantidad = parseInt(cantidad);
    if (isNaN(codigo) || isNaN(cantidad))
    {
      console.log("Caracter inválido");
      return 0;
    }

    if (!(codigo in productos))
    {
      console.log("Código no válido");
      return 0;
    }
    
    if (cantidad <= 0) 
    {
      console.log("Cantidad no válida");
      return 0;
    }

    else 
    {
      let producto = productos[codigo][0];
      let precio = productos[codigo][1];
      let subtotal = calculo_subtotal(precio, cantidad, (precio, cantidad) => {
        return precio * cantidad;
      });

      subtotal_f += subtotal;

      // si no se ha comprado, cantidad = 0
      if (!adquisiciones[codigo])
      {
        adquisiciones[codigo] = cantidad;

      }
      else 
      {
        adquisiciones[codigo] += cantidad;
      }

      console.log(`Añadido: ${producto} x ${precio} = $${subtotal}`);
    }
  }
}); 
