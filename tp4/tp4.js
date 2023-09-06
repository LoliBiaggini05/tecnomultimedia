//Video Presentación: https://youtu.be/NatU8d-eFS8?si=555XkZwYNlHQzwbS
let xP, yP, rP, velYP, velXP, piso;//personaje
let x1, y1; //enemigo
let x3, y3;  //boton
let estado=0;
let  personaje, enemigo;
let tiempo = 0; // llevar el tiempo
let timer; // temporizador
let guardo=0;//guardar tiempo
let fondos=[];
let cant=6;

function setup() {
  createCanvas(600, 600);
  
  piso = 480;
  rP = 50;
  xP = width*0.01;
  yP = piso-rP;
  velYP = 0;
  x1 = 600;
  y1 = 440;
  velXP=0;
  
  personaje=loadImage("data/personaje.png");
  enemigo=loadImage("data/enemigo2.png");
  
  for (i = 0; i < cant; i++ ) {
    fondos[i] = loadImage("data/p" + i + ".png");
  }

  // Configurar el temporizador
  timer = setInterval(function() {
    if (estado == 1) {
      tiempo++;
    }
  },1000);
}

function draw() {

  if (estado == 0) {
    textSize (40);
    imgs(0,"El Vago", 300, 90 );
    inicio (420, "Jugar");
    inicio (260, "Reglas");
    inicio (100, "Creditos");
    
  } else if (estado == 1) {
    imgs(1,"Tiempo: " + tiempo, width - 150, 80);
    juego();
    
  } else if ( estado == 2 ) {
    imgs(2,"PERDISTE", 245, 100);
    ganapie("Presiona R para volver al Menú", 150);
    
  } else if ( estado == 3 ) {
    imgs(3,"GANASTE", 245, 100);
    ganapie("Tardaste "+guardo+" segundos en escapar de la pala!!\nPresiona R para volver al Menú", 100);
    
  } else if (estado == 4) {//2
    imgs(4,"CREDITOS ", 150, 150);
    creditos ("Programado por Dolores Biaggini. \n \n Inspirado en Dino Google. \n \nTrabajo Practico N4 \n \n Tecno Multimedial I Comisión 2 ");
    inicio (420, "Volver");
    
  } else if (estado == 5 ) {//3
    imgs(5, "REGLAS ", 150, 150);
    creditos ("Para poder saltar las palas tenes que apretar la BARRA ESPACIADORA. \n Si quieres correr apreta la FLECHA DERECHA. \n Tenes que lograr llegar al otro lado del campo sin chocarte las palas. \n Al final de la carrera podes ver cuanto tiempo tardaste!!");
    inicio (420, "Volver");
  }
}

function keyPressed() {

  if ( keyCode == 32 ) {
    saltar();
  }
  if (keyCode=== RIGHT_ARROW) {

    xP+=velXP+10;
  }
  if ((estado== 2 || 3) && key == 'r') {
    estado = 0;
    xP = width*0.01;
    x1 = 600;
    tiempo=0;
  }
}

function mousePressed () {

  if (boton (420, 500, 100, 50) && estado == 0 ) {
    estado = 1;
  }
  if (boton (260, 500, 100, 50 ) && estado == 0 ) {
    estado = 5;
  }
  if (boton ( 100, 500, 100, 50 ) && estado == 0 ) {
    estado = 4;
  }
  if (boton (420, 500, 100, 50) && estado == 4 ) {
    estado = 0;
  }
  if (boton (420, 500, 100, 50) && estado == 5 ) {
    estado = 0;
  }
}
