
function preload(){
shipAnimation = loadAnimation("ship-1.png","ship-3.png","ship-4.png","ship-2.png")
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(1300,1300);
  bg = createSprite(2100,300,4200,400)
  bg.addImage("sea",seaImage)
  
  bg.x = bg.width/2

bg.velocityX = -5
  ship = createSprite(300,300);
  ship.addAnimation("ship",shipAnimation)
  ship.scale = 0.5
}

function draw() {
  background("white");
  console.log(bg.width)
  if(bg.x<0){
    bg.x = bg.width/2;
  }
 drawSprites();

}