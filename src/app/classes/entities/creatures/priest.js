import { Assets } from '../../gfx/assets';
import { Creature } from './creature';
import { IncomeItem } from '../../income/income-item';

export class Priest extends Creature {
  constructor(handler) {
    let zone = [TILE_SIZE * 4, TILE_SIZE * 4];

    super(handler, null, null, 16, 16, zone);

    this.a = Assets.gA('all');
    this.type = 'priest';
    this.item = new IncomeItem(handler, this.type, 10, 60);
  }



}
