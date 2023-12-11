let faceImage;

function preload() {
  // Load the face image during preload before the sketch is set up
  faceImage = loadImage('https://sophialius.github.io/background.png');
}

function setup() {
  createCanvas(600, 600);

  // Calculate the position to center the image
  let x = width / 2 - 300; // half of canvas width minus half of image width
  let y = height / 2 - 300; // half of canvas height minus half of image height

  // Display the image in the center of the screen with a size of 800 by 800 pixels
  image(faceImage, x, y, 600, 600);
}

function draw() {
  // Set the custom cursor
    if (mouseY < height / 2) {
    cursor('https://sophialius.github.io/small_mascara.png');
  } else {
    cursor('https://sophialius.github.io/medium_lipstick.png');
  }
}

function mouseDragged() {
  // Blur the line slightly by using stroke properties and blend mode
     if (mouseY < height / 2) {
   stroke(random(255),random(255),random(255),80);
  } else {
   stroke(255, 0, 0, 80);
  } 
    
  strokeWeight(10); // Set the stroke weight
  strokeCap(ROUND); // Set the stroke cap to round
  strokeJoin(ROUND); // Set the stroke join to round

  // Draw a line from the previous mouse position to the current position
  line(pmouseX, pmouseY, mouseX, mouseY);
  
  return false;
}