const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var block, ground,ball,slingShot;

function preload() {


}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(600,300,250,10);
    ground3 = new Ground(980,200,200,10);


    block1 = new Blockblue(520,273,30,40);
    block2 = new Blockblue(552,273,30,40);
    block3 = new Blockblue(584,273,30,40);
    block4 = new Blockblue(616,273,30,40);
    block5 = new Blockblue(648,273,30,40);
    block6 = new Blockblue(680,273,30,40);

    block7 = new Blockgreen(535,240,30,40);
    block8 = new Blockgreen(567,240,30,40);
    block9 = new Blockgreen(599,240,30,40);
    block10 = new Blockgreen(631,240,30,40);
    block11 = new Blockgreen(663,240,30,40);

    block12 = new Blockyellow(550,207,30,40);
    block13 = new Blockyellow(582,207,30,40);
    block14 = new Blockyellow(614,207,30,40);
    block15 = new Blockyellow(646,207,30,40);

    block16 = new Blockgrey(565,174,30,40);
    block17 = new Blockgrey(597.5,174,30,40);
    block18 = new Blockgrey(629,174,30,40);

    block19 = new Blockorange(597.5,141,30,40);


    block20 = new Blockblue(920,177,30,40);
    block21 = new Blockblue(953,177,30,40);
    block22 = new Blockblue(986,177,30,40);
    block23 = new Blockblue(1019,177,30,40);

    block24 = new Blockgrey(935,144,30,40);
    block25 = new Blockgrey(968,144,30,40);
    block26 = new Blockgrey(1001,144,30,40);

    block27 = new Blockgreen(968,111,30,40);

    ball = new Ball(150,200);

    slingshot = new Slingshot(ball.body,{x:150, y:200});

}

function draw()
{
 background("white");
 Engine.update(engine);
 strokeWeight(4);
 ground.display();
 ground2.display();
 ground3.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display()
 block8.display()
 block9.display()
 block10.display();
 block11.display();
 block12.display()
 block13.display()
 block14.display()
 block15.display()
 block16.display()
 block17.display()
 block18.display()
 block19.display()
 block20.display()
 block21.display()
 block22.display()
 block23.display()
 block24.display()
 block25.display()
 block26.display()
 block27.display()
 ball.display()
 slingshot.display()
}

function mouseDragged()
{
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
    slingshot.fly();
}