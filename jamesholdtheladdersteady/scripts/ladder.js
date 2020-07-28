class Ladder extends TexturedGameObject {
    constructor(jamesRef) {
        const LADDER_ZONE_PADDING = 100
        const START_Y = -50;
        const WIDTH = 40;
        const HEIGHT = 158;
        const MIN_Y = windowWidth<windowHeight ? LADDER_ZONE_PADDING : windowHeight/2; // Use top of screen if on phone
        const LADDER_PEOPLE_IMAGES = ['Cecil.png', 'millz.png', 'darcy.png', 'isaac.png', 'noah.png', 'connor.png', 'lachie.png'];
        const X = random(LADDER_ZONE_PADDING, windowWidth-LADDER_ZONE_PADDING);

        super('img/ladder.png', X, START_Y, WIDTH, HEIGHT);
        this.width = WIDTH;
        this.height = HEIGHT;
        this.x = X;
        this.finalY = random(MIN_Y,windowHeight-LADDER_ZONE_PADDING);
        this.falling = true;
        this.fallSpeed = 15;
        this.lifeSpanMs = 5000;
        this.timeElapsed = 0;
        this.creationTime = new Date().getTime();
        this.jamesRef = jamesRef;
        this.wobbling = false;
        this.toppleSpeed = 2;
        this.wobblingLeft = true;
        this.wobbleSpeed = 2;
        this.maxWobbleAngle = 10;
        this.anchorPoint = createVector(this.width/2, this.height);

        this.clicked = true;
        this.holdSteadyDist = 50;

        const PERSON_SIZE = 60;
        const PERSON_POS = this.getPersonPosition(PERSON_SIZE);
        const SELECTED_LADDER_PERSON = 'img/'.concat(random(LADDER_PEOPLE_IMAGES));
        this.personYOffset = 60;
        this.person = new TexturedGameObject(SELECTED_LADDER_PERSON, PERSON_POS.x, PERSON_POS.y, PERSON_SIZE, PERSON_SIZE*1.5);
        this.person.anchorPoint = createVector(PERSON_SIZE/2, this.height + this.personYOffset);
    }

    getPersonPosition(personWidth) {
        let pos = createVector();
        pos.x = this.x + this.width/2 - personWidth/2;
        pos.y = this.y - this.personYOffset;
        return pos;
    }

    update() {
        super.update();

        if (this.y >= this.finalY) {
            // Check if still falling
            this.falling = false;
        }

        let personPos = this.getPersonPosition(this.person.width);
        this.person.setPosition(personPos.x, personPos.y);
        this.person.angleDegrees = this.angleDegrees;
        this.person.update();

        if (this.falling) {
            // Continue falling
            this.y += this.fallSpeed;
        } else {
            // check lifespan to wobble and fall
            let currentTime = new Date().getTime();
            let diff = currentTime - this.creationTime;

            // has the ladder been held steady?
            if (this.isJamesTouching() && this.clicked) {
                this.holdSteady();
            }
            
            if(this.angleDegrees > 90) {
                lose();
            }
            else if (diff > this.lifeSpanMs) {
                this.topple();
            } 
            else if (diff > this.lifeSpanMs/1.5) {
                this.wobble();
            }
        }
    }

    topple() {
        this.angleDegrees += this.toppleSpeed;
    }

    wobble() {
        if (this.wobblingLeft) {
            this.angleDegrees -= this.wobbleSpeed;
        } else {
            this.angleDegrees += this.wobbleSpeed;
        }
        if (this.angleDegrees > this.maxWobbleAngle || this.angleDegrees < -this.maxWobbleAngle){
            this.wobblingLeft = !this.wobblingLeft;
        }
    }

    isJamesTouching() {
        return dist(this.jamesRef.x,this.jamesRef.y, this.x, this.y) < this.holdSteadyDist;
    }

    holdSteady() {
        increaseScore();
        this.delete();
        this.person.delete();
    }

    onClick() {
        if (!this.falling) {
            this.clicked = true;
            this.jamesRef.moveTo(this.x, this.y);
        }
    }

    render() {
        this.person.render();
        super.render();
    }
}