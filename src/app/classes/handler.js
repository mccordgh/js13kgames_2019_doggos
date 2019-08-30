import { IncomeManager } from "./income/income-manager";

let sm;

export class Handler {
  constructor(game) {
    this.game = game;
  }

  createIncomeManager() {
    this.incomeManager = new IncomeManager(this);

    return this.incomeManager;
  }

  getIncomeManager() {
    return this.incomeManager;
  }

  getWidth() {
    return this.game.width;
  }

  getHeight() {
    return this.game.height;
  }

  setWorld(world) {
    this.world = world;
  }

  getGame() {
    return this.game;
  }

  getSM(){
    return sm;
  }

  setSM(s) {
    sm = s;
  }
}
