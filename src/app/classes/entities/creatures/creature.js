import { Entity } from '../entity';

export class Creature extends Entity {
  constructor(handler, x, y, width = 96, height = 96, zone = null) {
    if (zone) {
      x = rndInt(zone[0], zone[0] + (TILE_SIZE - width))
      y = rndInt(zone[1], zone[1] + (TILE_SIZE - height))
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
