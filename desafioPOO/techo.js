class Techo {
  constructor(x1, y1, x2, y2, x3, y3, color) {
    this.x1 = x1;        // Coordenada x del vértice 1 del techo
    this.y1 = y1;        // Coordenada y del vértice 1 del techo
    this.x2 = x2;        // Coordenada x del vértice 2 del techo
    this.y2 = y2;        // Coordenada y del vértice 2 del techo
    this.x3 = x3;        // Coordenada x del vértice 3 del techo
    this.y3 = y3;        // Coordenada y del vértice 3 del techo
    this.color = color;  // Color del techo
  }

  mostrar() {
    fill(this.color);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
}
