import { Assets } from '../../gfx/assets';
import { Creature } from './creature';
import { IncomeItem } from '../../income/income-item';

export class Bishop extends Creature {
  constructor(handler) {
    let zone = [TILE_SIZE * 4, TILE_SIZE * 2];

    super(handler, null, null, 24, 24, zone);

    this.a = Assets.gA('all');
    this.type = 'bishop';
    this.item = new IncomeItem(handler, this.type, 16, 600);
  }
}
