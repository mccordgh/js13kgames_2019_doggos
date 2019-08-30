export class IncomeItem {
  constructor(handler, name, value, speed) {
    this.handler = handler;
    this.name = name;
    this.value = value;
    this.speed = speed;
    this.total = 0;
    this.l = Date.now();
    this.t = 0
  }

  tick() {
    this.t += Date.now() - this.l;
    this.l = Date.now();

    if (this.t >= this.speed){
      this.handler.getIncomeManager().increment(this.value);
      this.t = 0;
    }
  }

  increment() {
    this.total += this.value;
  }
}
