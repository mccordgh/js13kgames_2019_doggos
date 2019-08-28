import { Assets } from '../../gfx/assets';
import { Creature } from './creature';

export class Player extends Creature {
  constructor(handler, x, y){
    super(handler, x, y);
    this.a = Assets.gA('tiles');
    this.x = x;
    this.y = y;
    this.speed = 200;
    this.type = 'player';
    this.lA = 'pwalk_right';
  }

  tick(dt) {
    // this.xMove = this.yMove = 0;

    super.tick(dt);

    this.move();
  }

  render(g) {
    g.myDrawImage(this.getCurrentAnimationFrame(), this.x, this.y, TILE_SIZE, TILE_SIZE);
  }
}
