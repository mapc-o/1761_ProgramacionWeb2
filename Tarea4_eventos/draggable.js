let fuente = document.getElementById("fuente");
let destino = document.getElementById("destino");

fuente.addEventListener("dragstart",(e)=>{
  console.log("Iniciò el arrastre: ");
});

destino.addEventListener("dragover", (e)=>{
  e.preventDefault();
});

destino.addEventListener("drop", (e)=>{
  e.preventDefault();
  console.log("Soltado");
});
