class James extends TexturedGameObject {
    constructor() {
        const DEFAULT_SIZE = 100;
        super('img/James.png', 100, windowHeight-DEFAULT_SIZE*2, DEFAULT_SIZE, DEFAULT_SIZE*1.5);

        this.targetX = this.x;
        this.targetY = this.y;
        this.oldX = this.x;
        this.oldY = this.y;

        this.speed = 35;
        this.positionTolerance = this.speed*1.01;
    }

    moveTo(x, y) {
        this.targetX = x;
        this.targetY = y;
    }

    update() {
        super.update();

        let currentPos = createVector(this.x, this.y);
        let targetPos = createVector(this.targetX, this.targetY);

        let moveDirection = targetPos.sub(currentPos);
        moveDirection.normalize();
        let movementVector = moveDirection.mult(this.speed);
        let newPosition = currentPos.add(movementVector);

        this.setPosition(newPosition.x, newPosition.y);

        if (dist(this.x, this.y, this.targetX, this.targetY) < this.positionTolerance) {
            this.oldX = this.x;
            this.oldY = this.y;
            this.targetX = this.x;
            this.targetY = this.y;
        }
    }

    onTarget() {
        return dist(this.x, this.y, this.targetX, this.targetY) < this.positionTolerance;
    }

}