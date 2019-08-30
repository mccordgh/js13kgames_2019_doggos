import { Assets } from '../../gfx/assets';
import { Creature } from './creature';
import { IncomeItem } from '../../income/income-item';

export class Pylon extends Creature {
  constructor(handler, x, y){
    super(handler, x, y);

    this.a = Assets.gA('all');
    this.type = 'pylon';
    this.item = new IncomeItem(handler, this.type, 1, 600);
  }
}
