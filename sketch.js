
function preload(){
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path = createSprite(200,200)
path.image(pathImg)
path.velocity = 4;
path.scale=1.2;

if (path.y > 400){
  path.y = height/2;

runner = createSprite(100,200)
runner.animation(Runner-1.png,Runner-2.png)
runner.velocity = 2;
runner.scale = 0.5
}


}

function draw() {
  background(0);


}
