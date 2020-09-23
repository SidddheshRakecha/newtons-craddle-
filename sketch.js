var ball1;
var ball2;
var ball3;
var ball4;
var sling;
var roof;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	
	
	ball1 = new Ball(200,150,50,50);

	ball2 = new Ball(280,150,50,50);
	
	ball3 = new Ball(360,150,50,50);
	
	ball4 = new Ball(440,150,50,50);

	roof = new Ground(399,37,8000,10);

	rope1 = new Sling(ball4.body,roof.body,-150,150);

	rope2 = new Sling(ball3.body,roof.body,-50,150);

	rope3 = new Sling(ball2.body,roof.body,50,150);

	rope4 = new Sling(ball1.body,roof.body,150,150);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  roof.display();

  drawSprites();
 
}



