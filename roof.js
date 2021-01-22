class Roof {
    constructor(x,y,width,height) {
    var options = {
    isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
    rectMode(CENTER);
    stroke("blue")
    strokeWeight(4)
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
    }
    };