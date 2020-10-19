var box
var box2
function setup() {
  createCanvas(800,800);
 box= createSprite(400, 200, 50, 50);
box.shapeColor="red"
 box2= createSprite(350,200,60,70)
 box2.shapeColor="blue"
}

function draw() {
  background(0,0,0);  
  drawSprites();
}