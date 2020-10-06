var fixedRect, moveRect, fixedRect2;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(100,200,30,50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = 3;
 
  moveRect = createSprite(700,200,30,30);
  moveRect.shapeColor = "green";
  
  fixedRect2 = createSprite(400,200,30,50);
  fixedRect2.shapeColor = "yellow";

  moveRect2 = createSprite(700,200,30,30);
  moveRect2.shapeColor = "red";
  moveRect2.velocityX = -3;
 
}

function draw() {
  background(0);  
  moveRect.x=mouseX;  
  moveRect.y=mouseY;

  

  if(isTouching(fixedRect2,moveRect)){
    fixedRect2.shapeColor = "red";
    moveRect.shapeColor = "red";
  }
  else{
    fixedRect2.shapeColor = "yellow";
    moveRect.shapeColor = "green";   
  }
   
  bounceOff(fixedRect,moveRect2);

  drawSprites();
}

