import { Display } from './display/display';
import { GameState } from './states/game-state';
import { Handler } from './handler';
import { State } from './states/state';

let running = false, g, display, handler, state, gameState;

export class Game {
  constructor(title, width, height){
    this.height = height;
    this.title = title;
    this.width = width;
  }

  run() {
    this.init();
    let fps = 60;
    let timePerTick = 1000 / fps;
    let delta = 0;
    let dt = 0;
    let now = Date.now();
    let lastTime = Date.now();
    let timer = 0;

    let loop = () => {
      if(running) {
        now = Date.now();
        delta = now - lastTime;
        timer += delta;
        lastTime = now;
      }

      if(timer >= timePerTick){
        dt = timer / 1000;
        this.tick(dt);
        this.render();
        timer = 0;
      }
      window.requestAnimationFrame(loop);
    };

    loop();

  }

  start() {
    if (running) return;
    running = true;
    this.run();
  }

  init() {
    handler = new Handler(this);
    display = new Display(this.title, this.width, this.height);
    g = display.getGraphics();
    state = new State();

    // soundManager = new SoundManager();
    // handler.setSM(soundManager);

    // mainMenu = new MainMenu(handler);
    // state.setState(mainMenu);
    gameState = new GameState(handler);
    state.setState(gameState);
  }

  tick(dt) {
    // keyManager.tick();
    if (state.getState() && !display.paused)
      state.getState().tick(dt);
  }

  render(){
    if (state.getState() && !display.paused)
      g.clearRect(0, 0, this.width, this.height);
      state.getState().render(g);
  }
}
