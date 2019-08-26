import { Game } from './classes/game';

window.TILE_HEIGHT = 32;
window.TILE_WIDTH = 32;

let game = new Game('Doggo Detective', 1024, 704);

game.start();
