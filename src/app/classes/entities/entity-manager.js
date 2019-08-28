import { Rectangle } from '../gfx/shapes/rectangle';

let handler, player, entities;

let compare = (a, b) => {
  let aY = a.getY();
  let bY = b.getY();
  let aH = a.getHeight();
  let bH = b.getHeight();
  if (aY + aH === bY + bH)  return 0;
  if (aY + aH < bY + bH) return -1;
  return 1;
};

export class EntityManager {
  constructor(_handler, _player){
    handler = _handler;
    player = _player;
    // entities = new Array(player);
    entities = [];
  }

  tick(dt) {
    entities.sort(compare);
    for(let i = 0; i < entities.length; i++){
      let e = entities[i];
      e.tick(dt);
    }
  }

  render(g) {
    entities.forEach((e) => e.render(g));
  }

  getPlayer() {
    return player;
  }

  getHandler() {
    return handler;
  }

  getEntities() {
    return entities;
  }

  getEntityTypeCount(type) {
    var types = entities.filter(e => e.type === type);

    return types.length;
  }

  addEntity(e) {
    entities.push(e);
    handler.getWorld().getSpatialGrid().insert(new Rectangle(e.x + e.b.x, e.y + e.b.y, e.b.w, e.b.h), e);
  }

  removeEntity(e) {
    let index = entities.indexOf(e);

		handler.getWorld().getSpatialGrid().remove(new Rectangle(e.x + e.b.x, e.y + e.b.y, e.b.w, e.b.h), e);

    entities.splice(index, 1);
  }

  removeEntitiesByType(type) {
    entities = entities.filter((e) => {
      if (e.type === type) {
        handler.getWorld().getSpatialGrid().remove(new Rectangle(e.x + e.b.x, e.y + e.b.y, e.b.w, e.b.h), e);
      } else {
        return e;
      }
    });
  }
}
