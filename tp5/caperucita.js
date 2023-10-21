class caperucita {
  constructor(cx, cy, capevelx, capevely, piso, hP, rP, vida) {
    this.cx= cx;
    this.cy= cy;
    this.capevelx= capevelx;
    this.capevely= capevely;
    this.piso= piso;
    this.rP= rP;
    this.hP=hP;
    this.tocar=false;
    this.vida = vida;
  }

  foto() {
    this.per=loadImage ('data/cap.png');
  }

  dibujar() {
    imageMode( CENTER );
    image(this.per, this.cx, this.cy, this.rP, this.hP);
  }

  actualizar() {
    ////para que salte
    this.cy+=this.capevely;
    ////actualiza el valor de la velocidad en capevely;
    if (this.cy+this.rP<this.piso) {
      this.capevely+=0.20;//altura del salto
    } else {
      this.capevely=-(this.capevely*0.35); //rebote:
    }
  }

  vidas () {
    this.vida --;
    this.cx=width*0.1;
    this.cy=370;
  }

  correr() {
    this.cx+= this.capevelx+12
  }

  saltar() {
    if ( this.cy>this.piso-200-7) {
      this.capevely = -11;
    }
  }
}
