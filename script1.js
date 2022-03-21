var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var footer = document.getElementById("footer");

ctx.imageSmoothingEnabled = true;

var xPos = c.width / 2;
var yPos = c.width / 2;

var rotations = 4;
var angle = 0;
var length = 5;
var iterations = 0;
var maxIterations = 30000;

var line = 2;

ctx.lineWidth = line;

ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function getRandomInt(max) {
    return Math.floor(Math.random() * (max));
}  

function draw() {
    while (iterations <= maxIterations) {
        if (((xPos <= 0) || (xPos >= c.width)) || ((yPos <= 0) || (yPos >= c.height))) {
            xPos = c.width / 2;
            yPos = c.height / 2;
            draw()
        }
        ctx.beginPath();
        ctx.moveTo(xPos, yPos);

        angle = (360 / rotations) * getRandomInt(rotations);

        xPos += length * Math.cos((angle / 180) * Math.PI);
        yPos -= length * Math.sin((angle / 180) * Math.PI);

        ctx.lineTo(xPos, yPos);
        ctx.stroke();

        iterations ++;
    }
}

draw();