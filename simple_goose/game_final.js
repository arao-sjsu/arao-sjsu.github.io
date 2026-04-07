
var ballx = 300; // width/2 ?
var bally = 300;
var ballSize = 40;
var score =0;
var img1, img2, beginImg;
var  c; // our text color as a variable, set in setup
var gameState ="begin";

function preload() {

  img1 = loadImage('https://arao-sjsu.github.io/images/carrot.png'); //target
  img2 = loadImage('https://arao-sjsu.github.io/images/goose.png'); //user
  beginImg = loadImage('https://arao-sjsu.github.io/images/pond.jpg');
}

function setup() {
  createCanvas(600, 600);
  let c =color(200, 100, 100); //text color
  fill(c);
  textAlign(CENTER);
  textSize(20); 
} // end of setup


function draw() {
  
if(gameState =="begin"){
  background(beginImg);
  beginGame();
}
  
if(gameState =="L1"){
  background(220);
  levelOne();
}
if(gameState =="L2"){
    background(135);
  levelTwo();
}
if(gameState =="L3"){
    background(50);
  levelThree();
}
if(gameState =="Win"){
    background(50);
  win();
}
  text(("Score: " + score), width/2, 40);
} // end of draw

function beginGame(){
 if (mouseIsPressed === true) {
  gameState="L1";  
 } // end of if mousIsPressed
} // end of beginGame


function levelOne(){
  text("level 1", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
  } // end if
  if (score>=5){
    gameState= "L2";
  }
  line(ballx+20, bally+20, mouseX, mouseY);
  image(img1, ballx, bally, 40, 40);
  image(img2, mouseX-20, mouseY-20, 100, 100);
} // end of level 1


function levelTwo(){
  text("level 2", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
  } // end if
  if (score>=10){
       gameState= "L3";
  }
   image(img1, ballx, bally, 30, 30);
   image(img2, mouseX-20, mouseY-20, 100, 100);
} // end of level 2

function levelThree(){
  text("level 3", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
    ballSize=ballSize -1;
  } // end if
  if (score>=35){
       gameState= "Win";
  }
      image(img1, ballx, bally, 20, 20);
      image(img2, mouseX-20, mouseY-20, 100, 100);
} // end level 3

function win(){
  text("You Won", width/2, height/2);
} // end win
