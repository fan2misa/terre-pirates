
import 'phaser';

export default class MenuScene extends Phaser.Scene {

    preload() {
        console.log('menu.preload ...');
    }

    create() {
        console.log('menu.create ...');
    }

    update() {
        console.log('menu.update ...');
        this.scene.start('game')
    }
}
