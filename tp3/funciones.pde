void figura(int i, int x, int y, int lon, int alto) {
  image(fotos[1+i], 0, 0 );
  fill(0);
  text(historia[i], x, y, lon, alto);
}

void opcion(float x, float y, float a, String texto) {
  if (mouseX > x-50 && mouseX < x + 40 && mouseY > y-25 && mouseY < y + 20) {
    fill(random(250), random(220, 230), random(0, 5));
  } else {
    fill(255, 0, 0);
  }
  rect(x - a/4, y - a/8, a/2 - 10, a/4, 10);
  fill(0);
  textSize(15);
  text(texto, x-5, y);
}

boolean dentroboton(int x, int y) {
  resultado = (mouseX > x - 20 && mouseX < x + 70 && mouseY > y - 15 && mouseY < y + 30);
  return resultado;
}
