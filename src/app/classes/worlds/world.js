import { EntityManager } from '../entities/entity-manager';
import { Tree } from '../entities/creatures/tree';
import { TileManager } from '../tiles/tile-manager';

export class World {
  constructor(handler) {
    this.tiles = [];
    this.handler = handler;
    this.entityManager = new EntityManager(handler);
    handler.setWorld(this);

    // this.levelManager = new LevelManager()
    // this.level = 1;
    // this.loadWorld();
    this.init();
  }

  changeLevel() {
    // this.level += 1;
    // this.tiles = [];

    // this.loadWorld();
    this.init();
  }

  init() {
    this.tiles = [];

    for (let y = 0; y < WORLD_SIZE; y++) {
      for (let x = 0; x < WORLD_SIZE; x++) {
        if (!this.tiles[x]) {
          this.tiles[x] = [];
        }

        this.tiles[x][y] = 1;
      }
    }

    this.entityManager.addEntity(new Tree(this.handler, 2, 2));

    // timeSpent = (tm * 60) + ts;
    // cleared = false;

    // let endX, endY;

    // if (this.level === 1) {
    //   endX = this.width - 2;
    //   endY = this.width - 2;
    // } else {
    //   endX = Math.random() < .5 ? 2 : this.width - 2;
    //   endY = Math.random() < .5 ? 2 : this.height - 2;

    //   if (endX === 2 && endY === 2) endX = this.width - 2;
    // }

    // this.addEvenSpreadOfDoggos(4);
  }

  // getWorldHeight() {
  //   return this.height;
  // }

  // getWorldWidth() {
  //   return this.width;
  // }

  // addEvenSpreadOfDoggos(spread) {
  //   for (let y = spread; y <= this.height; y += spread) {
  //     for (let x = spread; x <= this.width; x += spread) {
  //       if (this.height - y > 2 && this.width - x > 2) {
  //         this.entityManager.addEntity(new Doggo(this.handler, x * TILE_SIZE, y * TILE_SIZE));
  //       }
  //     }
  //   }
  // }

  // setPlayerSpawn(x, y) {
  //   this.entityManager.getPlayer().setX(x);
  //   this.entityManager.getPlayer().setY(y);
  // }

  // loadWorld() {
    // let level = this.levelManager.getLevel(this.level);

    // this.tiles = level.map;
  // }

  // plusTime() {
  //   tc++;

  //   if (tc === 60) {
  //     ts = ts === 0 ? 59 : ts -= 1;
  //     if (ts === 59) tm--;
  //     tc = 0;
  //   }

  //   if (ts <= 0 && tm <= 0) {
  //     let gameOver = new GameOver(this.handler);
  //     this.handler.getGame().getGameState().setState(gameOver);
  //   }
  // }

  tick(dt) {
    // if (this.death > 0) {
    //   if (this.death === 1) {
    //     this.entityManager.removeEntity(this.entityManager.getPlayer());
    //   } else if (this.death === 220) {
    //     let gameOver = new GameOver(this.handler);
    //     this.handler.getGame().getGameState().setState(gameOver);
    //   }
    //   this.death++;
    // } else {

    // if (!this.entityManager.getEntityTypeCount('doggo')) {
    //   this.changeLevel();
    // }

    this.entityManager.tick(dt);
      // this.plusTime();

      // if (!cleared && this.level !== 1 && timeSpent - (tm * 60 + ts) > 75) {
      //     this.entityManager.removeEntitiesByType('doggo');
      //     cleared = true;
      // }
    // }
  }

  render(g) {
    for (let y = 0; y < WORLD_SIZE; y++) {
      for (let x = 0; x < WORLD_SIZE; x++) {
        const tile = this.getTile(x, y);

        if (tile) {
          tile.render(g, x * TILE_SIZE, y * TILE_SIZE);
        }
      }
    }

    this.entityManager.render(g);
  }

  getTile(y, x) {
    try {
      return TileManager.getTiles()[this.tiles[x][y]];
    }
    catch(e) {
    }
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getEntityManager() {
    return this.entityManager;
  }
}
