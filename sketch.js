var br;
var bg;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

  bg = createButton("green");
  bg.position(250, 200);
  bg.mousePressed(green_bg)
  br = createButton("red");
  br.position(200, 200);
  br.mousePressed(red_bg)
};

function draw() {
  
  background(r,g,b)
 
  }
function green_bg(){
r=0
g=255
b=0
}
function red_bg(){
  r=255
  g=0
  b=0
  }