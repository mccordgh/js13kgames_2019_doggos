import { Entity } from '../entity';
// let n;

export class Creature extends Entity {
  constructor(handler, x, y) {
    super(handler, x, y,64, 64);
  }

  getCurrentAnimationFrame() {
    return this.a.animations[this.lA].getCurrentFrame();
  }
}
