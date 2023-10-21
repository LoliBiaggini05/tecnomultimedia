//Video Presentación: https://www.youtube.com/watch?v=IOJSCL8trHM
let objJuego;

function setup() {
  createCanvas(600, 600);
  objJuego= new juego();
}


function draw() {
  objJuego.backg();
  objJuego.iniciar();
  objJuego.dibujar();
}

function keyPressed() {
  objJuego.tecla();
}
