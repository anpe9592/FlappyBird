class Bird {
    constructor() {
        this.birdWidth = 34 * 1.2;
        this.birdHeight = 24 * 1.2;

        // create a new Sprite from an image patha
        this.bird = PIXI.Sprite.fromImage('assets/bird/bird-01.png')

        // center the sprite's anchor point
        this.bird.anchor.set(0.5);

        this.bird.width = this.birdWidth;
        this.bird.height = this.birdHeight;

        // move the sprite to the center of the screen
        this.bird.x = app.renderer.width / 2;
        this.bird.y = app.renderer.height / 2;

        this.body = Bodies.rectangle(this.bird.x, this.bird.y, this.birdWidth, this.birdHeight);
    }

    addBird() {
        app.stage.addChild(this.bird);
        World.add(engine.world, this.body);
    }

    bumpBird() {
        let b = this.body;
        let p = this.body.position;
        let f = { x: 0, y: -0.05 };
        Body.applyForce(b, p, f);
    }
}
