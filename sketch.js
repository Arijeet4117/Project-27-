
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	bob1=new bob(260,400);
	bob2=new bob(320,400);
	bob3=new bob(380,400);
	bob4=new bob(440,400);
	bob5=new bob(500,400);

	roof=new Roof();

	chain1=new Chain(bob1.body,roof.body,-100,0);
	chain2=new Chain(bob2.body,roof.body,-40,0);
	chain3=new Chain(bob3.body,roof.body,20,0);
	chain4=new Chain(bob4.body,roof.body,80,0);
	chain5=new Chain(bob5.body,roof.body,140,0);
	
  
}


function draw() {
  background("yellow");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.hello();

  chain1.disp();
  chain2.disp();
  chain3.disp();
  chain4.disp();
  chain5.disp();

 
}
function keyPressed(){

	if(keyDown(UP_ARROW)){
		Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100})
	}
}


