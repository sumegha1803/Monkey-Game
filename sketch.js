
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score=0 
var ground
var survivalTime=0

function preload(){

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  bananaGroup= new Group();
  obstacleGroup= new Group();
  
}



function setup() {
  createCanvas(600,400);
  
  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground= createSprite(0,400,600,10);
 
}



function draw() {
background("lightblue");
  
  if(keyDown("space") && monkey.y>=350) {
    monkey.velocityY=-10;
  }
  monkey.velocityY= monkey.velocityY+0.4;
  monkey.collide(ground);
  
  ground.velocityX = -7 
 ground.x = ground.width/2;
    console.log(ground.x);
  
  if(World.frameCount%200===0) {
     fruits();
     }
  
  if(World.frameCount%300===0) {
    obstacles();
  }
  
  if(monkey.isTouching(bananaGroup)) {
    bananaGroup.destroyEach();
    score=score+1
       
}
  
  
  drawSprites();
  
  stroke("white");
  textSize(10);
  fill("white")
  text("score-"+score,500,50);
  
  stroke("black");
  textSize(10);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate())
  text("Survival time-"+survivalTime,100,50);
  
  
  obstacleGroup.setLifetimeEach(-1);
  bananaGroup.setLifetimeEach(-1);
}



function fruits() {
  banana= createSprite(600,Math.round(random(180,250)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-4;
  bananaGroup.add(banana);
  
}

function obstacles() {
obstacle= createSprite(600,400,10,10);
obstacle.addImage(obstacleImage);
  obstacle.scale=0.3;
  obstacle.velocityX=-3;
  obstacleGroup.add(obstacle);

}
                

