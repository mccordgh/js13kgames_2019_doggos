import { Game } from './classes/game';

window.TILE_SIZE = 64;
window.GAME_WIDTH = 11;
window.GAME_HEIGHT = 9;

window.rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let game = new Game('IDLETIMES', TILE_SIZE * GAME_WIDTH, TILE_SIZE * GAME_HEIGHT);

game.start();
