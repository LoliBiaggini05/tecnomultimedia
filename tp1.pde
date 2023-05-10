PImage armadilloa, mundial, mascota, ultima;
String estado;
int c;
float abajo=100; 
PFont negro;
boolean estoyDentroDelRect = true;
float x, y, ancho, alto;

void setup() {
  size( 640, 480 );  
  textAlign( CENTER, CENTER );
  textSize( 30 );
  
  estado = "menu";
  armadilloa= loadImage("arma.jpg");
  mundial= loadImage("mundial.jpg");
  mascota= loadImage("mascota.jpg");
  ultima= loadImage("ultima.jpg");
  negro = loadFont("Arial-Black-30.vlw");
  x = 460;
  y = 400;
  ancho = 150;
  alto = 50;
  
  frameRate( 60 );
}

void draw() {
  abajo= frameCount;
  if ( estado.equals("menu") ) {
    image(armadilloa,0,0);
    fill(0);
    textFont(negro);
    text("Momento iconic de los armadillos",320, 30 );
    line(0,55,640,55);
    strokeWeight(2);
    fill(137,129,90);
    circle( 550, 430, 50 );
    
  } else if (estado.equals("p1") ) {
    image(mundial,0,0);
    fill(51,147,10);
    textSize(20);
    text( "En el mundial 2014, \n fueron elegidos como \n la mascota oficial ", width/4.5, abajo );
   
    c++;  
    if( c >= 300 ){  
      estado = "p2";
      frameCount=100;
      c = 0; 
    }
  } else if (estado.equals("p2") ) {
    image(mascota,0,0);
    fill(0);
    textSize(30);
    text( "Acá te presento a Fuleco, \n nacido el 1 de enero del 2000 \n en Brasil", abajo, height/2 );
 
    c++;  
    if( c >= 300 ){  
      estado = "p3";
      c = 0; 
    }
    //
  } else if (estado.equals("p3") ) {
    image(ultima,0,0);
    fill(255);
    textSize(abajo/60);
    text( "DATOS IMPORTANTES:\n fue elegido debido a que la especie fue catalogada en vía de extinción.\n Su nombre lo eligieron fútbolistas de Brasil, quiere decir futbol y ecología. \n Fue la primera mascota en la historia en tener redes sociales propias.", width/2, height/2 );
    estoyDentroDelRect = ( mouseX > x ) && ( mouseX < x+ancho ) && ( mouseY > y) && ( mouseY < y+alto);
    if ( estoyDentroDelRect ){
      fill(91,190,250);
    }else {
      fill(255,207,72);
      
  }
  noStroke();
  rect( x, y, ancho, alto );
 } 
}

void mousePressed() {
  if( estado.equals("menu") ){
    if( dist(550, 430, mouseX, mouseY) < 50/2 ){
      estado = "p1";
      frameCount=100;
    }
  }
  if( estado.equals("p3") ){
     if( estoyDentroDelRect ){
       if ( ( mouseX > x ) && ( mouseX < x+ancho ) && ( mouseY > y) && ( mouseY < y+alto) ) {
         estado = "menu" ;
         stroke(0);
       }
     }
  }
}
