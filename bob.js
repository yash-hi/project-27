class Bob {
    constructor(x,y,radius) {
    var options = {
    'isStatic':false,   
    'restitution':1.2,
    'friction':0.8,
    'density':1.0
    }
    
    this.radius=radius;
    this.body = Bodies.circle(x,y,radius,options);
    World.add(world, this.body);
    }
    display() {
    ellipseMode(RADIUS);
    stroke("black")
    strokeWeight(3)
    fill("yellow");
    ellipse(this.body.position.x, this.body.position.y, this.radius);
    }
};