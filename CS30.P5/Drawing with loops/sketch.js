// Drawing with loops 1
// Carter Stevenson
// February 27th 2024
// Using loops and arrays to creete some visualizations
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let xPos, yPos;  //decleration only... 

function setup() {
  createCanvas(400, 600);
  xPos = []; yPos = [];
  initWithLoops();
  // xPos = [width*0.05, width*0.05, width*0.95, width*0.95];
  // yPos = [height*0.05, height*0.95, height*0.5, height*0.95];
}

function initWithLoops(){
  //lay down some intial circles, but using loops to do so
  for(let x = 10; x < width; x += 20){
    xPos.push(x); 
    yPos.push(0); 
  }
}

function draw() {
  background(220);
  cornersAndMouseLoop();
}

function mousePressed(){
  // this calls automatically on a mousePress
  xPos.push(mouseX)
  yPos.push(mouseY)
}

function cornersAndMouseLoop(){
  // a hopefully slighlty more elegant version.. 
  let i = 0;
  while(i < xPos.length){
    let x = xPos[i];
    let y = yPos[i];
    circle(x,y, 20, 20);
    i++;
    line(mouseX, mouseY, x, y);
  }
  circle(mouseX, mouseY, 20);
}

function cornersAndMouse(){
  //draw some circles near each of the four corners and connect some lines from there to the
  // mouse position 
  fill (255);
  circle(width*0.05, height*0.05, 20);
  circle(width*0.05, height*0.95, 20);
  circle(width*0.95, height*0.05, 20);
  circle(width*0.95, height*0.95, 20);
  //lines
  line(width*0.05, height*0.05, mouseX, mouseY);
  line(width*0.05, height*0.95, mouseX, mouseY);
  line(width*0.95, width*0.05, mouseX, mouseY);
  line(width*0.95, height*0.95, mouseX, mouseY);

}