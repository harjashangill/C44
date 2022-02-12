var city
var player
var zombie
var zombieSprite
var playerSprite

function preload(){
  city = loadImage("images/city2.jpeg")
  player = loadImage("images/player.png")
  zombie = loadAnimation("images/zombie1.png","images/zombie2.png","images/zombie3.png","images/zombie4.png")
  }


function setup()
{
  createCanvas(windowWidth,windowHeight);
  playerSprite = createSprite(200,200,20,20)
  playerSprite.addImage(player)

  zombieSprite = createSprite(windowWidth/2+100,200,20,20)
  zombieSprite.addAnimation("walking", zombie)
  zombieSprite.scale = 1
  zombie.velocityX = -1
 


}


function draw() 
{
  background(city);
  drawSprites()

  if(keyDown(LEFT_ARROW)){
    playerSprite.y = playerSprite.y-5

  }
  if(keyDown(RIGHT_ARROW)){
    playerSprite.y = playerSprite.y+5

  }
}


