// import { Rectangle } from '../gfx/shapes/rectangle';

let handler, entities;

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
  constructor(_handler){
    handler = _handler;
    entities = [];
  }

  tick(dt) {
    entities.sort(compare);

    for(let i = 0; i < entities.length; i++){
      entities[i].tick(dt);
    }
  }

  render(g) {
    for(let i = 0; i < entities.length; i++){
      entities[i].tick(g);
    }
  }

  getHandler() {
    return handler;
  }

  getEntities() {
    return entities;
  }

  // getEntityTypeCount(type) {
  //   var types = entities.filter(e => e.type === type);

  //   return types.length;
  // }

  addEntity(e) {
    entities.push(e);
  }

  removeEntity(e) {
    let index = entities.indexOf(e);

    entities.splice(index, 1);
  }

  removeEntitiesByType(type) {
    entities = entities.filter(e => e.type === type);
  }
}
