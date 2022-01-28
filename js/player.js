class Player {
  constructor(ctx) {
    this.ctx = ctx;
  }
  move(frameNumber) {
    console.log("player draw to frame number: ", frameNumber);
  }

  draw(frameNumber) {
    console.log("player draw to frame number: ", frameNumber);
  }

  collidesWith(object) {
    return (
      this.x < object.x + object.width &&
      this.x + this.width > object.x &&
      this.y < object.y + object.height &&
      this.y + this.height > object.y
    );
  }

  exitsCanvas(){
    return this.y > this.ctx.canvas.height || this.y + this.height < 0;
}

}
