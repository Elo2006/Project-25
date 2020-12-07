const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,dustbin,ground, dustbinImg;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;

	ball=new Ball(99, 90);
	ground=new Ground(600,380,1200,20);
	box1=new Dustbin(900,310,20,90);
	box2=new Dustbin(1100,310,20,90);
	box3=new Dustbin(1000,350,220,20);
	
	Engine.run(engine);
  
}


function draw() {
background(70);
 Engine.update(engine)
 ground.display();
  ball.display();
  box3.display();
  box1.display();
  box2.display();
  image(dustbinImg, 881, 120, 250, 250)
 
 
  
  
  drawSprites();
}
function keyPressed(){ 
	if(keyCode === UP_ARROW){
		 Body.applyForce(ball.body,ball.body.position,{x:750,y:-750}); 
		} 
	}





