import { Assets } from '../gfx/assets';
import { Path } from './paths/path';
import { Wall } from './walls/wall';

let assets = Assets.gA("tiles");
let tiles = [];

tiles[0] = new Path(0);
tiles[1] = new Wall(1);

 export class TileManager {

  static getAssets() {
    return assets;
  }

  static getTiles() {
    return tiles;
  }
}

