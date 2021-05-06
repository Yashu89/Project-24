
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var paper
var l, r, d

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(150,350,20)

    ground = new Ground(400,600,800,20)

	l = new Dustbin(690,580,150,20)
	r = new Dustbin(610,540,20,100)
	d = new Dustbin(770,540,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display()
  paper.display()

  l.display()
  r.display()
  d.display()
}

function keyPressed(){
   if(keyCode === UP_ARROW){
  
    Matter.Body.applyForce(paper.body, paper.body.position,{x:38,y:-38})
  }

}
