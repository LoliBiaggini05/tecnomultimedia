//video presentación: https://youtu.be/sAlsWaNRt08
PImage imagenop;

void setup() {
  size(800, 400);
  imagenop=loadImage("imagen.jpeg");
}

void draw() {
  background(255);
  pushMatrix();
  cuadrado1(cant, tam, ancho, colorlinea);
  popMatrix();
  image(imagenop, 0, 0, 400, 400);
  println (texto());
}
