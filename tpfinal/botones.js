class botones {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
    textAlign(CENTER, CENTER);
    textSize(this.alto/2);
  }
  dibujobt(x, y, bot) {//dibuja
    if (mouseX > x && mouseX < x + this.ancho && mouseY > y && mouseY < y + this.alto) {
      fill(random(250), random(220, 230), random(0, 5));
    } else {
      fill(255, 0, 0);
    }
    rect (x, y, this.ancho, this.alto, 10); // boton
    fill (255);
    textSize (15);
    text (bot, x+10, y, 80, 50);
  }

  apretobt(x, y) {//interacciona
    return(mouseX > x && mouseX < x+this.ancho && mouseY > y && mouseY < y+this.alto);
  }

  press(es) {
    if (this.apretobt(470, 500) && es== 13 ) {
      return 0;
    } else if (this.apretobt(370, 500) && es == 0 ) {
      return 1;
    } else if (this.apretobt(170, 500) && es == 0 ) {
      return 13;
    } else if (this.apretobt(150, 200) && es == 1) {
      return 2;
    } else if (this.apretobt(120, 280) && es == 1 ) {
      return 7;
    } else if (this.apretobt(470, 500) && es == 2 ) {
      return 3;
    } else if (this.apretobt(470, 500) && es == 4 ) {
      return 5;
    } else if (this.apretobt(470, 500) && es == 5 ) {
      return 6;
    } else if (this.apretobt(470, 500) && es == 6 ) {
      return 0;
    }
    //SEGUNDA RAMA
    else if (this.apretobt(400, 500) && es == 7 ) {
      return 8;
    } else if (this.apretobt(200, 500) && es == 7 ) {
      return 2;
    } else if (this.apretobt(400, 500) && es == 8 ) {
      return 11;
    } else if (this.apretobt(200, 500) && es == 8 ) {
      return 9;
    } else if (this.apretobt(470, 500) && es == 9 ) {
      return 10;
    } else if (this.apretobt(470, 500) && es == 10 ) {
      return 0;
    }
    //TERCER RAMA
    else if (this.apretobt(470, 500) && es == 11 ) {
      return 12;
    } else if (this.apretobt(470, 500) && es == 12 ) {
      return 0;
    } else {
      return es;
    }
  }
}
