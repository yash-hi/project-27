const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter = 40;

function preload()
{
}

function setup() {
createCanvas(800, 700);

engine = Engine.create();
world = engine.world;

roof = new Roof(400,60,600,40);

Object1 = new Bob(300,400,30,0);
Object2 = new Bob(350,400,30,0);
Object3 = new Bob(400,400,30,0);
Object4 = new Bob(450,400,30,0);
Object5 = new Bob(500,400,30,0);

rope1 = new Rope(Object1.body,roof.body,-bobDiameter*2,0);
rope2 = new Rope(Object2.body,roof.body,-bobDiameter*1,0);
rope3 = new Rope(Object3.body,roof.body,1,1);
rope4 = new Rope(Object4.body,roof.body,bobDiameter*1,0);
rope5 = new Rope(Object5.body,roof.body,bobDiameter*2,0);
	
Engine.run(engine);
}


function draw() {
rectMode(CENTER);
background("skyBlue");
  
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
roof.display();
Object1.display();
Object2.display();
Object3.display();
Object4.display();
Object5.display();

drawSprites();
}

function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(Object1.body,Object1.body.position,{x: -200, y: -200});
}
}

