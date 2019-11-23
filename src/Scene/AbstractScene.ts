
import 'phaser';

export default class AbstractScene extends Phaser.Scene {

    public get gameWidth(): number {
        return this.sys.game.config.width as number;
    }

    public get gameHeight(): number {
        return this.sys.game.config.height as number;
    }

    protected setView(): void {
        // focus on center
        this.cameras.main.centerOn(0, 0);
    }
}
