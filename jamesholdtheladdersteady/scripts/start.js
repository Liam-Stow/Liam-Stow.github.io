const mouseManager = new MouseManager();
let bgImage;
let gameObjects = [];
let score = 0;
let lost = false;
let loseFont;

function preload() {
    loseFont = loadFont('fonts/8-bit-wonder.ttf');
    bgImage = loadImage('img/bg.jpg');
    angleMode(DEGREES);
    restart();
}

function setup() {
    createCanvas(windowWidth,windowHeight);
}

function draw() {
    
    mouseManager.beginUpdate();

    // Check if still playing
    if (lost) {
        renderBackground();
        showLoss();
    } else {
        
        // update objects
        gameObjects.forEach(gameObject => {
            gameObject.update();
        });

        // delete finished objects
        gameObjects = gameObjects.filter(obj => !obj.scheduleDelete);
        
        
        // render objects
        renderBackground();
        gameObjects.forEach(gameObject => {
            gameObject.render();
        })
    }
    
    mouseManager.endUpdate();
}

function showLoss() {
    textSize(20);
    textFont(loseFont);
    textAlign(CENTER, CENTER);
    text('You Lost\nYour score was ' + score, windowWidth/2, windowHeight/2);
}

function lose() {
    lost = true;
    let button = createButton("Play again");
    button.position((windowWidth/2)-(button.width*1.4), windowHeight/2+50);
    button.style('z-index', '20');
    button.style('text-align', 'center');
    button.style('padding','15px');
    button.style('background-color','lightgray');
    button.style('text-shadow','-1px -1px black, 1px 1px white');
    button.style('color','gray');
    button.style('border-radius','7px');
    button.style('font-size','15pt');
    button.style('font-family','BITWONDER');
    button.mousePressed(()=>{restart(); button.remove()});
}

function increaseScore() {
    score += 1;
}

function renderBackground() {
    resizeCanvas(windowWidth, windowHeight);
    background(0,0,0,0)
}

function restart() {
    gameObjects = [];
    score = 0;
    lost = false;
    let james = new James();
    gameObjects.push(new LadderManager(james));
    gameObjects.push(james);
}