export class Entity {
  constructor(handler, x, y) {
    this.x = x * TILE_SIZE;
    this.y = y * TILE_SIZE;
    this.width = TILE_SIZE;
    this.height = TILE_SIZE;
    this.handler = handler;
  }

  tick() {
    //
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }
}
