import { Assets } from '../gfx/assets';

export class Tile {
  constructor(texture, id) {
    this.isSolid = false;
    this.texture = texture;
    this.id = id;
    this.a = Assets.gA("tiles");
  }

  render(g, x, y) {
    g.strokeStyle = this.id == 0 ? 'green': 'white';
    g.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
  }

  getId() {
    return this.id;
  }
}
