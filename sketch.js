var bgImage,stoneImg,cloudImg,cartImg;
var playerRun,playerIdle,playerJump,enemyRun,enemyIdle;

function preload(){
    bgImage = loadImage("bg/bgimg.jpeg");
    playerRun = loadAnimation("girl/Run (1).png","girl/Run (3).png","girl/Run (6).png","girl/Run (9).png","girl/Run (12).png","girl/Run (18).png");
    playerIdle = loadAnimation("girl/Idle (1).png");
    playerJump = loadAnimation("girl/Jump (5).png");
    enemyRun= loadAnimation("bg/e1.png","bg/e2.png","bg/e3.png","bg/e4.png","bg/e5.png");
    enemyIdle = loadAnimation("bg/e1.png");
    stoneImg = loadAnimation("bg/stone 1.png");
    cloudImg = loadImage("bg/cloud.png");
    cartImg = loadImage("bg/box.png");
  }

function setup() {
  createCanvas(displayWidth - 50,displayHeight - 190);
  
  bg = createSprite((displayWidth - 50)/2,(displayHeight - 190)/2,displayWidth - 50,displayHeight - 190);
  bg.addImage("bg",bgImage);
  bg.velocityX = -2;

  player = createSprite(50,displayHeight - 260);
  player.addAnimation("idle",playerIdle);
  player.addAnimation("run",playerRun);
  player.addAnimation("jump",playerJump);
  player.scale=0.3;
  //player.collide(ground);

  stone = createSprite(displayWidth - 140,(displayHeight - 190)/2);
  stone.addAnimation("stone",stoneImg);
  stone.velocityX = -2;
  stone.scale = 1;

  ground = createSprite((displayWidth - 50)/2,(displayHeight - 190),displayWidth - 50,10);

  if(frameCount % 100 === 0){
    enemy ();
  }
}

function draw() {
  background(0); 
  if(keyWentDown("RIGHT_ARROW")){
      player.velocityX = 2;
      player.changeAnimation("run");
  }
  if(keyWentUp("RIGHT_ARROW")){
    player.velocityX = 0;
    player.changeAnimation("idle");
} 
if(keyWentDown("LEFT_ARROW")){
  player.velocityX = -2;
  player.changeAnimation("run");
}
if(keyWentUp("LEFT_ARROW")){
  player.velocityX = 0;
  player.changeAnimation("idle");
}

if(keyWentDown("UP_ARROW")){
  player.velocityY = -4;
  player.changeAnimation("jump");
}
if(keyWentUp("UP_ARROW")){
  player.velocityY = 4;
  player.changeAnimation("idle");
}

if(frameCount % 300 === 0){
  box = createSprite(displayWidth-50,displayHeight - 235);
  box.addImage("box",cartImg);
  box.velocityX = -2;
  box.scale = 0.5;
}
  if(bg.x<0 ){
    bg.x=(displayWidth - 50)/2;

  }
  spawnClouds();
  drawSprites();
}

function enemy(){
  var en = createSprite(displayWidth-140,displayHeight - 255);
  en.addAnimation("enemy",enemyRun);
  en.velocityX = -2;
  en.scale = 0.15;
 // en.collide(stone);
 en.debug=true;
  en.collide(ground);
}

function spawnClouds(){
  if(frameCount % 200 === 0){
  clouds = createSprite(displayWidth + 50,random(0,150));
  clouds.addImage("cloud",cloudImg);
  clouds.velocityX = -2;
  clouds.scale = 0.5;
  }
}