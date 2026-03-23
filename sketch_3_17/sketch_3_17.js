function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  //sketch eye brows
  stroke(1)
  strokeWeight(5);
  
  //left brow
  beginShape();
  vertex(100,140);
  bezierVertex(130,120,160,130,170,140);
  endShape();
  
  //right brow - respond to the height of brow
  
  if (mouseY <= height/2) {
  beginShape();
  vertex(300,135+(mouseY-height/2)/10);
  bezierVertex(270,115 + (mouseY-height/2)/7, 240,125 + (mouseY-height/2)/8, 230,135 +(mouseY-height/2)/10);
  endShape();
  } else {
  beginShape();
  vertex(300,135);
  bezierVertex(270,115,240,125,230,135);
  endShape();
  }
  
  
  
  //blush
  
  stroke('pink');
  strokeWeight(5);
  for (let x = 300; x > 120; x-= 40){
    line (x,185,x-50,235);
  }
  
  //sketch mouth
  stroke(1);
  strokeWeight(5);
  //noFill();
  fill(180,0,0,200);
  
  beginShape();
  //left corner
  vertex (75,300);
  //top left arch (l-r)
  bezierVertex(130, 200, 175, 175, 200, 250);
  //top right arch (l-r)
  bezierVertex(225, 200, 270, 175, 325, 300);
  //bottom arch (r-l)
  bezierVertex(270, 400, 130, 400, 75, 300);
  //mid seam (l-r)
  bezierVertex(150, 265, 270, 255, 325, 300);
  endShape();
  
  //sketch eyes
  noStroke();
  fill(0);
  //eyes follows mouseX movements
  if (mouseX<=width){
  ellipse(150 + (mouseX-width/2)/10,170, 15, 30);
  ellipse(250 + (mouseX-width/2)/10,170, 15, 30);
  } else {
  ellipse(170,170, 15, 30);
  ellipse(270,170, 15, 30);
  }
  //glasses
  strokeWeight(1);
  stroke(0);
  noFill();
  ellipse(150, 185, 60, 25);
  ellipse(250, 185, 60, 25);
  line(180, 185, 220, 185);
  
 
}
