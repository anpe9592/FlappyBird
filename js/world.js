// w = 336
// h = 112

class WorldA {
    constructor(assetName, width, height, y, gameHeight) {
        this.w = width * 1.2;
        this.h = height * 1.2;

        // create a new Sprite from an image patha
        this.asset = PIXI.Sprite.fromImage(assetName)

        // center the sprite's anchor point
        this.asset.anchor.set(0.5);

        this.asset.width = this.w;
        this.asset.height = this.h;

        // move the sprite to it's pos on the screen
        this.asset.y = y;

        this.body = Bodies.rectangle(this.asset.x, this.asset.y, this.w, this.h, { isStatic: true});
    }

    addAsset() {
        app.stage.addChild(this.asset);
        World.add(engine.world, this.body);
    }
}
