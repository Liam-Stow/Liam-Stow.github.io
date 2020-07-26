class GameObject {
    constructor() {
        this.mouseManager = new MouseManager();
        this.scheduleDelete = false;
    }
    
    delete() {
        this.scheduleDelete = true;
    }

    update() {}

    render() {}
}