//Person "class"
function Person(x, y) {
	this.x = x;
	this.y = y;
	this.w = 10;
	this.s = 10;
	this.draw = function() {
		fill(255,255,255);
		ellipse(this.x, this.y, this.w);
	}
	this.move = function() {
		this.x += random(this.s) - this.s/2;
		this.y += random(this.s) - this.s/2;
	}
}

var people = [];
var pLimit = 50;

function setup() {
  // put setup code here
	createCanvas(800, 600);
	for(var pIndex = 0; pIndex < pLimit; pIndex++) {
		people.push(new Person(random(width),random(height)));
	}
}

function draw() {
  // put drawing code here
	background(0,0,0);
	for(var pCount = 0; pCount < people.length; pCount++) {
		var currentPerson = people[pCount];
		currentPerson.move();
		currentPerson.draw();
	}
}

function mousePressed() {
	console.log("Mouse pressed.");
}

function keyPressed() {
	console.log("Key pressed." + key);
}

