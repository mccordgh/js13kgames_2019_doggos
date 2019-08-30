import { EntityManager } from '../entities/entity-manager';
import { Pylon } from '../entities/creatures/pylon';
import { Priest } from '../entities/creatures/priest';
import { Bishop } from '../entities/creatures/bishop';

export class World {
  constructor(handler) {
    this.handler = handler;
    this.entityManager = new EntityManager(handler);
    this.incomeManager = handler.createIncomeManager();

    this.init();
  }

  init() {
    this.entityManager.addEntity(new Pylon(this.handler, TILE_SIZE * 5, TILE_SIZE * 4));
    this.entityManager.addEntity(new Priest(this.handler));
    this.entityManager.addEntity(new Priest(this.handler));
    this.entityManager.addEntity(new Priest(this.handler));
    this.entityManager.addEntity(new Priest(this.handler));
    this.entityManager.addEntity(new Priest(this.handler));
    this.entityManager.addEntity(new Priest(this.handler));
    this.entityManager.addEntity(new Priest(this.handler));
    this.entityManager.addEntity(new Priest(this.handler));
    this.entityManager.addEntity(new Priest(this.handler));
    this.entityManager.addEntity(new Priest(this.handler));
    this.entityManager.addEntity(new Priest(this.handler));
    this.entityManager.addEntity(new Priest(this.handler));
    this.entityManager.addEntity(new Priest(this.handler));
    this.entityManager.addEntity(new Bishop(this.handler));
    this.entityManager.addEntity(new Bishop(this.handler));
    this.entityManager.addEntity(new Bishop(this.handler));
    this.entityManager.addEntity(new Bishop(this.handler));
    this.entityManager.addEntity(new Bishop(this.handler));
    this.entityManager.addEntity(new Bishop(this.handler));
    this.entityManager.addEntity(new Bishop(this.handler));
    this.entityManager.addEntity(new Bishop(this.handler));
    this.entityManager.addEntity(new Bishop(this.handler));
    this.entityManager.addEntity(new Bishop(this.handler));
    this.entityManager.addEntity(new Bishop(this.handler));
    this.entityManager.addEntity(new Bishop(this.handler));
    this.entityManager.addEntity(new Bishop(this.handler));
  }

  tick(dt) {
    this.entityManager.tick(dt);
  }

  render(g) {
    this.drawOutline(g);
    this.incomeManager.render(g);
    this.entityManager.render(g);
  }

  drawOutline(g) {
    for (let x = 0; x < GAME_WIDTH; x++) {
      for (let y = 0; y < GAME_HEIGHT; y++) {
        g.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
      }
    }
  }
}
