const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var engine,world;


function setup() {
  createCanvas(800,800);
 
  engine = Engine.create();
	world = engine.world;

  stand1=new Stand(680,500,200,20)
  stand2=new Stand(350,550,200,20)
 polygon1=new Polygon(100,550,20,20)
  box1=new Box(660,500,20,10)

ground1=new Ground(width/2,670,width,20)
Engine.run(engine);

 
}

function draw() {
 
  background(0);  
  
  
  
 
 drawSprites();
ground1.display();
stand1.display();
stand2.display();
polygon1.display();
box1.display();
}

