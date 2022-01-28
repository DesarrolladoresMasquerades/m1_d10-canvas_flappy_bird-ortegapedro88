
class Background {
    constructor(ctx) {
      this.ctx = ctx;
      this.backgroundFront = {
          img: new Image(),
          x: 0,
          y: 0,
          vx: -1,
          vy: 0
      }

      this.backgroundFar = {
          img: new Image(),
          x: 0,
          y: 0,
          vx: -1,
          vy: 0
      }
    }
  
    move(frameNumber) {
      console.log("Background move to frame number: ", frameNumber);
      this.backgroundFar.x += this.backgroundFar.vx
      this.backgroundFront.x += this.backgroundFront.vx

      if (this.backgroundFront.x + this.backgroundFront.width <= 0) this.backgroundFront.x = 0
      if (this.backgroundFar.x + this.backgroundFar.width <= 0) this.backgroundFar.x = 0
    }
  
    draw(frameNumber) {
      console.log("Background draw to frame number: ", frameNumber);
    }
  }

  