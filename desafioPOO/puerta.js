class Puerta {
  constructor(x, y, ancho, alto, color) {
    this.x = x;          // Posición x de la puerta
    this.y = y;          // Posición y de la puerta
    this.ancho = ancho;  // Ancho de la puerta
    this.alto = alto;    // Alto de la puerta
    this.color = color;  // Color de la puerta
  }

  mostrar() {
    fill(this.color);
    rect(this.x, this.y, this.ancho, this.alto);
  }
}
