const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const player = new Player(ctx);
const background = new Background(ctx);
const obstacles = new Obstacles(ctx);
const game = new Game(ctx, player, background, obstacles);

const startButton = document.getElementById("start-button");

document.getElementById("start-button").onclick = function () {
  startButton.remove();
  game.start();
};
