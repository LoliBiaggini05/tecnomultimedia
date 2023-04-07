PImage vaquita;
void setup(){
  size(800,400);
  vaquita = loadImage("tortu9 (1).jpg");
}

void draw(){
  background(103,209,227);
  image (vaquita,400,0);
  //fondo
  noStroke();
  //fila1
  fill(61,216,252);
  circle(30,40,80);
  circle(100,45,80);
  circle(170,40,80);
  circle(240,45,80);
  circle(310,40,80);
  circle(380,45,80);
  //fila2
  fill(98,214,242);
  circle(30,100,80);
  circle(100,105,80);
  circle(170,100,80);
  circle(240,105,80);
  circle(310,100,80);
  circle(380,105,80);
  //fila3
  fill(127,242,247);
  circle(30,160,80);
  circle(100,165,80);
  circle(170,160,80);
  circle(240,165,80);
  circle(310,160,80);
  circle(380,165,80);
  //fila4
  fill(149,250,224);
  circle(30,220,80);
  circle(100,225,80);
  circle(170,220,80);
  circle(240,225,80);
  circle(310,220,80);
  circle(380,225,80);
  //fila5
  fill(147,224,208);
  circle(30,280,80);
  circle(100,285,80);
  circle(170,280,80);
  circle(240,285,80);
  circle(310,280,80);
  circle(380,285,80);
  //fila6
  fill(158,245,208);
  circle(30,340,80);
  circle(100,345,80);
  circle(170,340,80);
  circle(240,345,80);
  circle(310,340,80);
  circle(380,345,80);
  //fila7
  fill(171,232,206);
  circle(30,380,80);
  circle(100,385,80);
  circle(170,380,80);
  circle(240,385,80);
  circle(310,380,80);
  circle(380,385,80);
  
   image (vaquita,400,0);
   
  //tortuga
  fill(165,115,22);
  noStroke();
  ellipse(50,180,100,50);
  triangle(130,20,120,140,80,140);
  triangle(80,340,130,220,80,220);
  ellipse(320,230,80,50);
  triangle(360,100,335,150,300,130);
  stroke(224,166,57);
  fill(129,92,22);
  ellipse(200,180,300,150);
  fill(144,106,34);
  ellipse(200,180,250,120);
  line(75,188,325,188);
  line(120,134,134,188);
  line(134,188,133,229);
  line(183,122,180,188);
  line(180,188,189,239);
  line(258,126,251,189);
  line(251,190,260,234);
  fill(182,247,204);
  circle(15,178,10);
  fill(0);
  circle(18,179,10);
  stroke(0);
  line(10,194,29,190);
}
