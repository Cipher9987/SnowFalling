const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snowFlake, snowFlake_Image;
var ground, ground_Image;
var player, player_Image;
var background_Image;
var kids, kids_Image;
var engine, world;


function preload(){

 ground_Image=loadImage("PinClipart.com_snow-days-clip-art_538963.png");
 background_Image=loadImage("winter-nightsky-2.png");
 player_Image=loadImage("pngegg (1).png");
 snowFlake_Image=loadImage("snow4.webp");
 kids_Image=loadImage("pngegg.png");
 
}

function setup() {

  createCanvas(1550,750);

  engine = Engine.create();
  world = engine.world;

  ground=createSprite(850,650,1550,50);
  ground.addImage(ground_Image);
  ground.scale=0.3;

  kids=createSprite(170,580,100,100);
  kids.addImage(kids_Image);
  kids.scale=0.07

  player=createSprite(1290,510,10,100);
  player.addImage(player_Image);
  player.scale=0.07
}

function draw() {
  background(background_Image);  
  if (frameCount% 30===0){
   snowFlakeCreation();
  }

  Engine.update(engine);


  drawSprites();
}

function snowFlakeCreation(){
 snowFlake = createSprite(Math.round(random(10,1550),20,30,30));
 snowFlake.velocityY = 5
 snowFlake.addImage(snowFlake_Image);
 snowFlake.scale = 0.3
}