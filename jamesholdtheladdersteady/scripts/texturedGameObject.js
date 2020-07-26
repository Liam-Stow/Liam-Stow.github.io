class TexturedGameObject extends GameObject {
    constructor(texturePath, x, y, width, height) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angleDegrees = 0;
        this.texture = loadImage(texturePath);
        this.visable = true;
        this.anchorPoint = createVector(0, 0) // Relative to game object's origin (this.x, this.y)
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    onClick() {}

    update() {
        if (this.mouseManager.getMouseDownStarted() && this.mouseManager.isHoveringOverObject(this)) {
            this.onClick();
        }
    }

    render() {
        if (this.visable) {
            push();

            // Transformations are added to a stack, they occur in opposite order to this sequence
            translate(this.x, this.y);
            translate(this.anchorPoint.x,this.anchorPoint.y);
            rotate(this.angleDegrees);
            translate(-this.anchorPoint.x,-this.anchorPoint.y);

            image(this.texture, 0, 0, this.width, this.height);

            pop();
        }
    }
}