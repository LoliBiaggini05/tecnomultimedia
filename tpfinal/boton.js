//CON ARREGLO DE BOTON
class boton {
  constructor(ancho, alto,bot) {
    this.ancho = ancho;
    this.alto = alto;
    this.bot=bot;
    textAlign(CENTER, CENTER);
    textSize(this.alto/2);
  }
  dibujobt(x, y) {//dibuja
    if (mouseX > x && mouseX < x + this.ancho && mouseY > y && mouseY < y + this.alto) {
      fill(random(250), random(220, 230), random(0, 5));
    } else {
      fill(255, 0, 0);
    }
    rect (x, y, this.ancho, this.alto, 10); // boton
    fill (255);
    textSize (15);
    text (this.bot, x+10, y, 80, 50);
  }

  apretobt(x, y) {//interacciona
    return(mouseX > x && mouseX < x+this.ancho && mouseY > y && mouseY < y+this.alto);
  }
}
