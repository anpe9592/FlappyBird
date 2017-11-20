// w = 336
// h = 112

class WorldA {
    constructor(assetName, width, height, y, gameHeight, mass) {
        this.mass = mass;
        this.w = width;
        this.h = height;

        // create a new Sprite from an image patha
        this.asset = PIXI.Sprite.fromImage(assetName)

        this.asset.width = this.w;
        this.asset.height = this.h;

        // move the sprite to it's pos on the screen
        this.asset.y = y;

        if (this.mass === true) {
            this.body = Bodies.rectangle(this.asset.x, this.asset.y + 68, this.w, this.h, { isStatic: true});
        }
    }

    addAsset() {
        app.stage.addChild(this.asset);

        if (this.mass === true) {
            World.add(engine.world, this.body);   
        }
    }
}
