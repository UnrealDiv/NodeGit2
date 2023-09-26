function setup() {
  const sizes = {
    width:window.innerWidth,
    height:window.innerHeight
  }
  createCanvas(sizes.width, sizes.height);
}

function draw() {
  background(0);
  fill(255);
  ellipse(10,10,10);
}
