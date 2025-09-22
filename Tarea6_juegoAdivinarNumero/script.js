const bg_color = ["#fc4444", "#ffa500", "#fbdb04", "#8bc34a", "#03a9f4", "#043c8c", "#673ab7", "#9c27b0", "#ec4c8c", "#fc8c84"];
const drag_zone = document.getElementById("drag-zone");
const drop_zone = document.getElementById("drop-zone");
const msj = document.getElementById("mensaje");
const h1 = document.getElementById("h1");
let intentos = 3;

let adivinar = Math.floor(Math.random() * 10) + 1;

for (let i = 0; i < 10; i++)
{
  let btn = document.createElement('button');
  btn.innerHTML = `${i+1}`;
  btn.value = `${i+1}`;
  btn.style.backgroundColor = bg_color[i];
  btn.setAttribute("draggable", "true");

  btn.addEventListener("dragstart", (e) =>{
    e.dataTransfer.setData("text/plain", btn.value);
  });

  drag_zone.appendChild(btn);
}



drop_zone.addEventListener("dragover", (e)=>{
  e.preventDefault();
});

drop_zone.addEventListener("drop", (e)=>{
  e.preventDefault();
  let valor_btn = parseInt(e.dataTransfer.getData("text/plain"));
  let btn_arrastrado = null;
  for (let i of drag_zone.children)
  {
    if (i.value == valor_btn)
    {
      btn_arrastrado = i;
      break;
    }
  }

  if (btn_arrastrado) 
  {
    btn_arrastrado.classList.add("arraste");
    setTimeout(() => {
      btn_arrastrado.remove();
    }, 1000);
  }

  if (intentos > 0) 
  {
    if (valor_btn == adivinar) 
    {
      h1.innerHTML = "GANASTE!"
      msj.innerHTML = "Ganaste!";
      drop_zone.classList.add("ganar");
    } 
    else 
    {
      intentos--;
      if (intentos == 0) 
      {
        msj.innerHTML = `Juego terminado.\nNo hay intentos restantes`;
        h1.innerHTML = "GAME OVER";
        drop_zone.classList.add("perder");
      } 
      else {
        if (valor_btn < adivinar) 
        {
          msj.innerHTML = `El número es mayor que ${valor_btn}.\nIntentos restantes: ${intentos}.`;
        } 
        else if (valor_btn > adivinar) 
        {
          msj.innerHTML = `El número es menor que ${valor_btn}.\nIntentos restantes: ${intentos}.`;
        }
      }
    }
  }
});


  
