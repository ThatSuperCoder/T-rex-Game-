var trex, trex_running, trex_collided,cloudImage;
var ground, invisibleGround, groundImage;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(190);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  spawnClouds();
  spawnObstacles();
  drawSprites();
}

function spawnClouds(){
  if(frameCount % 60 === 0){
  var cloud = createSprite(600,100,20,20);
  cloud.addImage(cloudImage);
  cloud.velocityX = -2;
  cloud.scale = 0.7;
  cloud.y = Math.round(random(80,120));
  cloud.lifetime = 600; 
  cloud.depth = trex.depth;
  trex.depth = trex.depth+1;
  }   
  }

function spawnObstacles(){
if(frameCount % 60 === 0 ){
var obstacles = createSprite(600,180,20,10);
obstacles.velocityX = -4;
var randomNumber = Math.round(random(1,6));
switch(randomNumber){
  case 1:obstacles.addImage(obstacle1);
  break;
  case 2:obstacles.addImage(obstacle2);
  break;
  case 3:obstacles.addImage(obstacle3);
  break;
  case 4:obstacles.addImage(obstacle4);
  break;
  case 5:obstacles.addImage(obstacle5);
  break;  
  case 6:obstacles.addImage(obstacle6);
  break;  
  default: break;
}
  obstacles.scale = 0.7;
}
}

  
  
