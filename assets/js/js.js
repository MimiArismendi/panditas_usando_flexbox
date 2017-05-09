var textoOrigen = document.getElementById("origen");
var textoExtincion = document.getElementById("extincion");
var botones = document.getElementsByClassName("opciones");

var limpiar = document.getElementsByClassName("limpiar");
var imagenPanda = document.getElementsByClassName("img");

for(var i=0; i < img.length; i++) {
  limpiar[i].addEventListener("click", function(){
    this.style.display = "none";
  });
}

botones[2].addEventListener("click", function(){
  for(var j=0; j < img.length; j++) {
    limpiar[j].style.display = "flex";
  }
});

botones[0].addEventListener("click", function() {
  if(origen.style.visibility == "visible") {
  origen.style.visibility = "hidden";
  } else {
    origen.style.visibility = "visible";
  }
});

botones[1].addEventListener("click", function(){
  if(extincion.style.visibility == "visible") {
    extincion.style.visibility = "hidden";
  } else {
    extincion.style.visibility = "visible";
  }
});
