let video = document.getElementById("video");

video.addEventListener("play", ()=>{
  console.log("le diste play");
});

video.addEventListener("ended", ()=>{
  console.log("terminò el video");
});

video.addEventListener("pause", ()=>{
  console.log("video pausado");
});
