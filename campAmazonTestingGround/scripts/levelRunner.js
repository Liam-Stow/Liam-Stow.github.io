const ROBOT_IMAGE_URL = "img/rover.png";
let t = 0;

function preload() {
    robotImage = loadImage(ROBOT_IMAGE_URL);
}

function draw() {
    if (t < robot.path.length) {
        background(255)
        robot.render(t);
        t += 1;
        redraw();
    }
}

function setup() {
    createCanvas(600, 600);
    robot = new Robot(30, 60, 0, 60, robotImage);
    robot.move(10, 0);
    robot.move(10, 0);
    robot.move(10, 0);
    robot.move(10, 0);
}
