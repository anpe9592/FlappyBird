class Pipe {
  constructor (up, y) {
    this.pipeWidth = 30 * 1.6
    this.pipeHeight = 160 * 1.6

    let yPos = 0

    // create a new Sprite from an image patha
    if (up === true) {
      this.pipe = PIXI.Sprite.fromImage('assets/world/PipeUp.png')
      yPos = getRandomArbitrary(282, 457)
      // yPos = 457;
    } else {
      this.pipe = PIXI.Sprite.fromImage('assets/world/PipeDown.png')
      yPos = y - 400
    }

    // center the sprite's anchor point
    this.pipe.anchor.set(0.5)

    this.pipe.width = this.pipeWidth
    this.pipe.height = this.pipeHeight

    // moves the sprite on the screen
    this.pipe.x = app.renderer.width
    this.pipe.y = yPos

    this.body = Bodies.rectangle(this.pipe.x, this.pipe.y, this.pipeWidth, this.pipeHeight, { isStatic: true})
  }

  addPipe () {
    app.stage.addChild(this.pipe)
    World.add(engine.world, this.body)
  }

  removePipe () {
    app.stage.removeChild(this.pipe)
    World.remove(engine.world, this.body)
  }

  getPipeY () {
    return this.pipe.y
  }
}

function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min
}
