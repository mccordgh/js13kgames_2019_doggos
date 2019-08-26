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
    g.strokeRect(x, y, TILE_WIDTH, TILE_HEIGHT);

    // g.fillRect(this.b.x + this.x - this.handler.getGameCamera().getxOffset(), this.b.y + this.y - this.handler.getGameCamera().getyOffset(), this.b.w, this.b.h);
    // g.myDrawImage(this.texture, x, y, TILE_WIDTH, TILE_HEIGHT);
  }

  getId() {
    return this.id;
  }
}
