
import 'phaser';

import AbstractScene from './AbstractScene';

export default class GameScene extends AbstractScene {

    preload() {
        console.log('game.preload ...');
    }

    public create(): void {
        console.log('game.create ...');
    }

    public update(): void {
        console.log('game.update ...');

        this.cameras.main.backgroundColor = Phaser.Display.Color.ValueToColor(0x808080);

        // focus on 0, 0
        this.setView();

        // red circle
        let graphics = this.add.graphics();
        graphics.fillStyle(0xff0000);
        graphics.fillCircle(0, 0, 50);
    }
}