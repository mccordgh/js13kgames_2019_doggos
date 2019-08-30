import { Assets } from '../../gfx/assets';
import { Creature } from './creature';
import { IncomeItem } from '../../income/income-item';

export class Bishop extends Creature {
  constructor(handler) {
    let zone = [TILE_SIZE * 6, TILE_SIZE * 4];

    super(handler, null, null, 20, 20, zone);

    this.a = Assets.gA('all');
    this.type = 'bishop';
    this.item = new IncomeItem(handler, this.type, 100, 600);
  }
}
