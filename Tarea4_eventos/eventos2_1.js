let liga = document.getElementById("liga");
let nombre = document.getElementById("nombre");

liga.addEventListener("click",(e)=>
{
  console.log("Click sobre el link");
  // sobreescribir el comportamiento HTML, a null
  e.preventDefault();
});

nombre.addEventListener("keydown", (e)=>{
  // e.preventDefault();
  console.log(e.type);
  console.log("Codigo: " + e.code);
  console.log("Key: " + e.key);
  console.log(e.repeat);
  console.log(e.ctrlKey ? "presionaste ctrl + " + e.key : "solo " + e.key);
  nombre.innerText = nombre.innerText + e.key;
/*
  if (e.key == 'a')
  {
    document.getElementById("edad").focus();
  }
*/
  if (e.key == 'enter')
  {
    console.log("Enter capturado");
    document.getElementById("edad").focus();
  }

  console.log("Location teclado: " + e.location);

});

document.getElementById("formulario").addEventListener("submit", (e)=>{
  console.log("Validar campos...");
  console.log("se enviò el formulario");
  e.preventDefault();
});

document.getElementById("autos").addEventListener("change", (e)=>{
  console.log("Se cambiò el valor");
  console.log(document.getElementById("autos").value);
})


