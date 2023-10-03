class Ventana {
  constructor(x, y, ancho, alto, color) {
    this.x = x;          // Posición x de la ventana
    this.y = y;          // Posición y de la ventana
    this.ancho = ancho;  // Ancho de la ventana
    this.alto = alto;    // Alto de la ventana
    this.color = color;  // Color de la ventana
  }

  mostrar() {
    fill(this.color);
    rect(this.x, this.y, this.ancho, this.alto);
  }
}
