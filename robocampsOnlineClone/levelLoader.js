function loadLevel(level) {
   const textArea = document.createElement('textarea'); // JS is sad, the only way to copy to clipboard is create a HTML textarea first and copy from there
   textArea.value = baseCode + levels[level];
   document.body.appendChild(textArea);
   textArea.select();
   document.execCommand('copy');
   document.body.removeChild(textArea);

   alert(`copied starter code for level ${level}! Paste it into the editor with Ctrl+V`);
}

const levels = {
   1: "function drawMap() {\n" +
      "createCanvas(400, 400);\n" +
      "rectMode(CENTER);\n" +
      "stroke(color('blue'));\n" +
      "strokeWeight(4);\n" +
      "\n" +
      "line(0, 120, width, 120);\n" +
      "\n" +
      "fill(color('green'));\n" +
      "noStroke();\n" +
      "rect(350, 60, 70,75); \n" +
      "}\n" +
      "\n" +
      "function setup() {\n" +
      "    robot = new Robot(30, 60, 0, 60);\n" +
      "\n" +
      "    // Goal: Drive the robot into the green square!\n" +
      "\n" +
      "\n" +
      "    /*\n" +
      "    To tell the robot to drive forward we use\n" +
      "        robot.move(50,0);\n" +
      "    Increasing the first number will make the robot drive further\n" +
      "    Leave the second number on zero for now\n" +
      "    */\n" +
      "\n" +
      "    robot.move(10,0);\n" +
      "\n" +
      "}\n",

   2: "function drawMap() {\n" +
      "    createCanvas(400, 400);\n" +
      "    fill(color('blue'));\n" +
      "    stroke(color(0, 0, 255));\n" +
      "    rectMode(CENTER);\n" +
      "    strokeWeight(4);\n" +
      "    \n" +
      "    line(0,100,250,100);\n" +
      "    line(250,100,250, height);\n" +
      "    fill(color('green'));\n" +
      "    noStroke();\n" +
      "    rect(330, 350, 70,70); \n" +
      "}\n" +
      "\n" +
      "function setup() {\n" +
      "    robot = new Robot(30, 60, 0, 60);\n" +
      "  \n" +
      "    // Goal: Drive the robot into the green square\n" +
      "    //       but avoid the blue lines!\n" +
      "    \n" +
      "    /*\n" +
      "    To tell the robot to drive forward we use\n" +
      "      E.g. robot.move(50,0); // drives a distance of 50\n" +
      "    Increasing the first number will make the robot drive further\n" +
      "     \n" +
      "    To tell the robot to turn we change the second number\n" +
      "      E.g. robot.move(100,2); // turns right\n" +
      "      E.g. robot.move(100,-2); // turns left\n" +
      "    A positive number will make the robot turn right whereas\n" +
      "    a negative number will make the robot turn left\n" +
      "  \n" +
      "    Writing multiple move commands will tell the robot to do\n" +
      "    them in one after the other, line by line.\n" +
      "      E.g. robot.move(100,0); // Drive forward\n" +
      "           robot.move(10,0.5); // Then turn right slightly\n" +
      "    */\n" +
      "\n" +
      "    robot.move(50,5)\n" +
      "    robot.move(50,-5)\n" +
      "\n" +
      "\n" +
      "}\n",

   3: "function drawMap() {\n" +
      "    createCanvas(600, 600);\n" +
      "    fill(color('blue'));\n" +
      "    rectMode(CENTER);\n" +
      "    stroke(color(0, 0, 255));\n" +
      "    strokeWeight(4);\n" +
      "    \n" +
      "    line(width/2,0,width/2,height/2);\n" +
      "    \n" +
      "    fill(color('green'));\n" +
      "    noStroke();\n" +
      "    rect(450, 60, 70,70); \n" +
      "    \n" +
      "}\n" +
      "\n" +
      "function setup(){\n" +
      "    robot = new Robot(150, 60, 0, 60);\n" +
      "  \n" +
      "    // Goal: Drive the robot into the green square\n" +
      "    //       but avoid the blue lines!\n" +
      "  \n" +
      "    /*\n" +
      "    To tell the robot to drive forward we use\n" +
      "      E.g. robot.move(50,0); // drives a distance of 50\n" +
      "    Increasing the first number will make the robot drive further\n" +
      "     \n" +
      "    To tell the robot turn we change the second number\n" +
      "      E.g. robot.move(100,2); // turns right\n" +
      "      E.g. robot.move(100,-2); // turns left\n" +
      "    Using a negative number will tell the robot to turn\n" +
      "    left instead using a positive\n" +
      "  \n" +
      "    Writing multiple move commands will tell the robot to do\n" +
      "    them in sucession.\n" +
      "      E.g. robot.move(100,0); // Drive forward\n" +
      "           robot.move(10,0.5); // Then turn right slightly\n" +
      "    */\n" +
      "\n" +
      "}\n",

   4: "function drawMap() {\n" +
      "    createCanvas(840, 1063);\n" +
      "    imageMode(CORNER);\n" +
      "    background(map_lvl4);\n" +
      "    rectMode(CENTER);\n" +
      "   \n" +
      "    fill(color('green'));\n" +
      "    noStroke();\n" +
      "    rect(720, 980, 70,75);\n" +
      "  \n" +
      "    fill(color('orange'));\n" +
      "    noStroke();\n" +
      "    rect(400, 530, 75,75);\n" +
      "}\n" +
      "\n" +
      "function setup(){\n" +
      "    robot = new Robot(50, 98, 0, 50);\n" +
      "  \n" +
      "    // Goal: Drive the robot into the green square\n" +
      "    //       but avoid the blue lines!\n" +
      "    // Bonus Goal: Drive to the orange square then\n" +
      "    //             the green square\n" +
      "  \n" +
      "    /*\n" +
      "    Hint: robot.move(-50,0); will tell the robot\n" +
      "          to drive backwards\n" +
      "    */\n" +
      "\n" +
      "}\n",

   5: "function drawMap() {\n" +
      "createCanvas(500, 500);\n" +
      "}\n" +
      "\n" +
      "function setup(){\n" +
      "    robot = new Robot(250,250, 0, 50);\n" +
      "  \n" +
      "    // Goal: Draw something interesting!\n" +
      "  \n" +
      "    /*\n" +
      "    To make the robot repeat a set of steps we can use a\n" +
      "    while loop. Everything between the braces { } will be\n" +
      "    repeated while the condition between the parentheses ( )\n" +
      "    is true. In this case the robot will repeat whatever is\n" +
      "    inside until it runs out of battery.\n" +
      "  \n" +
      "    Make sure you don't run the code if you have nothing inside\n" +
      "    the while loop\n" +
      "    */\n" +
      "  \n" +
      "    // Currently draws a square\n" +
      "    while(robot.hasBattery()) {\n" +
      "      robot.move(5,31.5);\n" +
      "      robot.move(80,0);\n" +
      "    }\n" +
      "\n" +
      "}\n",

   6: "function drawMap() {\n" +
      "    createCanvas(600, 600);\n" +
      "    rectMode(CENTER);\n" +
      "    \n" +
      "    fill(color('purple'));\n" +
      "    noStroke();\n" +
      "    rect(202, 580-l, 400,40);\n" +
      "    rect(398, 20+r, 400,40);\n" +
      "    \n" +
      "    fill(color('blue'));\n" +
      "    stroke(color(0, 0, 255));\n" +
      "    strokeWeight(4);\n" +
      "    \n" +
      "    line(4,0,4,600-l);\n" +
      "    line(4,600-l,400,600-l);\n" +
      "    line(400,150+r,400,600-l);\n" +
      "    \n" +
      "    line(200,0,200,450-l);\n" +
      "    line(200,0+r,596,0+r);\n" +
      "    line(596,0+r,596,600);\n" +
      "        \n" +
      "    fill(color('green'));\n" +
      "    noStroke();\n" +
      "    rect(500, 550, 70,70);\n" +
      "}\n" +
      "function setup(){\n" +
      "    l = random(0,200);\n" +
      "    r = random(0,200);\n" +
      "    robot = new Robot(100, 60, Math.PI/2, 60);\n" +
      "  \n" +
      "    // Goal: Drive the robot into the green square\n" +
      "    //       but avoid the blue lines!\n" +
      "    //       (The map changes every time!)\n" +
      "  \n" +
      "    /* \n" +
      "    A reminder:\n" +
      "    robot.move(100,5); will tell the robot to drive forward\n" +
      "        while turning right. -5 would make it turn left\n" +
      "      \n" +
      "    To make the robot repeat a set of steps we can use a\n" +
      "    while loop. Everything between the braces { } will be\n" +
      "    repeated while the condition between the parentheses ( )\n" +
      "    is true. In this case the robot will repeat whatever is\n" +
      "    inside until it either detects a purple area or it\n" +
      "    runs out of battery\n" +
      "  \n" +
      "    Make sure you don't run the code if you have nothing inside\n" +
      "    the while loop\n" +
      "    */\n" +
      "  \n" +
      "    while (!robot.detectColour(color('purple')) && robot.hasBattery()) {\n" +
      "      robot.move(1,0);\n" +
      "    }\n" +
      "\n" +
      "}\n",

   7: "function drawMap() {\n" +
      "    createCanvas(600, 600);\n" +
      "    rectMode(CENTER);\n" +
      "    \n" +
      "    noStroke();\n" +
      "    \n" +
      "    fill(color('purple'));  \n" +
      "    rect(width/2, height/2, width, height);\n" +
      "  \n" +
      "    fill(color('white'));  \n" +
      "    circle(width/2, height/2, width-20);\n" +
      "  \n" +
      "    fill(color('green'));\n" +
      "    rect(targetX, targetY, 70,70);  \n" +
      "}\n" +
      "\n" +
      "function setup(){\n" +
      "    targetX = random(70, 600-70);\n" +
      "    targetY = random(70, 600-70);\n" +
      "    robot = new Robot(300, 300, 0, 60);\n" +
      "  \n" +
      "    // Goal: Drive the robot into the green square\n" +
      "    //       (It spawns in a random position!)\n" +
      "  \n" +
      "    /*\n" +
      "    To make the robot repeat a set of steps we can use a\n" +
      "    while loop. Everything between the braces { } will be\n" +
      "    repeated while the condition between the parentheses ( )\n" +
      "    is true. In this case the robot will repeat whatever is\n" +
      "    inside until it either detects a purple area or it\n" +
      "    runs out of battery\n" +
      "  \n" +
      "    Make sure you don't run the code if you have nothing inside the\n" +
      "    while loop\n" +
      "  \n" +
      "    So far we have been telling the robot exactly what to do but\n" +
      "    what if the robot had to make decisions?\n" +
      "  \n" +
      "    To do this we use a `if` statement which looks like this:\n" +
      "      if (// condition) {\n" +
      "        // what the robot should do if it is true\n" +
      "      } else {\n" +
      "        // what the robot should do if it is false\n" +
      "      }\n" +
      "    \n" +
      "    There are a few important parts:\n" +
      "    1) Inside the parentheses ( ) is what we call a condition.\n" +
      "       This is what the robot uses to make the decision\n" +
      "    2) In the first set of braces { } is what the robot will do\n" +
      "       if the condition is true\n" +
      "    3) In the second set of braces { } (after the word 'else')\n" +
      "       is what the robot will do if the condition is false\n" +
      "  \n" +
      "  \n" +
      "    Make sure you don't run the code if you have nothing inside\n" +
      "    the while loop\n" +
      "    */\n" +
      "  \n" +
      "    while (!robot.detectColour(color('green')) && robot.hasBattery()) {\n" +
      "      robot.move(1,0);\n" +
      "    }\n" +
      "   \n" +
      "\n" +
      "}\n",

   8: "function drawMap() {\n" +
      "    createCanvas(600, 600);\n" +
      "    rectMode(CENTER);\n" +
      "    \n" +
      "    noStroke();\n" +
      "    \n" +
      "    fill(color('purple'));  \n" +
      "    rect(width/2, height/2, width, height);\n" +
      "  \n" +
      "    fill(color('white'));  \n" +
      "    rect(width/2, height/2, width-20, height-20);\n" +
      "  \n" +
      "    fill(color('green'));\n" +
      "    rect(targetX, targetY, 70,70);\n" +
      "}\n" +
      "\n" +
      "function setup(){\n" +
      "    targetX = random(70, 600-70);\n" +
      "    targetY = random(70, 600-70);\n" +
      "    robot = new Robot(50, 50, 0, 60);\n" +
      "  \n" +
      "    // Goal: Drive the robot into the green square\n" +
      "    //       (It spawns in a random position!)\n" +
      "    \n" +
      "    /*\n" +
      "    This while loop will tell the robot to repeat whatever\n" +
      "    is inside until either it detects the green square or\n" +
      "    it runs out of battery\n" +
      "  \n" +
      "    Make sure you don't run the code if you have nothing inside\n" +
      "    the while loop\n" +
      "    */\n" +
      "  \n" +
      "    while (!robot.detectColour(color('green')) && robot.hasBattery()) {\n" +
      "      robot.move(1,0);\n" +
      "    }\n" +
      "  \n" +
      "\n" +
      "}\n",

   9: "function drawMap() {\n" +
      "    createCanvas(600, 600);\n" +
      "    rectMode(CENTER);\n" +
      "    \n" +
      "    const ANGLE_SCALE = 0.058\n" +
      "    \n" +
      "    fill(color('green'));\n" +
      "    noStroke();\n" +
      "    rect(width/2, height/2, 70,70);\n" +
      "    \n" +
      "    for (let i = 0 ; i < 250 ; i = i + (500-i)/1000) {\n" +
      "        fill(color('purple'));\n" +
      "        circle(width/2+i*cos(-i*ANGLE_SCALE),height/2+i*sin(-i*ANGLE_SCALE), 8);\n" +
      "        fill(color('blue'));\n" +
      "        circle(width/2+(i+50)*cos(-i*ANGLE_SCALE),height/2+(i+50)*sin(-i*ANGLE_SCALE), 8);\n" +
      "    }\n" +
      "}\n" +
      "\n" +
      "function setup(){\n" +
      "    robot = new Robot(200, 60, 0, 60);\n" +
      "  \n" +
      "    // Goal: Drive the robot into the green square\n" +
      "    //       but avoid the blue lines!\n" +
      "  \n" +
      "    /*\n" +
      "    If you are using a while loop make sure you don't run the code\n" +
      "    if you have nothing inside the braces { }\n" +
      "    */\n" +
      "\n" +
      "}\n",

   10: "function drawMap() {\n" +
      "createCanvas(800, 600);\n" +
      "}\n" +
      "\n" +
      "function setup(){\n" +
      "    robot = new Robot(100, 100, 0, 50);\n" +
      "}\n",

   11: "function drawMap() {\n" +
      "   createCanvas(800, 600);\n" +
      "}\n" +
      "\n" +
      "function setup(){\n" +
      "    robot = new Robot(100,100, 0, 50);\n" +
      "}\n",

   12: "function drawMap() {\n" +
      "  createCanvas(600, 600);\n" +
      "  rectMode(CENTER);\n" +
      "  \n" +
      "  noStroke();\n" +
      "  \n" +
      "  fill(color('white'));\n" +
      "  rect(width / 2, height / 2, width, height)\n" +
      "  \n" +
      "  if (map_choice === 'purple') {\n" +
      "    fill(color('purple'));\n" +
      "    rect(300, 100, 50, 50);\n" +
      "    \n" +
      "    fill(color('green'));\n" +
      "    rect(70, 100, 50, 50);\n" +
      "  } else {\n" +
      "    fill(color('red'));\n" +
      "    rect(300, 100, 50, 50);\n" +
      "    \n" +
      "    fill(color('green'));\n" +
      "    rect(530, 100, 50, 50);\n" +
      "  }\n" +
      "}\n" +
      "\n" +
      "function setup() {\n" +
      "  robot = new Robot(300, 500, 4.7, 60);\n" +
      "  \n" +
      "  // Goal: Drive the robot into the green square\n" +
      "  \n" +
      "  /*\n" +
      "  You will need to detect the colour that appears in front of the robot\n" +
      "  to make a decision. If the box is purple the robot will need to drive\n" +
      "  left, if the box is red it will need to go right.\n" +
      "  \n" +
      "  Remember the while(){...} loop and the robot.detectColour() function.\n" +
      "  */\n" +
      "  \n" +
      "  // Your code here:\n" +
      "  \n" +
      "}\n",

   13: "function drawMap() {\n" +
      "  createCanvas(600, 600);\n" +
      "  rectMode(CENTER);\n" +
      "  \n" +
      "  noStroke();\n" +
      "  \n" +
      "  fill(color('white'));\n" +
      "  rect(width / 2, height / 2, width, height)\n" +
      "  \n" +
      "  if (map_choice === 'a') {\n" +
      "    fill(color('red'));\n" +
      "    rect(100, 100, 50, 50);\n" +
      "    rect(200, 100, 50, 50);\n" +
      "    rect(400, 400, 50, 50);\n" +
      "    rect(400, 300, 50, 50);\n" +
      "    rect(400, 200, 50, 50);\n" +
      "    \n" +
      "    fill(color('purple'))\n" +
      "    rect(200, 500, 50, 50);\n" +
      "    rect(500, 500, 50, 50);\n" +
      "    rect(500, 400, 50, 50);\n" +
      "    rect(500, 300, 50, 50);\n" +
      "    rect(500, 200, 50, 50);\n" +
      "    rect(400, 100, 50, 50);\n" +
      "    rect(300, 100, 50, 50);\n" +
      "    \n" +
      "    fill(color('green'));\n" +
      "    rect(300, 400, 50, 50);\n" +
      "    \n" +
      "  } else if (map_choice === 'b') {\n" +
      "    fill(color('red'));\n" +
      "    rect(100, 400, 50, 50);\n" +
      "    rect(200, 300, 50, 50);\n" +
      "    rect(300, 200, 50, 50);\n" +
      "    rect(400, 200, 50, 50);\n" +
      "    rect(400, 400, 50, 50);\n" +
      "    rect(200, 200, 50, 50);\n" +
      "    rect(100, 200, 50, 50);\n" +
      "    \n" +
      "    fill(color('purple'));\n" +
      "    rect(200, 400, 50, 50);\n" +
      "    rect(300, 300, 50, 50);\n" +
      "    rect(300, 400, 50, 50);\n" +
      "    rect(300, 500, 50, 50);\n" +
      "    rect(500, 500, 50, 50);\n" +
      "    rect(500, 400, 50, 50);\n" +
      "    rect(500, 200, 50, 50);\n" +
      "    rect(500, 100, 50, 50);\n" +
      "    rect(200, 100, 50, 50);\n" +
      "    \n" +
      "    fill(color('green'));\n" +
      "    rect(100, 100, 50, 50);\n" +
      "    \n" +
      "  } else {\n" +
      "    fill(color('red'))\n" +
      "    rect(100, 300, 50, 50);\n" +
      "    rect(300, 100, 50, 50);\n" +
      "    \n" +
      "    fill(color('purple'))\n" +
      "    rect(300, 300, 50, 50);\n" +
      "    \n" +
      "    fill(color('green'))\n" +
      "    rect(500, 100, 50, 50);\n" +
      "  }\n" +
      "}\n" +
      "\n" +
      "function setup() {\n" +
      "  robot = new Robot(100, 500, 4.7, 50);\n" +
      "  \n" +
      "  // Goal: Drive the robot into the green square\n" +
      "  \n" +
      "  /*\n" +
      "  You will need to detect the coloured squares as the robot \n" +
      "  detects them and use that to help solve the maze.\n" +
      "  There are several differnt maps, so you can't just drive.\n" +
      "  straight to the green square!\n" +
      "  \n" +
      "  You might want to use your function fromt he previous level.\n" +
      "  */\n" +
      "  \n" +
      "  // Your code here:\n" +
      "  \n" +
      "}\n"
}

