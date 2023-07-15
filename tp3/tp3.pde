//video presentación: https://youtu.be/0x0XQKsZ3hg
int estado = 0;
int colorb = 0;
int cant = 14;
int let = 13;
boolean resultado;
PImage[] fotos = new PImage[cant];
String[] historia = new String[cant];


void setup() {
  size(600, 600);
  for (int i = 0; i < cant; i++ ) {
    fotos[i] = loadImage("p" + i + ".png");
  }
  historia = loadStrings("historia.txt");
  for ( int i = 0; i < let; i++ ) {
  }
}

void draw() {
  println(mouseX);
  println(mouseY);
  println(estado);
  println(resultado);
  textSize(20);
  textAlign(CENTER, CENTER);

  switch(estado) {
  case 0:
    image(fotos[0], 0, 0);
    opcion(400, 550, 200, "HISTORIA");
    opcion(200, 550, 200, "CREDITOS");
    break;
  case 1:
    figura(0, 5, 5, 580, 110);
    opcion(190, 220, 220, "BOSQUE");
    opcion(177, 300, 220, "PRADERA");

    break;
  case 2:
    figura(1, 10, 10, 580, 120);
    opcion(470, 520, 200, "SIGUIENTE");

    break;
  case 3:
    figura(2, 10, 10, 580, 120);
    opcion(400, 550, 200, "LAS LLEVA");
    opcion(200, 550, 200, "NO LAS LLEVA");
    break;
  case 4:
    figura(3, 10, 10, 580, 150);
    opcion(470, 520, 200, "SIGUIENTE");
    break;
  case 5:
    figura(4, 10, 10, 580, 110);
    opcion(470, 520, 200, "SIGUIENTE");
    break;
  case 6:
    figura(5, 10, 10, 580, 110);
    opcion(470, 520, 200, "FIN");
    break;
  case 7:
    figura(6, 10, 10, 590, 100);
    opcion(400, 550, 200, "SEGUIR\n JUNTAS");
    opcion(200, 550, 200, "SEGUIR\n SOLA");
    break;
  case 8:
    figura(7, 10, 10, 580, 110);
    opcion(400, 550, 200, "IR CON\n ELLA");
    opcion(200, 550, 200, "SEPARARSE");
    break;
  case 9:
    figura(8, 10, 10, 580, 100);
    opcion(470, 520, 200, "SIGUIENTE");
    break;
  case 10:
    figura(9, 10, 10, 580, 110);
    opcion(470, 520, 200, "FIN");
    break;
  case 11:
    figura(10, 10, 10, 580, 120);
    opcion(470, 520, 200, "SIGUIENTE");
    break;
  case 12:
    figura(11, 10, 10, 580, 120);
    opcion(470, 520, 200, "FIN");
    break;
  case 13:
    textSize(30);

    figura(12, 150, 100, 300, 400);
    opcion(470, 520, 200, "VOLVER");
  }
}

void mousePressed() {

  if (estado == 13  && dentroboton(470, 520)) {
    estado = 0;
  }
  if (estado == 0  && dentroboton(370, 540)) {
    estado = 1;
  } else if (estado == 0  && dentroboton(170, 540)) {
    estado = 13;
  } else if (estado == 1  && dentroboton(190, 220)) {
    estado = 2;
  } else if (estado == 1  && dentroboton(177, 300)) {
    estado = 7;
  } else if (estado == 2 && dentroboton(470, 520)) {
    estado = 3;
  } else if (estado == 3 && dentroboton(370, 540)) {
    estado = 4;
  } else if (estado == 3 && dentroboton(170, 540)) {
    estado = 9;
  } else if (estado == 4  && dentroboton(470, 520)) {
    estado = 5;
  } else if (estado == 5  && dentroboton(470, 520)) {
    estado = 6;
  } else if (estado == 6  && dentroboton(470, 520)) {
    estado = 0;
  }
  //segunda rama
  if (estado == 7  && dentroboton(370, 540)) {
    estado = 8;
  } else if (estado == 7  && dentroboton(170, 540)) {
    estado = 2;
  } else if (estado == 8  && dentroboton(370, 540)) {
    estado = 11;
  } else if (estado == 8  && dentroboton(170, 540)) {
    estado = 9;
  } else if (estado == 9  && dentroboton(470, 520)) {
    estado = 10;
  } else if (estado == 10  && dentroboton(470, 520)) {
    estado = 0;
  }
  //tercer rama
  if (estado == 11 && dentroboton(470, 520)) {
    estado = 12;
  } else if (estado == 12 && dentroboton(470, 520)) {
    estado = 0;
  }
}
