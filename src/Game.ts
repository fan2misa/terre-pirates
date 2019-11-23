
import 'phaser';
import 'socket.io-client';

import Config from "./Config";

import MenuScene from './Scene/MenuScene';
import GameScene from './Scene/GameScene';
import BootScene from "./Scene/BootScene";

export default class Game extends Phaser.Game {

    constructor() {
        super({
            type: Phaser.AUTO,
            width: Config.GAME_WIDTH,
            height: Config.GAME_HEIGHT,
            title: "Terre Pirates",
        });

        this.scene.add('boot', BootScene);
        this.scene.add('menu', MenuScene);
        this.scene.add('game', GameScene);

        io.connect('http://localhost:3000/');

        this.scene.start('boot');
    }
}
