import { Animation } from './animation';
import { ImageLoader } from './image-loader';
import { SpriteSheet } from './sprite-sheet';

let assets = {}, PATH  = window.location.href.replace('index.html', '') + 'src/res/';
let SPRITE_HEIGHT = 16, SPRITE_WIDTH = 16;

export class Assets {
  constructor(name, path, width, height) {
    assets[name] = this;
    this.name = name;
    this.path = path;
    this.width = width;
    this.height = height;
    this.sheet = new SpriteSheet(ImageLoader.loadImage(this.path));
    this.animations = {};
  }

  //addAsset
  aA(name, animation) {
    this.animations[name] = animation;
  }

  getWidth() {
    return SPRITE_WIDTH;
  }

  getHeight() {
    return SPRITE_HEIGHT;
  }

  static gA(name) {
    return assets[name];
  }
}

//cropTile
let cT = (asset, x, y) => asset.sheet.crop(SPRITE_WIDTH * x, SPRITE_HEIGHT * y, SPRITE_WIDTH, SPRITE_HEIGHT);

let all = new Assets('tiles', PATH + "all.png", SPRITE_WIDTH, SPRITE_HEIGHT);
// tiles.path = cT(tiles, 1, 0);
// tiles.pathYellow = cT(tiles, 1, 1);
// tiles.wall = cT(tiles, 0, 0);
// tiles.wallYellow = cT(tiles, 0, 1);
// tiles.exit = cT(tiles, 1, 2);
// tiles.lantern = cT(tiles, 0, 2);

//buildAsset
let bA = (sprites, n, idlerow) => {
  let framespeed = 200, idleFrames = [];

  for (let i = 0; i < 2; i++) {
    idleFrames.push({
      frame: sprites.sheet.crop(sprites.width * i, sprites.height * idleFrames, sprites.width, sprites.height),
      speed: framespeed
    });
  }

  sprites.aA(n + "_idle", new Animation(idleFrames));
};

bA(all, 'tree', 0);
bA(all, 'factory', 1);
