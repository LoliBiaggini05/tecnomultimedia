function  saltar() {
  if ( yP>piso-rP-7) {
    velYP = -8;
  }
}
function juego() {
  //para que salte
  yP+=velYP;
  //actualizamos el valor de la velocidad en velYP;
  if (yP+rP<piso) {
    velYP+=0.20;//altura del salto
  } else {
    velYP=-(velYP*0.35); //rebote:
  }

  image(personaje, xP, yP-60, rP*4, rP*4);
  
  //actualizo y dibujo el "enemigo"
  x1-=velXP+1.6;
  if ( x1 > width ) {
    x1 = 600;
  }

  image(enemigo, x1, y1, rP*2, rP*2);

  //(comportamiento toroidal)
  if ( x1 < 0-rP ) {
    x1 = width+rP;
  }
  //LA CONDICION PARA PERDER
  if ( dist(x1-80, y1, xP, yP) < rP ) {
    estado = 2;
  }
  //CONDICION PARA GANAR
  if ( xP >= 580 ) {  //si toco el borde derecho de la pantalla
    estado = 3;
  }
}

function boton (x, y, ancho, alto) {
  if (mouseX > x && mouseX < x+ancho && mouseY > y && mouseY < y+alto) {
    return true;
  } else {
    return false;
  }
}

function imgs(i, titu, x, y) {
  image(fondos[i], 0, 0 );
  text( titu, x, y );
}

function inicio (x, bot) {
  fill (230, 140, 70);
  rect (x, 500, 100, 50, 10); // boton
  fill (255);
  textSize (20);
  text (bot, x+15, 530);
}

function creditos (texto) {
  fill(240, 225, 65);
  rect(110, 180, 400, 230)
    fill(0);
  text(texto, 140, 200, 400);
}

function ganapie (mas, x) {
  text(mas, x, 120, 500);
  guardo=tiempo;
}
