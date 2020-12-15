const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world

function preload(){

}
function setup(){
  var  canvas = createCanvas(1200,600)
    engine = Engine.create();
    world = engine.world;

    // shooter,polygon
    polygon = new Polygon(150,200,20);

    shooter = new Slingshot(polygon.body,{x:220, y:292})

//PART ONE

    //level three
    block = new Box(930,235,30,40)
    block2 = new Box(960,235,30,40)
    block3 = new Box(990,235,30,40)
    block4 = new Box(1020,235,30,40)
    block5 = new Box(1050,235,30,40)
  
    //level two
     block11 = new Box(960,195,30,40)
     block12 = new Box(990,195,30,40)
     block13 = new Box(1020,195,30,40)

     //top
     block20 = new Box(990,155,30,40)

     //PART TWO

     //level 4
    
     bl1 = new Box(468,449,30,40)
     bl2 = new Box(498,449,30,40)
     bl3 = new Box(528,449,30,40)
     bl4 = new Box(558,449,30,40)
     bl5 = new Box(588,449,30,40)
     bl6 = new Box(618,449,30,40)
     bl7 = new Box(648,449,30,40)

     //level 3
     fill("lightpink")
     bl8  = new Box(498,409,30,40)
     bl9  = new Box(528,409,30,40)
     bl10 = new Box(558,409,30,40)
     bl11 = new Box(588,409,30,40)
     bl12 = new Box(618,409,30,40)
  
     //level 2
     fill("magenta")
     bl13  = new Box(528,369,30,40)
     bl14 = new Box(558,369,30,40)
     bl15 = new Box(588,369,30,40)
     
     //top
     bl16 = new Box(558,329,30,40)


     //GROUNDS
     ground  = new Ground(600,height,1200,20);
     ground1 = new Ground(558,459,250,10);
     ground2 = new Ground(990,270,200,10);
}

function draw(){
    background(105,31,149)
    fill("white")
    textSize(30)
    text("PRESS SPACE TO GET ONE MORE CHANCE",150,100)
   Engine.update(engine);
  // LEVEL THREE
  fill("lightblue")
   block.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();

   //LEVEL TWO
   fill("lightpink")
   block11.display()
   block12.display()
   block13.display()

  //TOP
  fill("white")
   block20.display()

   //PART TWO
   //LEVEL 4
   fill("lightblue")
    bl1.display();
     bl2.display();
     bl3.display();
     bl4.display();
     bl5.display();
     bl6.display();
     bl7.display();

     //LEVEL 3
     fill("lightpink")
     bl8.display();
     bl9.display();
     bl10.display();
     bl11.display();
     bl12.display();

     //LEVEL 2
     fill("yellow")
     bl13.display();
     bl14.display();
     bl15.display();
    
     //TOP
     fill("white")
     bl16.display();
    
  //GROUNDS
  ground.display();
 ground1.display();
  ground2.display();

  shooter.display();
  polygon.display();
}

function mouseDragged()  {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}

function mouseReleased()  {
 shooter.fly()
  

}

function keyPressed()  {
  if(keyCode===32)  {
    Matter.Body.setPosition(polygon.body,{x:220, y:292})
   shooter.attach(polygon.body);

  }

}