var PLAY=1;
var END=0;
var gameState=PLAY

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,ground,gameOver

var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
 
}



function setup() {
  
  
 monkey=createSprite(60,490,0,0)
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.2;

  ground=createSprite(80,550,900,10);
  ground.x=ground.width/2
  ground.velocityX=-5;
 
  invisibleground=createSprite(60,550,0,0)
  invisibleground.visible=false
  
  obstacleGroup=new Group();
bananaGroup=new Group();
  
  
  
}  


function draw() {
 createCanvas(600,600)
background("pink");
  fill("white");
  textSize(20);
  
  

    
   if(gameState===PLAY){
    fruits();
     spawnObstacles();
     
     text("survival Time:"+survivalTime,70,50)
     
      if(ground.x<0){
    ground.x=ground.width/2
      }
     
        monkey.velocityY= monkey.velocityY+0.2 
        
     if(keyDown("space")&& monkey.y >=410) {
        monkey.velocityY = -14;
       
 monkey.velocityY= monkey.velocityY+0.1
     
    }
   }  
  
  
    if(gameState===END){
  
     monkey.destroy();
      
      fill("black");
      textSize(60);
     text("GAME OVER",50,300)
     
   ground.destroy();
   }
   
  
 
  

  monkey.velocityY= monkey.velocityY+0.2
  
 
    monkey.collide(ground)
    
   
  if(monkey.isTouching(bananaGroup)){
    survivalTime=survivalTime+1;
  }

if(obstacleGroup.isTouching(monkey)){
    survivalTime=0;
     gameState=END
     ground.velocityX=0;
    bananaGroup.destroyEach();
  text("gameOver",300,300)
}
  
 
 
drawSprites();

  
}

  

function fruits(){
  if(frameCount%300===0){
    banana=createSprite(600,100,20,20)
    banana.addImage(bananaImage)
    banana.y=Math.round(random(80,130))
    bananaGroup.add(banana);
    banana.scale=0.1;
    banana.velocityX=-2
  }
}
function spawnObstacles(){
  if(frameCount%200===0){
    obstacle = createSprite(500,520,10,40);
   obstacle.velocityX = -2
   obstacleGroup.add(obstacle)
  obstacle.addImage(obstaceImage)
  obstacle.scale=0.1
 
  
  }  
}

  
  







