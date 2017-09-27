class Bird {
    constructor() {
        // create a new Sprite from an image patha
        this.bird = PIXI.Sprite.fromImage('assets/bird/bird-01.png')

        // center the sprite's anchor point
        this.bird.anchor.set(0.5);

        // move the sprite to the center of the screen
        this.bird.x = app.renderer.width / 2;
        this.bird.y = app.renderer.height / 2;
    }

    addBird() {
        app.stage.addChild(this.bird);
    }
}
