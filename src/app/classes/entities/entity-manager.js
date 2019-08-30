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
      let e = entities[i];

      e.tick(dt);

      if (e.item) {
        e.item.tick();
      }
    }
  }

  render(g) {
    for(let i = 0; i < entities.length; i++){
      entities[i].render(g);
    }
  }

  getHandler() {
    return handler;
  }

  getEntities() {
    return entities;
  }

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
