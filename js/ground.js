class Ground {
    constructor() {
        this.groundWidth = 336;
        this.groundHeight = 112;

        // create a new Sprite from an image patha
        this.ground = PIXI.Sprite.fromImage('assets/world/land.png')

        // center the sprite's anchor point
        this.ground.anchor.set(0.5);

        this.ground.width = this.groundWidth;
        this.ground.height = this.groundHeight;

        // move the sprite to the center of the screen
        //this.ground.x = app.renderer.width / 2;
        this.ground.y = gHeight;

        this.body = Bodies.rectangle(this.ground.x, this.ground.y, this.groundWidth, this.groundHeight, { isStatic: true});
    }

    addGround() {
        app.stage.addChild(this.ground);
        World.add(engine.world, this.body);
    }
}
