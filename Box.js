class Box {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':2,
    }
    this.w = 30;
    this.h = 30;
    this.body = Bodies.rectangle(x, y, this.w, this.h, options);    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("red");
    rect(0, 0, 30, 30);
    pop();
  }
}