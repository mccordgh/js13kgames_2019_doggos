import { Entity } from '../entity';

export class Creature extends Entity {
  constructor(handler, x, y, width = 64, height = 64, zone = null) {
    if (zone) {
      x = rndInt(zone[0], zone[0] + (TILE_SIZE - 12))
      y = rndInt(zone[1], zone[1] + (TILE_SIZE - 12))
    }

    super(handler, x, y, width, height);
  }

  getCurrentAnimationFrame() {
    return this.a.animations[this.type + '_idle'].getCurrentFrame();
  }

  tick() {
    this.a.animations[this.type + '_idle'].tick();
  }

  render(g) {
    g.myDrawImage(this.getCurrentAnimationFrame(), this.x, this.y, this.width, this.height);
  }
}
