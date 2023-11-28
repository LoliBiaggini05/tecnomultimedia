class aventura {
  constructor() {
    this.estado = 0;
    this.fondo=[];
    this.historia=[];
    this.mipreload();
    this.i=0;
    this.opcion= new botones(100, 50);
    this.j= new juego();
  }

  backg() {
    image( this.fondo[this.i], 0, 0 );
  }

  mipreload() {
    for ( this.i = 0; this.i < 14; this.i++ ) {
      this.fondo.push( loadImage('data/p'+this.i+'.png') );
    }
    for ( this.i = 0; this.i < 13; this.i++ ) {
      this.historia[0]="Caperucita es enviada por su madre a casa de su abuelita, su madre le recomienda no ir por el bosque para no entrar en peligro, pero cuando llega a allí no se decide por cual camino tomar.";
      this.historia[1]="Caperucita toma el camino corto por el bosque, en el cual se encuentra con el lobo. Este le pregunta hacia donde se dirige tan contenta y caperucita decide comentarle cual es su destino. ";
      this.historia[2]="Caperucita sigue su camino dejando atrás al amable lobo y se encuentra con unas bellas flores que sabe que le gustarán mucho a su abuelita.";
      this.historia[3]="Caperutita queda atrás lastimada y el lobo toma la delantera llegando primero a casa de la abuelita. Llama a la puerta y ésta cuando abre y lo vé se desmaya del susto. Lobo aprovecha para esconderla antes de que llegue caperucita.";
      this.historia[4]="El lobo se apresura para disfrazarse de la abuelita y se mete en la cama a esperar a Caperucita. Cuando ésta llega a la pieza, le cuesta reconocer que alguien tan peludo y enorme sea su dulce abuela.";
      this.historia[5]="El lobo finalmente salta de la cama y se debora a Caperucita junto a la pobre abuelita que nunca la vió llegar a su bella nieta. ";
      this.historia[6]="Caperucita toma el camino largo por la pradera, donde se encuentra con Alicia, su amiga de la infancia. Alicia, se encontraba correteando junto a su conejo blanco y al verla le pregunta si quiere pasear con ella.";
      this.historia[7]="Alicia y Caperucita se sientan a charlar en la pradera ya que hace un tiempo que no se veían, Alicia le cuenta de sus aventuras en el pais de las maravillas y el sol empieza a caer. ";
      this.historia[8]="Caperucita sigue su camino y apresura el paso ya que se hace tarde, logra llegar a casa de su abuelita sana y salva.";
      this.historia[9]="Una vez en casa de la abuelita, ven como el lobo intenta ingresar en la casa, cuando las tiene acorraladas allí, llega justo el leñador a rescatarlas y el lobo sale corriendo espantado. ";
      this.historia[10]="Ya es de noche y Caperucita no ha llegado aún a casa de su abuelita, entonces ésta preocupada, sale apresurada a buscarla ya que tenía miedo de que le haya pasado algo a su bella nieta. ";
      this.historia[11]="La abuelita finalmente encuentra a Caperucita en la pradera, la reta y le pregunta porque ha tardado tanto. Caperucita intenta calmar a su abuelita contandole la hermosa aventura que tuvo junto a Alicia. ";
      this.historia[12]="Caperucita Roja  - Charles Perrault Trabajo Practico N6 Tecno Multimedial I Comisión 2 Dolores Biaggini";
    }
  }
  estados() {
    if ( this.estado == 0 ) {
      this.j.reinicioj();
      image( this.fondo[0], 0, 0 );
      this.opcion.dibujobt(370, 500, "HISTORIA");
      this.opcion.dibujobt(170, 500, "CREDITOS");
    } else if ( this.estado == 1 ) {
      image( this.fondo[1], 0, 0 );
      this.pantalla( 0, 5, 5, 580, 110);
      this.opcion.dibujobt(150, 200, "BOSQUE");
      this.opcion.dibujobt(120, 280, "PRADERA");
    } else if ( this.estado == 2 ) {
      image( this.fondo[2], 0, 0 );
      this.pantalla( 1, 5, 5, 580, 120);
      this.opcion.dibujobt(470, 500, "SIGUIENTE");
    } else if ( this.estado == 3 ) {
      this.j.backgj();
      this.j.iniciar();
      this.j.dibujar();
      this.ganapier();
    } else if ( this.estado == 4 ) {
      image( this.fondo[4], 0, 0 )
        this.pantalla(3, 5, 5, 580, 120);
      this.opcion.dibujobt(470, 500, "SIGUIENTE");
    } else if ( this.estado == 5 ) {
      image( this.fondo[5], 0, 0 )
        this.pantalla(4, 5, 5, 580, 120);
      this.opcion.dibujobt(470, 500, "SIGUIENTE");
    } else if ( this.estado == 6 ) {
      image( this.fondo[6], 0, 0 )
        this.pantalla(5, 5, 5, 580, 120);
      this.opcion.dibujobt(470, 500, "FIN");
    } else if ( this.estado == 7 ) {
      image( this.fondo[7], 0, 0 )
        this.pantalla(6, 5, 5, 580, 120);
      this.opcion.dibujobt(400, 500, "SEGUIR JUNTAS");
      this.opcion.dibujobt(200, 500, "SEGUIR SOLA");
    } else if ( this.estado == 8 ) {
      image( this.fondo[8], 0, 0 )
        this.pantalla(7, 5, 5, 580, 120);
      this.opcion.dibujobt(400, 500, "IR CON ELLA");
      this.opcion.dibujobt(200, 500, "SEPARARSE");
    } else if ( this.estado == 9 ) {
      image( this.fondo[9], 0, 0 )
        this.pantalla(8, 5, 5, 580, 120);
      this.opcion.dibujobt(470, 500, "SIGUIENTE");
    } else if ( this.estado == 10 ) {
      image( this.fondo[10], 0, 0 )
        this.pantalla(9, 5, 5, 580, 120);
      this.opcion.dibujobt(470, 500, "FIN");
    } else if ( this.estado == 11 ) {
      image( this.fondo[11], 0, 0 )
        this.pantalla(10, 5, 5, 580, 120);
      this.opcion.dibujobt(470, 500, "SIGUIENTE");
    } else if ( this.estado == 12 ) {
      image( this.fondo[12], 0, 0 )
        this.pantalla(11, 5, 5, 580, 120);
      this.opcion.dibujobt(470, 500, "FIN");
    } else if ( this.estado == 13 ) {
      image( this.fondo[13], 0, 0 )
        this.pantalla(12, 5, 200, 580, 120);
      this.opcion.dibujobt(470, 500, "VOLVER");
    }
  }
  pantalla(i, x, y, lon, alto) {
    textSize(18);
    fill(0);
    text(this.historia[i], x, y, lon, alto);
  }

  ganapier() {  //conexion con clase juego
    if ( this.j.getEstado()==4 ) {
      this.estado = 4;
    } else if ( this.j.getEstado()==9 ) {
      this.estado=9;
    }
  }

  andabt() {
    this.estado= this.opcion.press(this.estado);
  }
}
