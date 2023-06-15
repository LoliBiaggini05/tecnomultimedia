int cant=2;
int tam=200;
int ancho=180;
int z;
int colorlinea=0;
int cen;


void cuadrado1(int cant, int tam, int ancho, int colorlinea) {
  noFill();
  strokeWeight(10);
  stroke(colorlinea);
  translate(495, 100);
  rectMode(CENTER);

  for (int x=0; x<cant; x++) {
    for (float r =ancho; r>cant; r-=30) {
      float x1 = constrain(400, tam, x*tam+tam);
      float y1= constrain(mouseY, x*tam+100, x*tam+tam);
      float uX = map(r%2, tam, 0, x*tam, x1);
      float uY = map(r, tam, 0, tam, y1);
      rect(uX-tam, uY-tam, r, r);


      for (int y=0; y<cant; y++) {
        for (float z =ancho; z>cant; z-=30) {
          float a1 = constrain(400, tam, y*tam-55);
          float b1= constrain(mouseY, y*tam+100, y*tam+tam);
          float cX = map(z, tam, 0, y*tam, a1);
          float cY = map(z, tam, 0, tam, b1);
          rect(cX, cY, z, z);
        }
      }
    }
  }
}
void mousePressed() {
  if (mousePressed&&(mouseButton==RIGHT)) {
    colorlinea= color(random(218), random(131), random(232));
    ancho++;
  } else {
    colorlinea= color(random(8), random(92), random(255));
    ancho--;
  }
}
void keyPressed() {
  if (key==' ') {
    colorlinea=0;
    ancho=180;
  }
}
String texto() {
  return("Bienvenido a mi tp2, haciendo click con el boton derecho o izquierdo se anima la imagen y moviendo el mouse. Para reiniciar el programa usa la barra espaciadora");
}
