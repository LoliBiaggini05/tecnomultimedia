let objAv;

function setup() {
  createCanvas(600, 600);
  objAv= new aventura();
}


function draw() {
  objAv.backg();
  objAv.estados();
}

function mousePressed() {
  objAv.andabt();
}

function keyPressed() {
  objAv.j.tecla();
}
