export class Animation {
  constructor(frames){
    this.f = frames;
    this.i = 0;
    this.l = Date.now();
    this.t = 0;
  }

  tick() {
    this.t += Date.now() - this.l;
    this.l = Date.now();

    if (this.t >= this.s){
      this.i++;
      this.t = 0;
      if (this.i >= this.f.length)
        this.i = 0;
    }
  }

  getCurrentFrame() {
    this.s = this.f[this.i].speed;
    return this.f[this.i].frame;
  }
}
