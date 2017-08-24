import { Assets } from '../../../gfx/assets';
import { Creature } from '../creature';

const TILE_WIDTH = 64, TILE_HEIGHT = 64;

export class Ghost extends Creature {
  constructor(_handler, _x, _y) {
    super(_handler, _x, _y, TILE_WIDTH, TILE_HEIGHT);
    this.assets = Assets.getAssets("creatures");
    this.x = _x;
    this.y = _y;
    this.bounds.x = 6;
    this.bounds.y = 6;
    this.bounds.width = TILE_WIDTH - (this.bounds.x * 2);
    this.bounds.height = TILE_HEIGHT - (this.bounds.y * 2);
    this.type = 'monster';
    this.targetType = 'player';
  }

  tick(_dt) {
      // if (this.dead === 8){
      //   this.dead = 666;
      //   this.handler.getWorld().getEntityManager().removeEntity(this);
      //   this.handler.getWorld().getSpatialGrid().remove(new Rectangle(this.x + this.bounds.x, this.y + this.bounds.y, this.bounds.width, this.bounds.height), this);
      // }
    this.xMove = 0;
    this.yMove = 0;

    // this.target = this.handler.getWorld().getEntityManager().getSingleEntity(this.targetType);
    // if (this.target) {
    //   if(this.target.y < this.y) {
    //     if (this.target.y - this.y > 10 || this.target.y - this.y < -10)
    //       this.yMove = -this.speed * _dt;
    //   }
    //   if (this.target.y > this.y) {
    //     if (this.target.y - this.y > 10 || this.target.y - this.y < -10)
    //       this.yMove = this.speed * _dt;
    //   }
    //   if(this.target.x < this.x) {
    //     if (this.target.x - this.x > 10 || this.target.x - this.x < -10)
    //       this.xMove = -this.speed * _dt;
    //   }
    //   if (this.target.x > this.x) {
    //     if (this.target.x - this.x > 10 || this.target.x - this.x < -10)
    //       this.xMove = this.speed * _dt;
    //   }
    // }
    // if (this.dead === 0)
    //   this.move();

    // if (this.yMove < 0)
    //   this.assets.animations.walk_up.tick();
    // if (this.yMove > 0)
    //   this.assets.animations.walk_down.tick();
    // if (this.xMove > 0)
    //   this.assets.animations.walk_right.tick();
    // if (this.xMove < 0)
    //   this.assets.animations.walk_left.tick();

    // this.assets.animations.idle.tick();
  }

  render(_g){
    _g.myDrawImage(this.getCurrentAnimationFrame(), this.x - this.handler.getGameCamera().getxOffset(), this.y - this.handler.getGameCamera().getyOffset(), this.width, this.height);
    // this.healthbar.render(_g);
    // ****** DRAW BOUNDING BOX DON'T DELETE!!
    // _g.fillStyle = "blue";
    // _g.fillRect(this.bounds.x + this.x - this.handler.getGameCamera().getxOffset(), this.bounds.y + this.y - this.handler.getGameCamera().getyOffset(), this.bounds.width, this.bounds.height);
    // ****** DRAW BOUNDING BOX DON'T DELETE!!
  }

  getInput(_dt) {

  }

  getCurrentAnimationFrame() {
    // if (this.health <= 0){
    //   this.assets.animations.death.tick();
    //   return this.assets.animations.death.getCurrentFrame();
    // }
    // if (this.yMove < 0){
    //   return this.assets.animations.walk_up.getCurrentFrame();
    // } else if (this.yMove > 0){
    //   return this.assets.animations.walk_down.getCurrentFrame();
    // } else if (this.xMove < 0){
    //   return this.assets.animations.walk_left.getCurrentFrame();
    // } else if (this.xMove > 0){
    //   return this.assets.animations.walk_right.getCurrentFrame();
    // } else {
      return this.assets.ghostDown;
    // }
  }

  // getHealthBar: function() {
  //   return this.healthbar;
  // }
}
