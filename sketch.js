
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

  mango1=new mango(1000,100,30);
  mango2=new mango(1050,120,30);
  mango3=new mango(1100,140,30);
  mango4=new mango(1150,160,30);
  mango5=new mango(1200,180,30);
  mango6=new mango(1250,200,30);
  mango7=new mango(1300,220,30);
  mango8=new mango(1350,290,30);
  mango9=new mango(1400,340,30);
  mango10=new mango(900,390,30);
  mango11=new mango(950,70,30);
  mango12=new mango(1450,370,30);

 // create 12 mango objects

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
}

function draw() {

  background(230);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  //Engine.update(engine)
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
// display 12 mangoes here
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
mango11.display();
mango12.display();
  stoneObj.display();

  groundObject.display();
  launcherObject.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
 // refer pdf and type other detectollision here till mangoes 12
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
// refer pdf and initiate ASCII code 32 so that when you press space bar the stone will be attached to the laucher body
if(keyCode === 32) {
  Matter.Body.setPosition(stoneObj.Body, {x:235, y:420})
  launcherObject.attach(stoneObj.Body);
  }
}

  function detectollision(lstone,lmango){
  //refer pdf  Additional Goal 1: point 1
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r) {
Matter.Body.setStatic(lmango.body,false)

  }
  }