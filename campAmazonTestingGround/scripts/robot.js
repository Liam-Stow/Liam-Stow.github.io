
const MAX_PATH_LENGTH = 10000;
const TRAIL_LENGTH = 4000;
const COLOUR_SENSOR_DISTANCE = 23;

class Robot {

    constructor(x, y, a, s, image) {
        this.x = x;
        this.y = y;
        this.a = a;
        this.size = s;
        this.image = image;
        this.history = [];
        this.path = [];
        this.pathDir = [];
        this.batteryChecks = 0;    
    }

    hasBattery() {
        this.batteryChecks += 1
        return (this.path.length < MAX_PATH_LENGTH) && (this.batteryChecks < MAX_PATH_LENGTH);
    }

    detectColour(c) {
        const at = get(x + cos(a) * COLOUR_SENSOR_DISTANCE, y + sin(a) * COLOUR_SENSOR_DISTANCE);
        return at[0] == red(c) && at[1] == green(c) && at[2] == blue(c) && at[3] == alpha(c);
    }

    move(dist, turnRate) {
        for (var i = 1; i <= abs(dist); i++) {
            this.a += turnRate / 100;
            this.x = this.x + cos(this.a) * 2 * Math.sign(dist);
            this.y = this.y + sin(this.a) * 2 * Math.sign(dist);
            this.path.push(createVector(this.x, this.y));
            this.pathDir.push(Math.sign(dist));
            if (this.x >= width || this.x <= 0 || this.y >= height || this.y <= 0 || this.path.length > MAX_PATH_LENGTH) {
                return false;
            }
        }
        return true;
    }

    render(time) {
        if (time < this.path.length) {
            //robot
            var p = this.path[time];
            noStroke();
            fill(255, 0, 0, 255);
            ellipse(p.x, p.y, this.size / 3, this.size / 3);

            //trail
            for (var i = 0; i < this.history.length; i = i + 2) {
                var pos = this.history[i];
                fill(255, 0, 0, 100);
                ellipse(pos.x, pos.y, 8, 8);
            }

            this.history.push(createVector(p.x, p.y));

            //remove old history
            if (this.history.length > TRAIL_LENGTH) {
                this.history.shift();
            }

            translate(p.x, p.y);
            var q = this.history[this.history.length - 2];
            rotate(p.sub(q).mult(this.pathDir[time]).heading());
            imageMode(CENTER);
            image(this.image, 0, 0, this.size, this.size);
        }
    }
}
