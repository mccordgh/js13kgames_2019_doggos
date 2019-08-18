import { Ending } from '../menus/ending';
import { GameOver } from '../menus/game-over';
import { Rectangle } from '../gfx/shapes/rectangle';

export class Entity {
  constructor(handler, x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.handler = handler;
    this.b = new Rectangle(0, 0, width, height);
    this.moveThrough = false;
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

  getCollisionBounds(xOffset, yOffset) {
    return new Rectangle(parseInt(this.x + this.b.x + xOffset),
      parseInt(this.y + this.b.y + yOffset),
      this.b.w, this.b.h);
  }

  checkEntityCollisions(xOffset, yOffset) {
    let candidates =  this.handler.getWorld().getSpatialGrid().retrieve(new Rectangle(this.x + this.b.x + xOffset, this.y + this.b.y + yOffset, this.b.w, this.b.h), this);

    for(let i = 0; i < candidates.length; i++) {
      let e = candidates[i];
        if (e.moveThrough) return false;

        if (e.getCollisionBounds(0, 0).intersects(this.getCollisionBounds(xOffset, yOffset))) {
            this.checkForCollisionEvents(this, e);

            return true;
        }
    }
    return false;
  }

  checkForCollisionEvents(e1, e2) {
    if (this.checkCollidingTypes(e1, e2, 'monster', 'monster')) return;

    let h = this.handler;
    let hG = h.getGame();
    let hW = h.getWorld();

    if (this.checkCollidingTypes(e1, e2, 'player', 'exit')) {
      if (hW.level >= 4) {

        let ending = new Ending(this.handler);
        hG.getGameState().setState(ending);
      }

      hW.changeLevel();
      return;
    }

    if (this.checkCollidingTypes(e1, e2, 'player', 'monster')) {
      this.handler.getWorld().death = 1;
    }
  }

  checkCollidingTypes(e1, e2, type1, type2) {
    return ((e1.type === type1 && e2.type === type2) || (e1.type === type2 && e2.type === type1));
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
