//prettyfy: ctrl/cmd + t

var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";

//eyes
var ex; //eye x position
var ey; //eye y position
var eyeSize;  //how big the eye is

//light
var r = 255;
var g = 255;
var b = 0;



function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(0);
  if (gameState=="L1") {
    levelOne();
  }
  if (gameState=="L2") {
    levelTwo();
  }
  if (gameState=="L3") {
    levelThree();
  }
  fill(255);
  text(("Score: " + score), width/2, 40);
} // end draw


function levelOne() {
  fill(255);
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx+ballSize, bally, mouseX, mouseY);
  if (distToBall <ballSize) {
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if (score>5) {
    gameState= "L2"; // call level 2
  }

  //ellipse(ballx, bally, ballSize, ballSize);
  //line(ballx + ballSize, bally, mouseX, mouseY);
  noStroke();
  fill("yellow");
  circle(mouseX, mouseY, 6 * ballSize);
  drawEye(ballx, bally, ballSize);
  drawEye(ballx + 2 * ballSize, bally, ballSize);
} // end level one

function levelTwo() {
  background(0,25,51);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx+ballSize, bally, mouseX, mouseY);
  if (distToBall <ballSize) {
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if (score>10) {
    // lvel 3
    gameState = "L3";
  }

  //ellipse(ballx, bally, ballSize, ballSize);
  noStroke();
  fill("yellow");
  circle(mouseX, mouseY, 5 * ballSize);
  drawEvasiveEye(ballx, bally, ballSize);
  drawEvasiveEye(ballx + 2 * ballSize, bally, ballSize);
} // end level two

function levelThree() {
  background(51,0,25);
  fill(255);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx+ballSize, bally, mouseX, mouseY);
  if (distToBall <ballSize) {
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
    r = r-10;
    g = g-10;
  }
  if (score>15) {
    // level 4
    //   gameState = "L4";
  }

  //ellipse(ballx, bally, ballSize, ballSize);
  noStroke();
  fill(r,g,b);
  circle(mouseX, mouseY, 4 * ballSize);
  //drawEvasiveEye(ballx, bally, ballSize);
  drawEvasiveEye(ballx + random(6) * ballSize, bally, ballSize);
} // end level thre

function drawEye(ex, ey, eyeSize) {
  var dy = mouseY - ey;
  var dx = mouseX - ex;
  var orientation = atan2(dy, dx); //atan2 = Arc tangent of two numbers, ATAN2(y,x) returns the arc tangent of the two numbers x and y.

  push();
  translate(ex, ey);

  //white
  fill(255);
  strokeWeight(1);
  stroke(0);
  circle(0, 0, eyeSize);
  rotate(orientation);

  //pupil
  fill(0);
  circle(eyeSize / 4, 0, eyeSize / 2);
  pop();
}

function drawEvasiveEye(ex, ey, eyeSize) {
  var dy = mouseY - ey;
  var dx = mouseX - ex;
  var orientation = atan2(dy, dx); //atan2 = Arc tangent of two numbers, ATAN2(y,x) returns the arc tangent of the two numbers x and y.

  push();
  translate(ex, ey);

  //white
  fill(255);
  stroke(0);
  strokeWeight(1);
  circle(0, 0, eyeSize);
  rotate(orientation + PI);

  //pupil
  fill(0);
  circle(eyeSize / 4, 0, eyeSize / 2);
  pop();
}
