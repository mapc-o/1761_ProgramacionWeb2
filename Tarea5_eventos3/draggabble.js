let origen = document.getElementById("origen");
let destino = document.getElementById("destino");

origen.addEventListener("dragstart", (e)=>{
  e.dataTransfer.setData("plain/text", "dato importante");
  e.dataTransfer.setData("application/id", "101");
  e.dataTransfer.setData("application/json", JSON.stringify({
    id: 101,
    nombre = 'Jose',
    saldo: 545646.9,
    activo: true
  }
  ));
  console.log("Inicio del arrastre");
});

destino.addEventListener("dragover",(e)=>{
  e.preventDefault();
});

destino.addEventListener("drop", (e)=>{
  e.preventDefault();
  console.log("soltado");
  const datos = e.dataTransfer.getData("plain/text");
  console.log(datos);
  console.log("Id de usuario = " + e.dataTransfer.getData("application/id"));
  console.log("El usuario = " + JSON.parse(e.dataTransfer.getData("application/json")));
});
