class Ball {
    constructor(x, y, width, height, angle) {
      var options = { 
        density: 1, 
        // friction when ball will hit object
        frictionAir: 0.005};
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      // to create a circle or oval shape 
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }