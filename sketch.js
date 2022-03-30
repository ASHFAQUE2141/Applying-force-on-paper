
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var wall1;
var wall2;


function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		
		restitution:1.0,
	}

	ground = new Ground(600,400,1500,20);
	wall1 = new Ground(600,350,20,100);
	wall2 = new Ground(700,350,20,100);

	

	ball = Bodies.circle(450,200,25,ball_options);
	World.add(world, ball);

	upButton = createImg('up.png');
	upButton.position(20,30);
	upButton.size(50,50);
	upButton.mouseClicked(vForce);

	RightButton = createImg('right.png');
	RightButton.position(220,30);
	RightButton.size(50,50);
	RightButton.mouseClicked(hForce);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  
  ground.display(600,400,1500,20);
  wall1.display(600,350,20,100);
  wall2.display(700,350,20,100);
  
  ellipse(ball.position.x, ball.position.y, 25);
  
  
 
}

function hForce()
{
  Matter.Body.applyForce(ball, {x:0, y:0}, {x: 0.05, y: 0});
}

function vForce()
{
  Matter.Body.applyForce(ball, {x: 0, y:0}, {x: 0, y: -0.05});
}