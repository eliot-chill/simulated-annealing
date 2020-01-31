var points = [];
var POINTS_NUM = 200;
var variance = 0.6;

var highlightPoints = false;



function drawPoints() {
    for (let i = 0; i < points.length; i++) {
        if (highlightPoints) {
            points[i].draw();
        }
        if (i < points.length - 1) {
            line(points[i].getX(), points[i].getY(), points[i + 1].getX(), points[i + 1].getY());
        }
    }
}

function drawLine(){
    randomPoint = random(points);

    //console.log(points.length+":"+points.indexOf(randomPoint));

    line(randomPoint.getX(),windowHeight/2,randomPoint.getX(),randomPoint.getY());

}


function setup() {
    var graphWidth = windowWidth - 50;
    var graphHeight = windowHeight / 2;
    var cnv = createCanvas(graphWidth, graphHeight);
    cnv.style('display', 'block');
    cnv.parent("canvasDiv");
    

    var xOffset = 0;
    var yOffset = 0;
    var yPoint = 0;
    var xPoint = 0;
        for (let i = 0; i < POINTS_NUM; i++) {
            xPoint = xOffset;
            yPoint = map(noise(xOffset, yOffset), 0, 1, 0, graphHeight)*variance;

            points.push(new Point(xPoint, yPoint));
            xOffset = i * (graphWidth / (POINTS_NUM - 2));

    }
    frameRate(15)

}

function draw() {
    background(255, 255, 255);
    drawPoints();
    drawLine();
}




$(document).on('input', '#variance', function () {
    variance = $(this).val();
    resetPoints();
    resetSketch();
});

$(document).on('input', '#numberOfPoints', function () {
    POINTS_NUM = $(this).val();
    resetPoints();
    resetSketch();
});

$(document).on('click', '#highlightPoints', function () {
    clear();
    if (this.checked) {
        highlightPoints = true;
        resetSketch();
    } else {
        highlightPoints = false;
        resetSketch();
    }
});

function resetPoints(){
    points = [];
}

function resetSketch() {
    setup();
}