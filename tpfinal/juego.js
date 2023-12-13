class juego {
  constructor() {
    this.carga();
    this.personaje.foto();
    this.enemigo.foto();
    this.estado = 0;
    this.fondo=[];
    this.mipreload();
    this.i=0;
    this.counter=0;
  }
  backgj() {
    image( this.fondo[this.i], 0, 0 );
  }

  mipreload() {
    for ( this.i = 0; this.i < 2; this.i++ ) {
      this.fondo.push( loadImage('data/f'+this.i+'.png') );
    }
  }

  carga() {
    this.enemigo= new lobo(600, 400, 0, 550, 200, 200);
    this.personaje= new caperucita(width*0.1, 370, 0, 0, 550, 200, 160, 2);
  }

  iniciar() {
    if ( this.estado == 1 ) {
      this.enemigo.movimiento();
      this.colision();
      this.personaje.actualizar();
      this.perder();
      this.ganar();
    }
  }

  dibujar() {
    console.log(this.counter);
    if ( this.estado == 0 ) {
      image( this.fondo[0], 0, 0 );
      this.texto("Ayuda a escapar a Caperucita con la FLECHA DERECHA y saltando con la BARRA ESPACIADORA. Esquivando al lobo para llegar al otro lado, pero CUIDADO solo tenes 2 vidas.", 20, 10, 20, 580, 250);
      this.actualizar();
      text((8 - Math.floor(this.counter/60)), 280 ,200);
    } else if ( this.estado == 1 ) {
      image( this.fondo[1], 0, 0 );
      push();
      this.personaje.dibujar();
      this.enemigo.dibujar();
      pop();
      this.texto("vidas: " + this.personaje.vida, 80, 500, 30);
    }
  }

  texto(mensaje, x, y, t, anc, alt) {
    fill(0);
    textSize(t);
    text(mensaje, x, y, anc, alt);
  }
  
  actualizar() {//cambia de estado x tiempo
    this.counter++;
    if (this.counter >= 480) {
      this.estado = 1;
      this.counter = 0;
    }
  }

  getEstado() {
    return this.estado;
  }

  colision() {
    if (this.personaje.cx<this.enemigo.getX()+this.enemigo.rP/2 && this.personaje.cx+this.personaje.rP*0.6>this.enemigo.getX() && this.personaje.cy< this.enemigo.getY()+this.enemigo.hP/2 && this.personaje.cy+this.personaje.hP>this.enemigo.getY() ) {
      this.personaje.vidas();
      this.enemigo.lx=600;
    }
  }

  perder () {
    if (this.personaje.vida <= 0) {
      this.estado =4;
    }
  }

  ganar() {
    if (this.personaje.cx >= 650) {
      this.personaje.tocar = true;
      this.estado= 9;
    }
  }

  reinicioj() {
    this.estado=0;
    this.personaje.cx = width*0.1;
    this.personaje.cy = 370;
    this.enemigo.lx=600;
    this.personaje.vida=2;
  }
  tecla() {
    this.tec=keyCode;
    this.toc=key;
    if ( this.estado == 1 ) {
      if (this.tec === RIGHT_ARROW) {
        this.personaje.correr();
      } else if (this.tec == 32) {
        this.personaje.saltar();
      }
    }
    if ( this.estado==0 && this.toc=='s' ) {
      this.estado = 1;
    }
  }
}
