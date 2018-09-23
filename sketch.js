var img;

function preload(){
  img = loadImage('liam.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(44,48,52);
  image(img, 50, 50, 80, 80);
  imageMode(CENTER)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(44,48,52);
  fill(70, 130, 180);
  image(img, mouseX, mouseY, 50, 50);
}