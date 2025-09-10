let campo = document.getElementById("nombre");
let mensaje = document.getElementById("salida");


campo.addEventListener("copy", (e) => {
  console.log("copiado");
  e.clipboardData.setData("text", window.getSelection().toString());
  e.preventDefault();
  mensaje.innerText = "copiado..." + window.getSelection().toString();
});

campo.addEventListener("paste", (e)=>{
  console.log("pegado");
  const pegado = e.clipboardData.getData("text");
  mensaje.innerText = "pegado: " + pegado;
});

window.addEventListener("beforeprint", (e)=>{
  console.log("Antes de imprimir");
  campo.style.display = "none";
  alert("Ejemplo...");
});

window.addEventListener("afterprint", (e)=>{
  console.log("Despues de imprimir");
  campo.style.display = "block";
  alert("Ejemplo despuès de terminar la impresiòn...");
});


