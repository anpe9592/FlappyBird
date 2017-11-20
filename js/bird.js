class Bird {
    constructor() {
        this.birdWidth = 34 * 1.2;
        this.birdHeight = 24 * 1.2;

        // create a new Sprite from an image patha
        let tmp = [];
        for (let i = 0; i < 4; i++) { 
            let num = i + 1; 
            let tmpBird = PIXI.Texture.fromImage('assets/bird/bird-0'+ num +'.png'); 
            tmp.push(tmpBird); 
        } 

        this.bird = new PIXI.extras.AnimatedSprite(tmp); 

        // center the sprite's anchor point
        this.bird.anchor.set(0.5);

        this.bird.width = this.birdWidth;
        this.bird.height = this.birdHeight;

        // move the sprite to the center of the screen
        this.bird.x = app.renderer.width / 2;
        this.bird.y = app.renderer.height / 2;

        this.bird.animationSpeed = 0.1;
        this.bird.loop = false;

        this.body = Bodies.rectangle(this.bird.x, this.bird.y, this.birdWidth, this.birdHeight);
    }

    addBird() {
        app.stage.addChild(this.bird);
        World.add(engine.world, this.body);
    }

    removeBird() {
        app.stage.removeChild(this.bird);
        World.remove(engine.world, this.body);
    }

    bumpBird() {
        this.bird.play();
        this.bird.onComplete = () => { 
            this.bird.gotoAndStop(0);  
        }; 

        let b = this.body;
        let p = this.body.position;
        let f = { x: 0, y: -0.05 };
        Body.applyForce(b, p, f);
    }
}
