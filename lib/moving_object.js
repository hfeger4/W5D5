const MovingObject = function (options){
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
};

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;

  ctx.beginPath();
  ctx.arc(
  this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
);
  ctx.fill();
};

MovingObject.prototype.move = function() {
  let x = (this.pos[0] + this.vel[0]);
  let y = (this.pos[1] + this.vel[1]);
  this.pos = [x,y];
};

let comet = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 5, color: "#44444"});
comet.draw();
