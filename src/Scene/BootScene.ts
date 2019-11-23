
import 'phaser';

import AbstractScene from './AbstractScene';

export default class BootScene extends AbstractScene {

    public create(): void {
        console.log("boot.create ...");
        this.scene.start("menu");
    }
}