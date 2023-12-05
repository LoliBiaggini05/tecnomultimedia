class lobo {
  constructor(lx, ly, lobovel, piso, hP, rP) {
    this.lx = lx;
    this.ly = ly;
    this.lobovel=lobovel;
    this.piso= piso;
    this.rP= rP;
    this.hP=hP;
  }
  foto() {
    this.ene=loadImage ('data/lob.png');
  }
  dibujar() {
    imageMode( CENTER );
    image (this.ene, this.lx, this.ly, this.rP, this.hP );
  }

  movimiento() {
    //actualizo el "enemigo"
    this.lx-=this.lobovel+1.6;
    if ( this.lx > width ) {
      this.lx = 600;
    } //(comportamiento toroidal)
    if ( this.lx < 0-this.rP ) {
      this.lx = width+this.rP;
    }
  }

  getX() {
    return this.lx;
  }

  getY() {
    return this.ly;
  }
}
