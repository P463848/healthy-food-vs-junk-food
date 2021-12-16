var player1, player1Image;
var gardenImage;
var healthyFood, healthyGroup,score=0,lives=3;
var rand1;
var appleImage,broccoliImage,carrotImage,peaImage,strawberryImage,tomatoImage;
var junkFood, junkGroup; 
var rand1;
var burgerImage,chipsImage,chocolateImage,cupcakeImage,pizzaImage,popcornImage;
var gameState = "play";
function preload(){
player1Image=loadImage("player.png");
gardenImage= loadImage("garden.jpg");
appleImage= loadImage("apple.png");
broccoliImage=loadImage("broccoli.png");
carrotImage=loadImage("carrot.png");
peaImage=loadImage("pea.jpg");
strawberryImage= loadImage("strawberry.jpg");
tomatoImage = loadImage("tomato.jpg");

burgerImage= loadImage("burger.png");
chipsImage= loadImage("chips.png");
chocolateImage= loadImage("chocolate.jpg");
cupcakeImage=loadImage("cupcake.png");
pizzaImage= loadImage("pizza.png");
popcornImage= loadImage("popcorn.png");

}

function setup() {
  createCanvas(800,800);
  player1=new player(400,200,20,20);
  healthyGroup=createGroup() ;
  junkGroup= new Group();
}

function draw() {
  background(gardenImage); 
  textSize(20);
  text ("score:"+score,20,20);
  text ("lives:"+lives,20,40);
  if(gameState== "play"){
  health();
  JunkFood();
  if(keyDown("up")){
    player1.spt.y=player1.spt.y-5;
  }
  if(keyDown("down")){
    player1.spt.y=player1.spt.y+5;
  }
   if(keyDown("left")){
     player1.spt.x=player1.spt.x-5;
   }
   if(keyDown("right")){
     player1.spt.x=player1.spt.x+5;
   }
   if(healthyGroup.isTouching(player1.spt)){
     score=score+1;
     healthyGroup.destroyEach()
   }
   if(junkGroup.isTouching(player1.spt)){
     lives=lives-1;
     junkGroup.destroyEach()
   }
   if(score== 5){
     gameState="win"
   }
   if(lives==0){
     gameState="end"
   }
  }
  if(gameState== "win"){
    textSize(30);
    text("you are healthy",350,400)
  }
  if(gameState== "end"){
    textSize(30);
    text("you are not healthy",330,400)
  }
  drawSprites();
}

function health(){
  if(frameCount%105==0){
    healthyFood=createSprite(400,400,20,20);
    healthyFood.y=Math.round(random(50,750));
    healthyFood.x=Math.round(random(50,750));
    healthyFood.lifetime=150;
    healthyGroup.add(healthyFood);
    rand1=Math.round(random(1,6));
    switch(rand1){
      case 1: healthyFood.addImage(appleImage);
      healthyFood.scale=0.2;
      break;
      case 2: healthyFood.addImage(broccoliImage);
      healthyFood.scale=0.15;
      break;
      case 3: healthyFood.addImage(carrotImage);
      healthyFood.scale=0.5;
      break;
      case 4: healthyFood.addImage(peaImage);
      healthyFood.scale=0.2;
      break;
      case 5: healthyFood.addImage(strawberryImage);
      healthyFood.scale=0.5;
      break;
      case 6: healthyFood.addImage(tomatoImage);
      healthyFood.scale=0.2;
      break;
    }

      
    }
  }
      
  function JunkFood(){
    if(frameCount%90==0){
      junkFood=createSprite(400,400,20,20);
      junkFood.y=Math.round(random(50,750));
      junkFood.x=Math.round(random(50,750));
      junkFood.lifetime=150;
      junkGroup.add(junkFood);
      rand1=Math.round(random(1,6))  
      switch(rand1){
        case 1: junkFood.addImage(burgerImage);
        junkFood.scale=0.15;
        break;
        case 2: junkFood.addImage(chipsImage);
        junkFood.scale=0.2;
        break;
        case 3: junkFood.addImage(chocolateImage);
        junkFood.scale=0.2;
        break;
        case 4: junkFood.addImage(cupcakeImage);
        junkFood.scale=0.2;
        break;
        case 5: junkFood.addImage(pizzaImage);
        junkFood.scale=0.2;
        break;
        case 6: junkFood.addImage(popcornImage);
        junkFood.scale=0.09;
        break;
      }
  
  }
}
