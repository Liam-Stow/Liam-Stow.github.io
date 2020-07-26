class MouseManager {
    constructor() {
        if (!MouseManager.instance) {

            // First time creating, set up vars
            this.prevMouseIsPressed = false;

            MouseManager.instance = this;
        }

        // Not first time creating, give existing stuff
        return MouseManager.instance;
    }

    consumeHover() {
        this.hoverConsumed = true;
    }

    mouseInSquare(x, y, width, height) {
        return (
            (mouseX > x)
            && (mouseX < x + width)
            && (mouseY > y)
            && (mouseY < y + height)
        )
    }

    isHoveringOverObject(gameObject) {
        let hovering = this.mouseInSquare(gameObject.x, gameObject.y, gameObject.width, gameObject.height) && !this.hoverConsumed;
        if (hovering) this.consumeHover();
        return hovering;
    }

    beginUpdate() {
        this.mouseIsPressed = mouseIsPressed;
        this.hoverConsumed = false;
    }

    getMouseDown() {
        return mouseIsPressed;
    }

    getMouseDownStarted() {
        return !this.prevMouseIsPressed && this.mouseIsPressed;
    }

    getMouseReleased() {
        return this.prevMouseIsPressed && !this.mouseIsPressed;
    }

    getMouseStillDown() {
        return this.prevMouseIsPressed && this.mouseIsPressed;
    }

    getMouseXOffset() {
        return mouseX - pmouseX;
    }

    getMouseYOffset() {
        return mouseY - pmouseY;
    }

    endUpdate() {
        this.prevMouseIsPressed = mouseIsPressed;
    }
}