
import 'socket.io-client';

import Game from './Game';

let game: Phaser.Game = null;

function run(): void {
    game = new Game();
}

window.onload = run;
