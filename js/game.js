class Game{
    constructor(ctx, player, background, obstacles){
        this.ctx = ctx
        this.player = player
        this.background = background
        this.obstacles = obstacles
        this.frameNumber = null
    }

    start(){
        this.init()
        this.play()
}

    init(){
        this.frameNumber = 0
        // this.sound.stop() etc..
        // background.init()
}

   play(){
    this.frameNumber += 1;
    this.move()
    this.checkCollisions()
    this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    this.draw()
    requestAnimationFrame( this.play.bind(this) )
}

  move(){
      this.background.move(this.frameNumber)
      this.obstacles.move(this.frameNumber)
      this.player.move(this.frameNumber)
  }

  draw(){
    this.background.draw(this.frameNumber)
    this.obstacles.draw(this.frameNumber)
    this.player.draw(this.frameNumber)
  }

  checkCollisions(){
      let collisions = false

      if(this.obstacles.obstacles.some( obstacle=> this.player.collidesWith(obstacle))) collisions = true

      if(this.player.exitsCanvas()) collisions = true

      return collisions
  }
  
}