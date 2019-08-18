import { EntityManager } from '../entities/entity-manager';
import { Clone } from '../entities/creatures/monsters/clone';
// import { Maze } from './maze-generator';
import { Player } from '../entities/creatures/player';
import { SpatialGrid } from '../utils/spatial-grid';
import { TileManager } from '../tiles/tile-manager';
import { Exit } from '../entities/statics/exit';
import { GameOver } from '../menus/game-over';
import { LevelManager } from './level-manager';

let yellowTilesDown = false, yellowWallInterval = 0, yellowWallIntervalMax = 3 * 60,
  timeSpent = 0, tm = 5, ts = 0, tc = 0, cleared, flashWarning = false, flashOn = true,
  flashCount = 0;

export class World {
  constructor(handler) {
    this.death = 0;
    this.width = null;
    this.height = null;
    this.tiles = [];
    this.handler = handler;
    handler.setWorld(this);
    this.entityManager = new EntityManager(handler, new Player(handler, 20, 20));
    this.spatialGrid = new SpatialGrid(this.handler.getWidth() * TILE_WIDTH, this.handler.getHeight() * TILE_HEIGHT, 64);
    this.levelManager = new LevelManager()
    this.level = 1;
    this.loadWorld();
    this.init();
  }

  changeLevel() {
    this.setPlayerSpawn(this.spawnX, this.spawnY);
    this.level += 1;
    this.tiles = [];
    flashWarning = false;
    yellowWallInterval = 0;

    this.entityManager.removeEntitiesByType('exit');
    this.entityManager.removeEntitiesByType('journal');
    this.entityManager.removeEntitiesByType('monster');

    this.loadWorld();
    this.init();
  }

  init() {
    timeSpent = (tm * 60) + ts;
    cleared = false;

    this.setPlayerSpawn(this.spawnX, this.spawnY);

    let endX, endY;

    if (this.level === 1) {
      endX = this.width - 2;
      endY = this.width - 2;
    } else {
      endX = Math.random() < .5 ? 2 : this.width - 2;
      endY = Math.random() < .5 ? 2 : this.height - 2;

      if (endX === 2 && endY === 2) endX = this.width - 2;
    }

    this.entityManager.addEntity(new Exit(this.handler,  endX * TILE_WIDTH, endY * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT));
  }

  getWorldHeight() {
    return this.height;
  }

  getWorldWidth() {
    return this.width;
  }

  addEvenSpreadOfMonsters(spread) {
    for (let y = spread; y <= this.height; y += spread) {
      for (let x = spread; x <= this.width; x += spread) {
        if (this.height - y > 2 && this.width - x > 2) {
          this.entityManager.addEntity(new Clone(this.handler, x * TILE_WIDTH, y * TILE_WIDTH));
        }
      }
    }
  }

  setPlayerSpawn(x, y) {
    this.entityManager.getPlayer().setX(x);
    this.entityManager.getPlayer().setY(y);
  }

  loadWorld() {
    let level = this.levelManager.getLevel(this.level);

    this.tiles = level.map;

    this.height = level.height;
    this.width = level.width;

    this.spawnX = level.spawnX * TILE_WIDTH;
    this.spawnY = level.spawnY * TILE_HEIGHT;
  }

  plusTime() {
    tc++;

    if (tc === 60) {
      ts = ts === 0 ? 59 : ts -= 1;
      if (ts === 59) tm--;
      tc = 0;
    }

    if (ts <= 0 && tm <= 0) {
      let gameOver = new GameOver(this.handler);
      this.handler.getGame().getGameState().setState(gameOver);
    }
  }

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
      this.entityManager.tick(dt);
      this.plusTime();

      // if (!cleared && this.level !== 1 && timeSpent - (tm * 60 + ts) > 75) {
      //     this.entityManager.removeEntitiesByType('monster');
      //     cleared = true;
      // }
    // }
  }

  render(g) {
    // if (this.death === 0) {

      // console.log({width: this.width, height: this.height, handler: this.handler, cam: this.handler.getGameCamera(),
        // xOffset: this.handler.getGameCamera().getxOffset(), yOffset: this.handler.getGameCamera().getyOffset(), TILE_WIDTH, TILE_HEIGHT})

      let xStart = parseInt(Math.max(0, this.handler.getGameCamera().getxOffset() / TILE_WIDTH));
      let xEnd = parseInt(Math.min(this.width, (this.handler.getGameCamera().getxOffset() + this.handler.getWidth()) / TILE_WIDTH + 1));
      let yStart = parseInt(Math.max(0, this.handler.getGameCamera().getyOffset() / TILE_HEIGHT));
      let yEnd = parseInt(Math.min(this.height, (this.handler.getGameCamera().getyOffset() + this.handler.getHeight()) / TILE_HEIGHT + 1));

      // console.log({xStart, xEnd, yStart, yEnd})
      // throw new Error();
      for (let y = yStart; y < yEnd; y++) {
        for (let x = xStart; x < xEnd; x++) {
          const tile = this.getTile(x, y);

          if (tile) {
            tile.render(g, x * TILE_WIDTH - this.handler.getGameCamera().getxOffset(), y * TILE_HEIGHT - this.handler.getGameCamera().getyOffset());
          } else {
            console.warn('TILE NOT FOUND AT ', y, ', ', x);
          }

          // if (flashWarning && (tile.id === 4 || tile.id === 2)) {
          //   flashCount++;

          //   if (flashCount < 20) {
          //     g.globalAlpha = 0.6;
          //     g.fillColor = 'white';
          //     g.fillRect(x * TILE_WIDTH - this.handler.getGameCamera().getxOffset(), y * TILE_HEIGHT - this.handler.getGameCamera().getyOffset(), TILE_WIDTH, TILE_HEIGHT);
          //   }

          //   if (flashCount < 40) {
          //     flashCount++;
          //   } else {
          //     flashCount = 0;
          //   }
          // }
        }
      }

      this.entityManager.render(g);

      // g.drawText({
      //   fillColor: 'white',
      //   text: (tm.toString().length === 1 ? '0' + tm : tm) + ':' + (ts.toString().length === 1 ? '0' + ts : ts),
      //   fontSize: 40,
      //   x: 174,
      //   y: 50,
      // });
    // }
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

  getSpatialGrid() {
    return this.spatialGrid;
  }
}