const baseCode = "const MAX_PATH_LENGTH = 10000;\n" +
   "const TRAIL_LENGTH = 4000;\n" +
   "const COLOUR_SENSOR_DISTANCE = 23;\n" +
   "const IMAGE_URL = 'https://i.imgur.com/3mBQ7z2.png';\n" +
   "const LVL4_MAP = 'https://i.imgur.com/FbyLemC.png'\n;" +
   "var map_choice = ''\n" +
   "\n" +
   "function Robot(x, y, a, s) {\n" +
   "  this.x = x;\n" +
   "  this.y = y;\n" +
   "  this.a = a;\n" +
   "  this.size = s;\n" +
   "  this.battryUse = 0;"
   "  \n" +
   "  drawMap();\n" +
   "  this.history = [];\n" +
   "  this.path = [];\n" +
   "  this.pathDir = [];\n" +
   "  \n" +
   "  this.hasBattery = function hasBattery() {\n" +
   "     this.batteryUse += 1;\n" +
   "     return (this.path.length < MAX_PATH_LENGTH) && (this.batteryUse < MAX_PATH_LENGTH);\n" +
   "  }\n" +
   "  \n" +
   "  this.detectColour = function detectColour(c) {\n" +
   "    const at = get(x + cos(a) * COLOUR_SENSOR_DISTANCE, y + sin(a) * COLOUR_SENSOR_DISTANCE);\n" +
   "    return at[0] == red(c) && at[1] == green(c) && at[2] == blue(c) && at[3] == alpha(c);\n" +
   "  }\n" +
   "  \n" +
   "  this.move = function move(dist, turnRate) {\n" +
   "    for (var i = 1; i <= abs(dist); i++) {\n" +
   "    a += turnRate / 100;\n" +
   "    x = x + cos(a) * 2 * Math.sign(dist);\n" +
   "    y = y + sin(a) * 2 * Math.sign(dist);\n" +
   "    this.path.push(createVector(x, y));\n" +
   "    this.pathDir.push(Math.sign(dist));\n" +
   "    if (x >= width || x <= 0 || y >= height || y <= 0 || this.path.length > MAX_PATH_LENGTH) {\n" +
   "      return false;\n" +
   "    }\n" +
   "  }\n" +
   "  return true;\n" +
   "}\n" +
   "\n" +
   "this.render = function render(time) {\n" +
   "  if (time < this.path.length) {\n" +
   "    //robot\n" +
   "    var p = this.path[time];\n" +
   "    noStroke();\n" +
   "    fill(255, 0, 0, 255);\n" +
   "    ellipse(p.x, p.y, this.size / 3, this.size / 3);\n" +
   "    \n" +
   "    //trail\n" +
   "    for (var i = 0; i < this.history.length; i = i + 2) {\n" +
   "      var pos = this.history[i];\n" +
   "      fill(255, 0, 0, 100);\n" +
   "      ellipse(pos.x, pos.y, 8, 8);\n" +
   "    }\n" +
   "    \n" +
   "    this.history.push(createVector(p.x, p.y));\n" +
   "    \n" +
   "    //remove old history\n" +
   "    if (this.history.length > TRAIL_LENGTH) {\n" +
   "      this.history.shift();\n" +
   "    }\n" +
   "    \n" +
   "    translate(p.x, p.y);\n" +
   "    var q = this.history[this.history.length - 2];\n" +
   "    rotate(p.sub(q).mult(this.pathDir[time]).heading());\n" +
   "    imageMode(CENTER);\n" +
   "    image(img, 0, 0, this.size, this.size);\n" +
   "    }\n" +
   "  }\n" +
   "  this.move(2, 0); // make sure the robot is drawn\n" +
   "}\n" +
   "\n" +
   "function preload() {\n" +
   "  img = loadImage(IMAGE_URL);\n" +
   "  map_lvl4 = loadImage(LVL4_MAP);\n" +
   "  map_choice = random(['a', 'b', 'c'])\n" +
   "}\n" +
   "\n" +
   "let t = 0;\n" +
   "\n" +
   "function draw() {\n" +
   "  if (t < robot.path.length) {\n" +
   "    drawMap();\n" +
   "    robot.render(t);\n" +
   "    t += 1;\n" +
   "    redraw();\n" +
   "  }\n" +
   "}\n" +
   "\n";