const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5;
var hero,monster,rope,ground;

var gameState = "hit";


function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 350, 800, 20);

  hero = new Hero(300,200,100);
  rope = new Rope(hero.body, { x: 300, y: 200});
  monster = new Monster(650,300,200);

  box1 = new Box(500, 100);
  box2 = new Box(500,120);
  box3 = new Box(500,140);
  box4 = new Box(500,160);
  box5 = new Box(500,180);
  


}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();


  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  if(gameState !== "fly"){
    Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY});
  }
}


function mouseReleased(){
  rope.fly();
  gameState = "fly";
}
