class Box {
    constructor(x, y, width, height) {
      var options = {
          // bounciness
          'restitution':0.8,
          'friction':1.0,
          // how much space object takes
          'density':0.04,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      // push- code below only applied to this class
      push();
      // to change the 0 of the axis to a given x and y position.
      translate(pos.x, pos.y);
      // what angle it will rotate at if falling down
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      //ending the function
      pop();
    }
  }