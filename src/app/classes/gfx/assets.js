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
let all = new Assets('all', PATH + "all.png", SPRITE_WIDTH, SPRITE_HEIGHT);

//buildAsset
let bA = (sprites, n, idlerow) => {
  let framespeed = 800, idleFrames = [];

  for (let i = 0; i < 2; i++) {
    idleFrames.push({
      frame: sprites.sheet.crop(sprites.width * i, sprites.height * idlerow, sprites.width, sprites.height),
      speed: framespeed
    });
  }

  sprites.aA(n + "_idle", new Animation(idleFrames));
};

bA(all, 'pylon', 0);
bA(all, 'priest', 1);
