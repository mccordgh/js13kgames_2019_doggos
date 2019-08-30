import { Assets } from '../../gfx/assets';
import { Creature } from './creature';

export class Player extends Creature {
  constructor(handler, x, y){
    super(handler, x, y);
    this.a = Assets.gA('all');
    this.x = x;
    this.y = y;
  }

  render(g) {
    g.myDrawImage(this.getCurrentAnimationFrame(), this.x, this.y, TILE_SIZE, TILE_SIZE);
  }
}
