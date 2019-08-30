import { IncomeItem } from './income-item';

export class IncomeManager {
  constructor(handler) {
    this.handler = handler;
    this.canvas = document.querySelector('#income');
    this.energy = 0;
  }

  increment(value) {
    this.energy += value;
  }

  render() {
    this.canvas.innerHTML = 'Energy: ' + this.energy;
  }
}