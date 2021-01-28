class Rope {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        // how tight, stiff it is
        stiffness: 1.2,
        length: 250,
      };
  
      this.pointB = pointB;
      // creating rope, not body. a constraint
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }
    attach(body) {
      this.rope.bodyA = body;
    }
  // not on ground
    fly() {
      this.rope.bodyA = null;
    }
  
    display() {
      if (this.rope.bodyA) {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
  
        stroke(48, 22, 8);
        strokeWeight(3);
        
        //making line
        line(pointB.x, pointB.y, pointA.x, pointA.y);
  
        pop();
      }
    }
  }
  