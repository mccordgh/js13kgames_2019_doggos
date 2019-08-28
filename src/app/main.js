import { Game } from './classes/game';

window.TILE_SIZE = 96;
window.WORLD_SIZE = 8;

let game = new Game('Doggo Detective', 96 * WORLD_SIZE, 96 * WORLD_SIZE);

game.start();
