let cWidth = 720;
let cHeight = 400;
let bColor;
let bSize;
let splash = true;

function setup() {
  createCanvas(cWidth, cHeight);
  background(240); // background off-white
  bColor = color(255, 0, 0); // default brush red
  bSize = 5; // default brush small
  
  // Splash screen
  textAlign(CENTER, CENTER);
  textSize(20);
  text("Paint using your mouse or touchscreen.\nClick anywhere to begin.", cWidth / 2, cHeight / 2);

  // Brush color buttons
  let redButton = createButton('');
  redButton.style('background-color', 'red');
  redButton.size(30, 30)
  redButton.position(10, cHeight + 10);
  redButton.mousePressed(() => bColor = color(255, 0, 0));

  let greenButton = createButton('');
  greenButton.style('background-color', 'green');
  greenButton.size(30, 30)
  greenButton.position(50, cHeight + 10);
  greenButton.mousePressed(() => bColor = color(0, 255, 0));

  let blueButton = createButton('');
  blueButton.style('background-color', 'blue');
  blueButton.size(30, 30)
  blueButton.position(90, cHeight + 10);
  blueButton.mousePressed(() => bColor = color(0, 0, 255));

  // Brush size buttons
  let smallButton = createButton('●');
  smallButton.style('font-size', '15px');
  smallButton.size(30, 30)
  smallButton.position(130, cHeight + 10);
  smallButton.mousePressed(() => bSize = 5);

  let mediumButton = createButton('●');
  mediumButton.style('font-size', '30px');
  mediumButton.size(30, 30)
  mediumButton.position(170, cHeight + 10);
  mediumButton.mousePressed(() => bSize = 10);

  let largeButton = createButton('●');
  largeButton.style('font-size', '45px');
  largeButton.size(30, 30)
  largeButton.style('text-align', 'center');
  largeButton.position(210, cHeight + 10);
  largeButton.mousePressed(() => bSize = 20);
  
  // Clear button
  let clearButton = createButton('🗑️');
  clearButton.size(30, 30)
  clearButton.style('text-align', 'center');
  clearButton.position(250, cHeight + 10);
  clearButton.mousePressed(() => background(220));
  
  // Name label
  let label = createP('Masoncrosoft Paint');
  label.position(290, cHeight - 13);
  label.style('font-size', '24px');
  label.style('font-family', 'Arial');
}

function draw() {
  if (mouseIsPressed && splash) { // First click
    background(240); // Clear the splash screen
    splash = false; // Prevent splash appearing again
  }

  if (mouseIsPressed && !splash) { // Drawing
    stroke(bColor); // Set color
    strokeWeight(bSize); // Set size
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
