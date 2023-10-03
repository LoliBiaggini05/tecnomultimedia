class Casa {
  constructor(x, y) {
    this.x = x;                 // Posición x de la casa
    this.y = y;                 // Posición y de la casa
    this.altura = 150;          // Altura de la casa
    this.ancho = this.altura * 1.5; // Ancho de la casa, relacionado con la altura
    this.colorCasa = color(255,0,0); // Color de la casa (blanco por defecto)
    this.colorTecho = color(150, 75, 0); // Color del techo (marrón por defecto)
  }

  mostrar() {
    // Dibuja el cuerpo de la casa
    fill(this.colorCasa);
    rect(this.x, this.y, this.ancho, this.altura);
    // Calcula las coordenadas para el techo
    let x1 = this.x - 20;
    let y1 = this.y;
    let x2 = this.x + this.ancho / 2;
    let y2 = this.y - 50;
    let x3 = this.x + this.ancho + 20;
    let y3 = this.y;

    // Crea el objeto Techo y muestra el techo
    let techo = new Techo(x1, y1, x2, y2, x3, y3, this.colorTecho);
    techo.mostrar();

 // Crea y muestra una ventana en la casa
    let ventana = new Ventana(this.x + 30, this.y + 30, 40, 40, color(0, 0, 255));
    ventana.mostrar();

    // Crea y muestra una puerta en la casa
    let puerta = new Puerta(this.x + this.ancho - 80, this.y + 80, 40, 70, color(139, 69, 19));
    puerta.mostrar();
  }
}
