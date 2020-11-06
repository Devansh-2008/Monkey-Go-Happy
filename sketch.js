
var monkey , monkey_running;
var banana ,bananaImage, stone, stoneImage;
var bananaGroup, stoneGroup;
var survivalTime;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("stone.png");
 
}



function setup() {
  createCanvas(600,600);

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  console.log(ground.x)
  
  bananaGroup = createGroup();
  stoneGroup = createGroup();
  
  score = 0;
  survivalTime = 0;
}


function draw() {

  background("white");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
  
  if(ground.x < 600) {
     ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y>=200) {
    monkey.velocityY = -8;
  }
  
  monkey.velocityY = monkey.velocityY + 0.4;
  
  monkey.collide(ground);
  drawSprites();
  food();
  obstacle();
}

function food() {
  if(frameCount % 80 === 0) {
  var banana = createSprite(100,200,20,20);
    banana.x = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.2;
    banana.lifetime = 100;
    bananaGroup.add(banana);
  }
  
}

function obstacle() {
  if(frameCount % 300 === 0) {
    var stone = createSprite(100,325,20,20);
    stone.x = Math.round(random(120,200));
    stone.addImage(stoneImage);
    stone.velocityX = -4;
    stone.scale = 0.1;
   stone.lifetime = 100
    stoneGroup.add(stone);
  }
  
  
  
}


