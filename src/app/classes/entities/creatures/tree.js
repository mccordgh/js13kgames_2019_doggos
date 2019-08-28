import { Assets } from '../../gfx/assets';
import { Creature } from './creature';

export class Tree extends Creature {
  constructor(handler, x, y){
    super(handler, x, y);
    this.a = Assets.gA('tiles');
    this.type = 'tree';
    this.lA = 'tree_idle';
  }

  tick(dt) {
    super.tick(dt);

    this.move();
  }

  render(g) {
    g.myDrawImage(this.getCurrentAnimationFrame(), this.x, this.y, TILE_SIZE, TILE_SIZE);
  }
}
