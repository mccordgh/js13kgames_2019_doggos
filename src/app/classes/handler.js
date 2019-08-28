let sm;

export class Handler {
  constructor(game) {
    this.game = game;
  }

  getWidth() {
    return this.game.width;
  }

  getHeight() {
    return this.game.height;
  }

  getWorld() {
    return this.world;
  }

  setWorld(world) {
    this.world = world;
  }

  getGame() {
    return this.game;
  }

  getSM(){
    return sm;
  }

  setSM(s) {
    sm = s;
  }
}
