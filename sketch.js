
//make a ground, ball, button to apply force, function to apply force to ball when button pressed
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var button


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(90,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  button = createImg("button.jpg")
  button.position(20,20)
  button.size(40,40)
  button.mouseClicked(force)



}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 
}

function force(){
 Matter.Body.applyForce(ball,{x:0,y:0},{x:.01,y:-.02})
}