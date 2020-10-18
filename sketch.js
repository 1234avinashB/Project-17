
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score;
var PLAY = 1, END = 0;
var gameState = PLAY;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  monkey = createSprite(50,400,10,10);
  monkey.addAnimation("runnning", monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(250,460,1200,2);
  ground.velocityX = -10;
  
}


function draw() {
  background("lightblue");
  if(gameState === PLAY){
    if(ground.x<0){
      ground.x = 250;
    }
  }
  if(gameState === END){
    
  }
  drawSprites();
}






